import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import http from "../../../../api/api.js";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

function EditDanhMucBaiViet() {
    let history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    let { id } = useParams();
    const [detail, setDeatil] = useState({});
    const [category, setCategory] = useState([]);
    const setList =  () => {
        http
        .get("article-category/" + id)
        .then(function (response) {
          // console.log(response.data)
          setDeatil(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    useEffect(setList, []);
    const capNhatDanhMuc = (data) => {
      data.id_danhmuc = id
      http
        .put("article-category/" + id, data)
        .then(function (response) {
          swal({
            title: 'Cập nhật thành công',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
          }).then(()=>{
          history.push("/admin/danh-muc-bai-viet");
          })
        })
        .catch(function (error) {
          document.getElementById('trung_ten').innerHTML = error.response.data.errors.name_category

          console.log(error);
        });
    };
    const onHandleChange = (e) => {
      const { name, value } = e.target;
      setDeatil({
        ...detail,
        [name]: value,
      });
    };
    return (
        <form method="POST" onSubmit={handleSubmit(capNhatDanhMuc)}>
        <div className="row">
          <div className="col-lg-12">
            <div className="card position-relative">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
               Cập nhật danh mục
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
                        pattern:/^[^\s].*/,
                        minLength: 5,
                        maxLength: 60,
                      })}
                      onChange={onHandleChange}
                      value={detail.name_category}
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
                   Cập nhật danh mục
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

export default EditDanhMucBaiViet
