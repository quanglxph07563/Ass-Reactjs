import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import http from "../../../api/api";
function LienHe() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    document.getElementsByClassName("loi").innerHTML = "";
    http
      .post("lien-he/", data)
      .then(function (response) {
        swal({
          title: "Phản hồi thành công",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div
        className="container "
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-10 ">
            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Họ tên</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Nhập họ tên"
                  ref={register({
                    required: true,
                    pattern: /^[^\s].*/,
                    minLength: 10,
                    maxLength: 60,
                  })}
                />
                <span className="loi">
                  {errors.name?.type === "required" &&
                    "Tên không được để trống"}
                  {errors.name?.type === "pattern" &&
                    "Không được chưa khoảng cách ở đầu"}
                  {errors.name?.type === "minLength" &&
                    "Tên không được nhỏ hơn 10 ký tự"}
                  {errors.name?.type === "maxLength" &&
                    "Tên không được lớn hơn 60 ký tự"}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Địa chỉ</label>
                <input
                  ref={register({
                    required: true,
                    pattern: /^[^\s].*/,
                    minLength: 10,
                    maxLength: 200,
                  })}
                  type="text"
                  className="form-control"
                  id="dia_chi"
                  placeholder="Địa chỉ"
                  name="dia_chi"
                />
                <span className="loi">
                  {errors.dia_chi?.type === "required" &&
                    "Địa chỉ không được để trống"}
                  {errors.dia_chi?.type === "pattern" &&
                    "Không được chưa khoảng cách ở đầu"}
                  {errors.dia_chi?.type === "minLength" &&
                    "Địa chỉ không được nhỏ hơn 10 ký tự"}
                  {errors.dia_chi?.type === "maxLength" &&
                    "Địa chỉ không được lớn hơn 200 ký tự"}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name='email'
                  placeholder="Nhập Email"
                  ref={register({
                    required: true,
                  })}
                />
                 <span className="loi">
                {errors.email?.type === "required" &&
                  "Email không được để trống"}
                  </span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Nội dung</label>
                <textarea
                  className="form-control"
                  id="content"
                  rows={8}
                  defaultValue={""}
                  name="detail"
                  ref={register({
                    required: true,
                    pattern: /^[^\s].*/,
                  })}
                />
                 <span className="loi">
                {errors.detail?.type === "required" &&
                  "Chi tiết không được để trống"}
                {errors.detail?.type === "pattern" &&
                  "Không được chưa khoảng cách ở đầu"}
                </span>
              </div>
              <button type="submit" id="gui" className="btn btn-primary">
                Gửi phản hồi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LienHe;
