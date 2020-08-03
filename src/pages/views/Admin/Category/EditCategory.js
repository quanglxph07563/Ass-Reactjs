import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useParams } from "react-router-dom";

function EditCategory() {
    let history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    let { id } = useParams();
    const [detail, setDeatil] = useState({});
    const [category, setCategory] = useState([]);
    let categoryDetail = 0
    const setList =  () => {
        axios
        .get("http://127.0.0.1:8000/api/category/" + id)
        .then(function (response) {
          // console.log(response.data)
          setDeatil(response.data.data);
          console.log( response.data.data.idCategory)
          categoryDetail = response.data.data.idCategory
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    useEffect(setList, []);
    const capNhatDanhMuc = (data) => {
      data.images = document.querySelector("#show_images img").src;
      axios
        .put("http://127.0.0.1:8000/api/category/" + id, data)
        .then(function (response) {
          history.push("/admin/category");
        })
        .catch(function (error) {
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
                        minLength: 10,
                        maxLength: 60,
                      })}
                      onChange={onHandleChange}
                      value={detail.name_category}
                      className="form-control"
                      name="name_category"
                    />
                    <span className="loi">
                      {errors.name_category?.type === "required" &&
                        "Tên danh mục không được để trống"}
                      {errors.name_category?.type === "minLength" &&
                        "Tên danh mục không được nhỏ hơn 10 ký tự"}
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
                  />
                  <div id="show_images" className='pt-3'>
                    <img style={{width: '200px'}} src ={detail.images} alt="" />
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
                    value={detail.description}
                    rows={5}
                    defaultValue={""}
                    onChange={onHandleChange}
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
                   Cập nhật danh mục
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
}

export default EditCategory
