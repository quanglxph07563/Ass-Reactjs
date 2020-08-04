import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

function AddCategory() {
  let history = useHistory();
const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    data.images = document.querySelector("#show_images img").src;
    axios
      .post("http://127.0.0.1:8000/api/category/", data)
      .then(function (response) {
        history.push("/admin/category");
      })
      .catch(function (error) {
        document.getElementById('trung_ten').innerHTML = error.response.data.errors.name_category
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
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-12">
            <div className="card position-relative">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                 Thêm mới danh mục
                </h6>
              </div>
              <div className="card-body row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên danh mục</label>
                    <input
                      type="text"
                      ref={register({
                        required: true,
                        minLength: 2,
                        maxLength: 60,
                      })}
                      className="form-control"
                      name="name_category"
                    />
                    <span className="loi" id='trung_ten'>
                      {errors.name_category?.type === "required" &&
                        "Tên danh mục không được để trống"}
                      {errors.name_category?.type === "minLength" &&
                        "Tên danh mục không được nhỏ hơn 2 ký tự"}
                      {errors.name_category?.type === "maxLength" &&
                        "Tên danh mục không được lớn hơn 60 ký tự"}
                    </span>
                  </div>
                  <div className="form-group">
                  <label htmlFor="exampleInputPassword1"> Ảnh danh mục</label>
                  <input
                    type="file"
                    onChange={loadImageFileAsURL}
                    className="form-control"
                    id="images"
                    name="images"
                    ref={register({ required: true })}
                  />
                  <span className="loi" >
                    {errors.images?.type === "required" && "Chọn ảnh danh mục"}
                  </span>
                  <div id="show_images" className='pt-3'>
                    <img style={{width: '200px'}} src alt="" />
                  </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Mô tả danh mục
                  </label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows={5}
                    defaultValue={""}
                    ref={register({ required: true })}
                  />
                  {errors.description && (
                    <span className="loi">
                      {" "}
                      Mô tả danh mục không được để trống
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
                    Thêm mới danh mục
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
}

export default AddCategory
