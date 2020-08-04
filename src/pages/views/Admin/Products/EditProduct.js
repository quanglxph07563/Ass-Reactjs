import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  let history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  let { id } = useParams();
  const [detail, setDetail] = useState({});
  const [category, setCategory] = useState([]);
  const [detailSp, setDetailSp] = useState({});

  let categoryDetail = 0;
  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/products/" + id)
      .then(function (response) {
        // console.log(response.data)
        setDetail(response.data.data);
        console.log(response.data.data.idCategory);
        categoryDetail = response.data.data.idCategory;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(setList, []);
  const getcategory = () => {
    var htmlCategory = '<option value ="">Choose...</option>';
    axios
      .get("http://127.0.0.1:8000/api/category")
      .then(function (response) {
        setCategory(response.data.data);
        response.data.data.map(
          (item, index) =>
            (htmlCategory += `<option ${
              item.id == categoryDetail ? "selected" : ""
            }  value =${item.id}>${item.name_category}</option>`)
        );
        document.getElementById("inputGroupSelect01").innerHTML = htmlCategory;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(getcategory, []);
  const capNhatSanPham = (data) => {
    data.images = document.querySelector("#show_images img").src;
    axios
      .put("http://127.0.0.1:8000/api/products/" + id, data)
      .then(function (response) {
        history.push("/admin/products");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setDetail({
      ...detail,
      [name]: value,
    });
  };

  const loadImageFileAsURL = (e) => {
    var file = e.target;
    var filesSelected = file.files;
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
      var fileReader = new FileReader();
      fileReader.onload = function (fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64
        document.querySelector("#show_images img").src = srcData;
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  };

  return (
    <form method="POST" onSubmit={handleSubmit(capNhatSanPham)}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Danh mục</label>
            <select
              name="idCategory"
              ref={register({ required: true })}
              className="custom-select"
              id="inputGroupSelect01"
            ></select>
            {errors.idCategory && (
              <span className="loi">Danh mục không được để trống</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
            <input
              type="text"
              onChange={onHandleChange}
              className="form-control"
              ref={register({ required: true, minLength: 10, maxLength: 60 })}
              value={detail.name_product}
              name="name_product"
            />
            <span className="loi">
              {errors.name_product?.type === "required" &&
                "Tên sản phẩm không được để trống"}
              {errors.name_product?.type === "minLength" &&
                "Tên sản phẩm không được nhỏ hơn 10 ký tự"}
              {errors.name_product?.type === "maxLength" &&
                "Tên sản phẩm không được lớn hơn 60 ký tự"}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"> Ảnh Sản Phẩm</label>
            <input
              type="file"
              onChange={loadImageFileAsURL}
              className="form-control"
              id="images"
              name="images"
              // ref={register({ required: true })}
            />
            {/* {errors.images && <span className="loi">Ảnh không được để trống</span>} */}

            <span className="error" style={{ color: "red" }} />
            <div id="show_images">
              <img src={detail.images} alt="" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Giá Tiền</label>
            <input
              type="number"
              ref={register({ required: true, min: 0 })}
              onChange={onHandleChange}
              value={detail.price}
              className="form-control"
              name="price"
            />
            <span className="loi">
              {errors.price?.type === "required" &&
                "Giá sản phẩm không dược để trống"}
              {errors.price?.type === "min" &&
                "Giá sản phẩm không được lớn hơn 0 "}
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"></label>
            <input
              type="number"
              ref={register({ required: true, min: 0 })}
              onChange={onHandleChange}
              className="form-control"
              value={detail.amount}
              name="amount"
            />
            <span className="loi">
              {errors.amount?.type === "required" &&
                "Số lượng sản phẩm không dược để trống"}
              {errors.amount?.type === "min" &&
                "Số lượng sản phẩm không được lớn hơn 0 "}
            </span>
          </div>
          <CKEditor
            editor={ClassicEditor}
            data={detail.detail}
            onChange={(event, editor) => {
              const data = editor.getData();
              setDetailSp(data);
            }}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" class="btn btn-primary">
            Cập nhật sản phẩm
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditProduct;
