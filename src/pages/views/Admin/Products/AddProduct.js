import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import swal from "sweetalert";
import http from "../../../../api/api.js";

const AddProduct = () => {
  let history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const [category, setCategory] = useState([]);
  const [detail, setDetail] = useState();

  const onSubmit = (data) => {
    data.images = document.querySelector("#show_images img").src;
    data.detail = detail;
    document.getElementsByClassName('loi').innerHTML=''
    http
      .post("products/", data)
      .then(function (response) {
        swal({
          title: 'Thêm mới thành công',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        }).then(()=>{
          history.push("/admin/products");
        });
      })
      .catch(function (error) {
        document.getElementById('sale').innerHTML = ''
        document.getElementById('detail').innerHTML = ''

        var loi= error.response.data.errors
        for (const property in loi) {
           document.getElementById(`${property}`).innerHTML = `${loi[property]}`
        }
        console.log(error);
      });
  };
  const getcategory = () => {
    http
      .get("get-all-category")
      .then(function (response) {
        setCategory(response.data);
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
        <div className="col-lg-12">
          <div className="card position-relative">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Thêm mới sản phẩm
              </h6>
            </div>
            <div className="card-body row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Danh mục</label>
                  <select
                    name="idCategory"
                    ref={register({ required: true })}
                    className="custom-select"
                    id="inputGroupSelect01"
                  >
                    <option value={0} selected>
                      Choose...
                    </option>
                    {category.map((item, index) => (
                      <option value={item.id}>{item.name_category}</option>
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
                    ref={register({
                      required: true,
                      pattern:/^(?=[A-Za-z0-9])([A-Za-z0-9\s]*)(?<=[A-Za-z0-9])$/,
                      minLength: 10,
                      maxLength: 60,
                     
                    })}
                    className="form-control"
                    name="name_product"
                  />
                  <span className="loi">
                    {errors.name_product?.type === "required" &&
                      "Tên sản phẩm không được để trống"}
                       {errors.name_product?.type === "pattern" &&
                      "Chỉ được nhập chữ và số"}
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
                  <div id="show_images" className="pt-3">
                    <img style={{ width: "200px" }} src alt="" />
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
                  <label htmlFor="exampleInputPassword1">Sale</label>
                  <input
                    type="number"
                    ref={register({ required: true, min: 0 })}
                    className="form-control"
                    name="sale"
                  />
                  {/* {errors.price && <span className="loi">Giá Tiền không được để trống và k được lớn hơn 3</span>} */}
                  <span className="loi" id='sale'>
                    {errors.sale?.type === "required" &&
                      "Sale phẩm không dược để trống"}
                    {errors.sale?.type === "min" &&
                      "Sale sản phẩm không được lớn hơn 0 "}
                  </span>
                </div>
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
                <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDetail(data);
                    // console.log( { event, editor, data } );
                  }}
                />
                 <span className="loi" id='detail'>
                   
                  </span>
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
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
