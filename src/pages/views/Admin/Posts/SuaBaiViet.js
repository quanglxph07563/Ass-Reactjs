import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import http from "../../../../api/api.js";

const SuaBaiViet = () => {
  let history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  let { id } = useParams();
  const [detail, setDetail] = useState({});
  const [category, setCategory] = useState([]);
  const [detailBV, setDetailBV] = useState({});

  let categoryDetail = 0;
  const setList = () => {
    http
      .get("posts/" + id)
      .then(function (response) {
        setDetail(response.data);
        categoryDetail = response.data.id_article_categories;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(setList, []);
  const getcategory = () => {
    var htmlCategory = '<option value ="">Choose...</option>';
    http
      .get("get-all-article-category")
      .then(function (response) {
        setCategory(response.data);
        response.data.map(
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
  const onSubmit = (data) => {
    data.images = document.querySelector("#show_images img").src;
    data.detail = detailBV;
    http
      .put("posts/" + id, data)
      .then(function (response) {
        swal({
          title: "Cập nhật thành công",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          history.push("/admin/danh-sach-bai-viet");
        });
      })
      .catch(function (error) {
        document.getElementById("detail").innerHTML = "";

        var loi = error.response.data.errors;
        for (const property in loi) {
          document.getElementById(`${property}`).innerHTML = `${loi[property]}`;
        }
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
    <form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-lg-12">
          <div className="card position-relative">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Cập nhật sản phẩm
              </h6>
            </div>
            <div className="card-body row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Danh mục</label>
                  <select
                    name="id_article_categories"
                    ref={register({ required: true })}
                    className="custom-select"
                    id="inputGroupSelect01"
                  ></select>
                  {errors.id_article_categories && (
                    <span className="loi">Danh mục không được để trống</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Tiêu đề bài viết</label>
                  <input
                    type="text"
                    onChange={onHandleChange}
                    value={detail.title}
                    ref={register({
                      required: true,
                      pattern: /^[^\s].*/,
                      minLength: 10,
                      maxLength: 200,
                    })}
                    className="form-control"
                    name="title"
                  />
                  <span className="loi">
                    {errors.title?.type === "required" &&
                      "Tiêu đề bài viết không được để trống"}
                    {errors.title?.type === "pattern" &&
                      "Không được chưa khoảng cách ở đầu"}
                    {errors.title?.type === "minLength" &&
                      "Tiêu đề bài viết không được nhỏ hơn 10 ký tự"}
                    {errors.title?.type === "maxLength" &&
                      "Tiêu đề bài viết không được lớn hơn 200 ký tự"}
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
                  <div id="show_images" className="pt-3">
                    <img
                      style={{ width: "200px" }}
                      src={detail.images}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <CKEditor
                  editor={ClassicEditor}
                  data={detail.detail}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDetailBV(data);
                  }}
                />
                <span className="loi" id="detail"></span>
                <div className="d-flex justify-content-end mt-3">
                  <button type="submit" class="btn btn-primary">
                    Cập nhật bài viết
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SuaBaiViet;
