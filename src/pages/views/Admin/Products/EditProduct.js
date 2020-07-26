import React, { useState, useEffect  } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
    useParams
  } from "react-router-dom";
const EditProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();
    let { id } = useParams();
    const [detail, setDeatil] = useState({});
    
    const setList = () => { axios
      .get("http://127.0.0.1:8000/api/products/"+id)
      .then(function (response) {
        setDeatil(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
      useEffect(setList, []);
  const capNhatSanPham = (event) => {
    event.preventDefault();
    let data = detail;
    axios
      .put("http://127.0.0.1:8000/api/products/"+id, data)
      .then(function (response) {
        window.location.pathname = "/admin/products";
      })
      .catch(function (error) {
        console.log(error);
      });


      
  };
  const onHandleChange = e => {
    const { name, value } = e.target;
    setDeatil({
      ...detail,
      [name]: value
    });
  };

  return (
    <form method='POST' onSubmit={handleSubmit(capNhatSanPham)}>
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Danh mục</label>
          <input type="number" min={0}  onChange={onHandleChange} ref={register({ required: true })} className="form-control" value ={detail.idCategory} name="idCategory" />
          {errors.idCategory && <span className="loi">Danh mục không được để trống</span>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
          <input type="text" onChange={onHandleChange} className="form-control" ref={register({ required: true })}  value ={detail.name_product} name="name_product" />
          {errors.name_product && <span className="loi">Tên sản phẩm không được để trống</span>}

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1"> Ảnh Sản Phẩm</label>
          <input
            type="file"
            onChange={onHandleChange}
            className="form-control"
            id="images"
            name="images"
            // ref={register({ required: true })}
          />
          {/* {errors.images && <span className="loi">Ảnh không được để trống</span>} */}

          <span className="error" style={{ color: "red" }} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Giá Tiền</label>
          <input type="number" ref={register({ required: true })} min={0}  onChange={onHandleChange} value ={detail.price} className="form-control" name="price" />
          {errors.price && <span className="loi">Giá Tiền không được để trống</span>}
          
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="exampleInputPassword1"></label>
          <input type="number" ref={register({ required: true })} onChange={onHandleChange} className="form-control" value ={detail.amount} name="amount" />
          {errors.amount && <span className="loi">Số Lượng không được để trống</span>}
  
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Chi tiết sản phẩm
          </label>
          <textarea
            className="form-control"
            name="detail"
            rows={5}
            defaultValue={""}
            value ={detail.detail}
            onChange={onHandleChange}
            ref={register({ required: true })}
          />
                  {errors.detail && <span className="loi"> Chi tiết sản phẩm không được để trống</span>}

        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          class="btn btn-primary"
        >
         Cập nhật sản phẩm
        </button>
      </div>
    </div>
  </form>
  );
};

export default EditProduct;
