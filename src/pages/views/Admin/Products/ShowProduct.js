import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowProducts = ({addFormData}) => {
  const [items, setItems] = useState([]);
  const [itemsForm, setItemsForm] = useState({});

  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then(function (response) {
        setItems(response.data.data);
        console.log(items)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(setList, []);

  const deleteProduct = (id) => {
    axios
      .delete("http://127.0.0.1:8000/api/products/" + id)
      .then(function (response) {
        setList();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="table-responsive">
      
      <div className="d-flex justify-content-end mb-2">
        <button type="button" className="btn btn-light">
          <Link to="/admin/add-product">Thêm mới sản phẩm </Link>
        </button>
      
      </div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Tên sản phẩm </th>
            <th scope="col">Images</th>
            <th scope="col">Giá</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Danh mục</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody id="list_data">
          {items.map((product, index) => (
            <tr key={index}>
              <th scope="row">{++index}</th>
              <td>{product.name_product}</td>
              <td> <img style={{width: '200px'}} src = {product.images} alt="" /></td>
              <td>{product.price}</td>
              <td>{product.amount}</td>
              <td>{product.idCategory}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    if (
                      window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này")
                    ) {
                      deleteProduct(product.id);
                    }
                  }}
                  className="btn btn-warning"
                >
                  Xóa
                </button>
                {/* <button href='12' type="button" className="btn btn-success">
                  Sửa
                </button> */}
                <Link to={`edit-products/${product.id}`}>   <button  type="button" className="btn btn-success">
                  Sửa
                </button> </Link>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;
