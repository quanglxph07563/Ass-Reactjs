import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import swal from "sweetalert";
import http from "../../../../api/api.js";

const AddBaiViet = () => {
  let history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const [category, setCategory] = useState([]);
  const [detail, setDetail] = useState();

  const onSubmit = (data) => {
    data.images = document.querySelector("#show_images img").src;
    data.detail = detail;
    document.getElementsByClassName('loi').innerHTML=''
    http
      .post("posts/", data)
      .then(function (response) {
        swal({
          title: 'Thêm mới thành công',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        }).then(()=>{
          history.push("/admin/danh-sach-bai-viet");
        });
      })
      .catch(function (error) {
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
      .get("get-all-article-category")
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
                Thêm mới bài viết
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
                  >
                    <option value='' selected>
                      Choose...
                    </option>
                    {category.map((item, index) => (
                      <option value={item.id}>{item.name_category}</option>
                    ))}
                  </select>
                  {errors.id_article_categories && (
                    <span className="loi">Danh mục không được để trống</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Tiêu đề bài viết</label>
                  <input
                    type="text"
                    ref={register({
                      required: true,
                      pattern:/^[^\s].*/,
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
                  <label htmlFor="exampleInputPassword1"> Ảnh bài viết</label>
                  <input
                    type="file"
                    onChange={loadImageFileAsURL}
                    className="form-control"
                    id="images"
                    name="images"
                    ref={register({ required: true ,
                      validate: (value) => {
                        let patternImage = /\S{1,}[^\.][\.][p|j][n|p][g|e]g?$/g;
                        let checkImage = patternImage.test(value[0].name);
                        return checkImage;
                      },
                    })}      
                  />
                  <span className="loi">
                  {errors.images?.type === "required" &&
                      "Chọn ảnh bài viết"}
                       {errors.images?.type === "validate" &&
                      "Vui lòng upload image .png .jpg, jpeg"}
                  </span>
                  <div id="show_images" className="pt-3">
                    <img style={{ width: "200px" }} src alt="" />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
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
                  <div className="d-flex justify-content-end mt-4">
                <button
                  type="submit"
                  // onClick={() => addSanPham()}
                  class="btn btn-primary"
                >
                  Thêm mới bài viết
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

export default AddBaiViet
