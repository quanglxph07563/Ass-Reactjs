import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const ShowProducts = ({ addFormData }) => {
  const [items, setItems] = useState([]);
  const [itemsForm, setItemsForm] = useState({});
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(1);
  const [menuItemsShow, setmenuItems] = useState([]);

  var stt = 4 * (page - 1) + 1;

  const setList = () => {
    axios
      .get(`http://127.0.0.1:8000/api/products/?page=${page}`)
      .then(function (response) {
        setItems(response.data.data);
        setTotalpage(response.data.last_page);
        pagination(response.data.last_page);
        // console.log(response)
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  useEffect(setList, [page]);
  const deleteProduct = (id) => {
    axios
      .delete("http://127.0.0.1:8000/api/products/" + id)
      .then(function (response) {
        setList();
        swal({
          title: "Xóa phẩm thành công!",
          text: "You clicked the button!",
          icon: "success",
          button: "Đóng!",
        });
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  let menuItems = [];

  const chuyenPage = (e) => {
    setPage(Number(e.target.getAttribute("page")));
  };
  const pagination = (totalpage) => {
    // console.log(totalpage);
    for (let index = 1; index < totalpage + 1; index++) {
      if (page == index) {
        menuItems.push(
          <li className="page-item active">
            <a className="page-link" page={index} onClick={chuyenPage}>
              {index}
            </a>
          </li>
        );
      } else {
        menuItems.push(
          <li className="page-item">
            <a className="page-link" page={index} onClick={chuyenPage}>
              {index}
            </a>
          </li>
        );
      }
    }
    setmenuItems([menuItems]);
  };

  const checkAll = () => {
  let i = 0;
    var check = document.getElementsByClassName("checkbox");
    for (let index = 0; index < check.length; index++) {
      if (check[index].checked) {
        i++;
      }
    }
    if (i == check.length) {
      for (let index = 0; index < check.length; index++) {
        check[index].checked = false;
      }
      i = 0;
    } else {
      for (let index = 0; index < check.length; index++) {
        check[index].checked = true;
      }
    }

    console.log(i, check.length);
  };
  const setStatusAll = (e) => {
    // console.log(e.target.checked)
    if (!e.target.checked) {
      document.getElementById("checkAll").checked = false;
    }
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
            <th scope="col">
              <input type="checkbox" id="checkAll" onClick={checkAll} /> Check
              all
            </th>
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
              <td>
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={setStatusAll}
                  id_product={product.id}
                />
              </td>
              <th scope="row">{stt++} </th>
              <td>{product.name_product}</td>
              <td>
                {" "}
                <img style={{ width: "200px" }} src={product.images} alt="" />
              </td>
              <td>{product.price}</td>
              <td>{product.amount}</td>
              <td>{product.tendm}</td>
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
                <Link to={`edit-products/${product.id}`}>
                  {" "}
                  <button type="button" className="btn btn-success">
                    Sửa
                  </button>{" "}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example" id="pagination">
        <ul className="pagination">
          <li className="page-item">
            <button
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
              className="page-link"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">«</span>
            </button>
          </li>
          {menuItemsShow}
          <li className="page-item">
            <button
              disabled={page >= totalpage}
              onClick={() => setPage(page + 1)}
              className="page-link"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">»</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ShowProducts;
