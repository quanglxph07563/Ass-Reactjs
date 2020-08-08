import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../../styleAuth/fonts/iconic/css/material-design-iconic-font.min.css";
import "../../../styleAuth/vendor/animate/animate.css";
import "../../../styleAuth/vendor/css-hamburgers/hamburgers.min.css";
import "../../../styleAuth/vendor/css-hamburgers/hamburgers.min.css";
import "../../../styleAuth/vendor/animsition/css/animsition.min.css";
import "../../../styleAuth/css/util.css";
import "../../../styleAuth/css/main.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

import background from "../../../styleAuth/images/bg-01.jpg";

import http from "../../../api/api";

function Signup() {
  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    http
      .post("auth/create", data)
      .then(function (response) {
        swal({
          title: "Đăng kí tài khoản thành công",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          history.push("login");
        });
      })
      .catch(function (error) {
        document.getElementById("password_confirm").innerHTML = "";
        document.getElementById("email").innerHTML = "";
        var loi = error.response.data.errors;
        for (const property in loi) {
          document.getElementById(`${property}`).innerHTML = `${loi[property]}`;
        }
      });
  };
  return (
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="wrap-login100">
            <form
              method="POST"
              className="login100-form validate-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <span className="login100-form-logo">
                <i className="zmdi zmdi-landscape" />
              </span>
              <span className="login100-form-title p-b-34 p-t-27">Signup</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter name"
              >
                <input
                  className="input100"
                  ref={register({
                    required: true,
                    minLength: 5,
                    maxLength: 60,
                  })}
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <span className="focus-input100" data-placeholder="" />
                <span className="loi" id="trung_ten">
                  {errors.name?.type === "required" &&
                    "Tên  không được để trống"}
                  {errors.name?.type === "minLength" &&
                    "Tên  không được nhỏ hơn 5 ký tự"}
                  {errors.name?.type === "maxLength" &&
                    "Tên  không được lớn hơn 60 ký tự"}
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter email"
              >
                <input
                  className="input100"
                  type="email"
                  ref={register({
                    required: true,
                  })}
                  name="email"
                  placeholder="Email"
                />
                <span className="focus-input100" data-placeholder="" />
                <span className="loi" id="email">
                  {errors.email?.type === "required" &&
                    "Email không dược để trống"}
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Phone number"
              >
                <input
                  className="input100"
                  type="number"
                  ref={register({
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  })}
                  name="phone"
                  placeholder="Phone number"
                />
                <span className="focus-input100" data-placeholder="" />
                <span className="loi">
                  {errors.phone?.type === "required" &&
                    "Số điện thoại không dược để trống"}
                  {errors.phone?.type === "maxLength" &&
                    "Số điện thoại  không được lớn hơn 10 ký tự"}
                  {errors.phone?.type === "minLength" &&
                    "Số điện thoại  không được nhỏ hơn 10 ký tự"}
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  className="input100"
                  type="password"
                  ref={register({
                    required: true,
                  })}
                  name="password"
                  placeholder="Password"
                />
                <span className="focus-input100" data-placeholder="" />
                <span className="loi">
                  {errors.password?.type === "required" &&
                    "Password không dược để trống"}
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  className="input100"
                  type="password"
                  ref={register({
                    required: true,
                  })}
                  name="password_confirm"
                  placeholder="Password confirm"
                />
                <span className="focus-input100" data-placeholder="" />
                <span className="loi" id="password_confirm">
                  {errors.password_confirm?.type === "required" &&
                    "Passworl confirm không dược để trống"}
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Sign up</button>
              </div>
              <div className="text-center p-t-90">
                <Link className="txt1" to="login">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
}

export default Signup;
