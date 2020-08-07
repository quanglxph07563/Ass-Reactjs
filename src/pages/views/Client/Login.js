import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import '../../../styleAuth/fonts/iconic/css/material-design-iconic-font.min.css'
import '../../../styleAuth/vendor/animate/animate.css'
import '../../../styleAuth/vendor/css-hamburgers/hamburgers.min.css'
import '../../../styleAuth/vendor/css-hamburgers/hamburgers.min.css'
import '../../../styleAuth/vendor/animsition/css/animsition.min.css'
import '../../../styleAuth/css/util.css'
import '../../../styleAuth/css/main.css'
import { Link } from "react-router-dom";

import background from '../../../styleAuth/images/bg-01.jpg'
import swal from "sweetalert";
import http from '../../../api/api';
function Login() {
const { register, handleSubmit, watch, errors } = useForm();
let history = useHistory();

const onSubmit = (data) => {
  console.log(data)
  http
    .post("auth/login", data)
    .then(function (response) {
      swal({
        title: 'Đăng nhập thành công',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
      }).then(()=>{
        localStorage.setItem('userToken',response.data.access_token)
      history.push("/");
      })
    })
    .catch(function (error) {
    });
};
    return (
        <div>
        <div className="limiter">
          <div className="container-login100" style={{backgroundImage: `url(${background})`}}>
            <div className="wrap-login100">
              <form className="login100-form validate-form" onSubmit={handleSubmit(onSubmit)}>
                <span className="login100-form-logo">
                  <i className="zmdi zmdi-landscape" />
                </span>
                <span className="login100-form-title p-b-34 p-t-27">
                  Log in
                </span>
                <div className="wrap-input100 validate-input" data-validate="Enter username">
                  <input className="input100"
                  ref={register({
                    required: true
                  })}
                  type="email" name="email" placeholder="Email" />
                  <span className="focus-input100" data-placeholder="" />
                  <span className="loi" >
                      {errors.email?.type === "required" &&
                        "Username không được để trống"}
                    </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <input className="input100"
                     ref={register({
                      required: true
                    })}
                  type="password" name="password" placeholder="Password" />
                  <span className="focus-input100" data-placeholder="" />
                  <span className="loi" >
                      {errors.password?.type === "required" &&
                        "Password không được để trống"}
                    </span>
                </div>
                <div className="contact100-form-checkbox">
                  <input className="input-checkbox100" 
                  id="ckb1" type="checkbox" name="remember-me" />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Login
                  </button>
                </div>
                <div className="text-center p-t-90">
                  <Link className="txt1" to="signup">
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>
    )
}

export default Login
