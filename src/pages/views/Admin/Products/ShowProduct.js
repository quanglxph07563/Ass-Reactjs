import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import http from "../../../../api/api.js";
const ShowProducts = ({ addFormData }) => {
  const [items, setItems] = useState([]);
  const [itemsForm, setItemsForm] = useState({});
  const [page, setPage] = useState({
    page_size: 3,
    page: 1,
    iddm: null,
    key: "",
  });
  const [totalpage, setTotalpage] = useState(1);
  const [menuItemsShow, setmenuItems] = useState([]);
  const [category, setCategory] = useState([]);

  const setTimeSearch = useRef(null);
  var stt = page.page_size * (page.page - 1) + 1;
  const setList = () => {
    http
      .get(
        `products?page=${page.page}&page_size=${page.page_size}&iddm=${page.iddm}&key=${page.key}`
      )
      .then(function (response) {
        setItems(response.data.data);
        console.log(response.data.last_page);
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
    swal({
      title: "Bạn chắc chắn muốn xóa ?",
      // text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        http
          .delete("products/" + id)
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
      }
    });
  };

  let menuItems = [];

  const chuyenPage = (e) => {
    setPage({
      ...page,
      page: Number(e.target.getAttribute("page")),
    });
  };
  const pagination = (totalpage) => {
    // console.log(totalpage);
    for (let index = 1; index < totalpage + 1; index++) {
      if (page.page == index) {
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
  if (document.getElementById("checkAll") != null) {
    document.getElementById("checkAll").checked = false;
    var check = document.getElementsByClassName("checkbox");
    for (let index = 0; index < check.length; index++) {
      check[index].checked = false;
    }
  }
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
  const getcategory = () => {
    http
      .get("get-all-category")
      .then(function (response) {
        setCategory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(getcategory, []);
  const searchKey = (e) => {
    var keySearch = e.target.value;
    if (setTimeSearch.current) {
      clearTimeout(setTimeSearch.current);
    }
    setTimeSearch.current = setTimeout(() => {
      setPage({
        ...page,
        page: 1,
        key: keySearch,
      });
    }, 300);
  };
  const deleteListId = () => {
    var listId = [];
    for (let index = 0; index < check.length; index++) {
      if (check[index].checked) {
        listId.push(check[index].getAttribute("id_product"));
      }
    }
    swal({
      title: "Bạn chắc chắn muốn xóa ?",
      // text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        http
          .post("products/delete-multiple-products", listId)
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
            console.log(error);
          });
      }
    });
  };
  function financial(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }
  return (
    <div className="table">
      <div className="d-flex justify-content-end mb-2 ">
        <button type="button" className="btn btn-light">
          <Link to="/admin/add-product">Thêm mới sản phẩm </Link>
        </button>
      </div>
      <div className="row">
        <div className="form-group col-md-2">
          <label htmlFor="exampleFormControlSelect1">Lọc theo danh mục</label>
          <select
            className="form-control"
            id="xapxep"
            onChange={(e) => {
              setPage({
                ...page,
                page: 1,
                iddm: e.target.value,
              });
            }}
          >
            <option value="" selected>
              Tất cả
            </option>
            <option value={0}>Chưa có danh mục</option>
            {category.map((item, index) => (
              <option value={item.id}>{item.name_category}</option>
            ))}
          </select>
        </div>
        <div className="col-md-8">
          <div className="form-group col-md-6">
            <label htmlFor="exampleInputEmail1">Tìm Kiếm</label>
            <input
              type="text"
              className="form-control"
              id="searchsp"
              aria-describedby="emailHelp"
              placeholder="Tìm kiếm"
              onChange={searchKey}
            />
          </div>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="exampleFormControlSelect1">Kích thước</label>
          <select
            className="form-control"
            onChange={(e) => {
              setPage({
                ...page,
                page_size: e.target.value,
                page: 1,
              });
            }}
          >
            <option>Chọn</option>
            <option value={5}>5 sản phẩm</option>
            <option value={10}>10 sản phẩm</option>
            <option value={15}>15 sản phẩm</option>
            <option value={20}>20 sản phẩm</option>
          </select>
        </div>
      </div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col" style={{ width: "40px" }}>
              <input type="checkbox" id="checkAll" onClick={checkAll} />
            </th>
            <th scope="col" style={{ width: "40px" }}>
              Stt
            </th>
            <th scope="col" style={{ width: "300px" }}>
              Tên sản phẩm{" "}
            </th>
            <th scope="col">Images</th>
            <th scope="col" style={{ width: "200px" }}>
              Thông tin
            </th>
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
                <img style={{ width: "120px" }} src={product.images} alt="" />
              </td>
              <td>
                <ul>
                  <li>Price : {financial(product.price)}</li>
                  <li>Sale : {financial(product.sale)}</li>
                  <li>
                    Số lượng : {new Intl.NumberFormat().format(product.amount)}
                  </li>
                  <li>
                    Tình trạng : {product.amount > 0 ? "Còn hàng" : "Hết hàng"}
                  </li>
                </ul>
              </td>
              <td>{product.tendm}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    deleteProduct(product.id);
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
      <button
        type="button"
        onClick={deleteListId}
        className="btn btn-danger mb-4"
      >
        Xóa mục đã chọn
      </button>
      <div className="d-flex justify-content-center col-md-12">
        <nav aria-label="Page navigation example" id="pagination">
          <ul className="pagination">
            <li className="page-item">
              <button
                disabled={page.page <= 1}
                onClick={() => setPage({ ...page, page: page.page - 1 })}
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
                disabled={page.page >= totalpage}
                onClick={() =>
                  setPage({
                    ...page,
                    page: page.page + 1,
                  })
                }
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
    </div>
  );
};

export default ShowProducts;
