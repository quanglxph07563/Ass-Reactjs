import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
const AddProduct = () => {
  let history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const [category, setCategory] = useState([]);

  const onSubmit = (data) => {
    data.images = document.querySelector("#show_images img").src;
    axios
      .post("http://127.0.0.1:8000/api/products/", data)
      .then(function (response) {
        history.push("/admin/products");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getcategory = () => {
    axios
      .get("http://127.0.0.1:8000/api/category")
      .then(function (response) {
        setCategory(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(getcategory, []);
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
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Danh mục</label>
            <select
              name="idCategory"
              ref={register({ required: true })}
              className="custom-select"
              id="inputGroupSelect01"
            >
              <option value='' selected>Choose...</option>
              {category.map((item, index) => (
                <option
                value ={item.id}>{item.name_category}</option>
                 ))}
            </select>
            {errors.idCategory && (
              <span className="loi">Danh mục không được để trống</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
            <input
              type="text"
              ref={register({ required: true, minLength: 10, maxLength: 60 })}
              className="form-control"
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
              ref={register({ required: true })}
            />
            <span className="loi">
              {errors.images?.type === "required" && "Chọn ảnh sản phẩm"}
            </span>
            <div id="show_images">
              <img src alt="" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Giá Tiền</label>
            <input
              type="number"
              ref={register({ required: true, min: 0 })}
              className="form-control"
              name="price"
            />
            {/* {errors.price && <span className="loi">Giá Tiền không được để trống và k được lớn hơn 3</span>} */}
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
            <label htmlFor="exampleInputPassword1">Số Lượng</label>
            <input
              type="number"
              ref={register({ required: true, min: 0 })}
              className="form-control"
              name="amount"
            />
            <span className="loi">
              {errors.amount?.type === "required" &&
                "Số lượng sản phẩm không dược để trống"}
              {errors.amount?.type === "min" &&
                "Số lượng sản phẩm không được lớn hơn 0 "}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Chi tiết sản phẩm
            </label>
            <textarea
              className="form-control"
              name="detail"
              rows={5}
              defaultValue={""}
              ref={register({ required: true })}
            />
            {errors.detail && (
              <span className="loi">
                {" "}
                Chi tiết sản phẩm không được để trống
              </span>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="submit"
            // onClick={() => addSanPham()}
            class="btn btn-primary"
          >
            Thêm mới sản phẩm
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
