import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import http from "../../../../api/api.js";

function AddDanhMucBaiViet() {
  let history = useHistory();
const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    http
      .post("article-category/", data)
      .then(function (response) {
        swal({
          title: 'Thêm mới thành công',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        }).then(()=>{
        history.push("/admin/danh-muc-bai-viet");
        })
      })
      .catch(function (error) {
        document.getElementById('trung_ten').innerHTML = error.response.data.errors.name_category
      });
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
                        minLength: 5,
                        pattern:/^[^\s].*/,
                        maxLength: 60,
                      })}
                      className="form-control"
                      name="name_category"
                    />
                    <span className="loi" id='trung_ten'>
                      {errors.name_category?.type === "required" &&
                        "Tên danh mục không được để trống"}
                          {errors.name_category?.type === "pattern" &&
                      "Không được chưa khoảng cách ở đầu"}
                      {errors.name_category?.type === "minLength" &&
                        "Tên danh mục không được nhỏ hơn 5 ký tự"}
                      {errors.name_category?.type === "maxLength" &&
                        "Tên danh mục không được lớn hơn 60 ký tự"}
                    </span>
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
        </div>
      </form>
    )
}

export default AddDanhMucBaiViet
