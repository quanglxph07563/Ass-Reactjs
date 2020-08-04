import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import ChuongTrinh from "../../../components/Client/ChuongTrinh/ChuongTrinh";
import Slide from "../../../components/Client/Slide/Slide";

function TrangChu() {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(1);
  const [searchCategory, setSearchCategory] = useState(-1);

  const [menuItemsShow, setmenuItems] = useState([]);
  var stt = 3 * (page - 1) + 1;
  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/get-all-category")
      .then(function (response) {
        setCategory(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(setList, []);
  const getProduct = () => {
    axios
      .get(
        "http://127.0.0.1:8000/api/products/get-product-client/" +
          searchCategory +
          `?page=${page}`
      )
      .then(function (response) {
        setProduct(response.data.data);
        setTotalpage(response.data.last_page);
        pagination(response.data.last_page);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(searchCategory);
  useEffect(getProduct, [searchCategory, page]);
  let menuItems = [];

  const chuyenPage = (e) => {
    setPage(Number(e.target.getAttribute("page")));
  };
  const pagination = (totalpage) => {
    console.log(totalpage);
    for (let index = 1; index < totalpage + 1; index++) {
      if (page == index) {
        menuItems.push(
          <li className="page-item active">
            <a
              className="page-link"
              style={{ color: "black" }}
              page={index}
              onClick={chuyenPage}
            >
              {index}
            </a>
          </li>
        );
      } else {
        menuItems.push(
          <li className="page-item">
            <a
              className="page-link"
              style={{ color: "black" }}
              page={index}
              onClick={chuyenPage}
            >
              {index}
            </a>
          </li>
        );
      }
    }
    setmenuItems([menuItems]);
  };

  const addCart = (e) => {
    var sl = 1;
    var dataSp = e.target;
    console.log(dataSp);
    var getCart = localStorage.getItem("cart");
    var sanpham = {
      id: dataSp.getAttribute("data-product-id"),
      sl: parseInt(dataSp.getAttribute("data-quantity")),
    };
    console.log(typeof sanpham.sl);
    if (getCart != null) {
      var bien = true;
      var listsp = JSON.parse(getCart);
      listsp.forEach((elements) => {
        if (sanpham.id == elements.id) {
          elements.sl += sl;
          bien = false;
        }
      });
      if (bien) {
        listsp.push(sanpham);
      }
      var sonlistsp = JSON.stringify(listsp);
      console.log(sonlistsp);
      localStorage.setItem("cart", sonlistsp);
      swal({
        title: "Thêm sản phẩm thành công!",
        text: "You clicked the button!",
        icon: "success",
        button: "Đóng !",
      });
      getCountCart();
    } else {
      var listsp = [];
      listsp.push(sanpham);
      var jsonlistsp = JSON.stringify(listsp);
      localStorage.setItem("cart", jsonlistsp);
      swal({
        title: "Thêm sản phẩm thành công!",
        text: "You clicked the button!",
        icon: "success",
        button: "Đóng!",
      });
      getCountCart();
    }
  };
  const getCountCart = () => {
    var getCart = localStorage.getItem("cart");
    var listsp = JSON.parse(getCart);
    var totalsp = 0;
    console.log(listsp);
    if (listsp != null) {
      listsp.forEach((elements) => {
        totalsp += elements.sl;
      });
    }

    document.querySelector(".product-count").innerHTML = totalsp;
  };
  window.onload = function () {
    getCountCart();
  };
  function financial(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }
  return (
    <div>
      <Slide />
      <ChuongTrinh />

      <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row" id="list_sanpham">
            <div className="col-md-3">
              <div className="left-sidebar">
                <h2>Danh mục sản phẩm</h2>
                <div className="panel-group category-products" id="accordian">
                  {/*category-productsr*/}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => setSearchCategory(-1)}
                        >
                          Tất cả sản phẩm
                        </a>
                      </h4>
                    </div>
                  </div>
                  {category.map((element, index) => (
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setSearchCategory(element.id)
                              setPage(1)}
                            }
                          >
                            {element.name_category}
                          </a>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
                {/*/category-products*/}
              </div>
            </div>
            <div className="col-md-9">
              <h2 class="title text-center">Danh sách sản phẩm</h2>
              <div className="row">
                {product.map((element, index) => (
                  <div className="col-sm-3">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <div style={{ height: "200px" }}>
                            <img src={element.images} alt="" />
                          </div>
                          <h2>{financial(element.price)}</h2>
                          <p style={{ height: "50px" }}>
                            {element.name_product}
                          </p>
                          <button 
                           data-quantity={1}
                           data-product_sku
                           data-product-id={element.id}
                           rel="nofollow"
                           onClick={addCart}
                          className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </button>
                        </div>
                      </div>
                      <div className="choose">
                        <ul className="nav nav-pills nav-justified">
                          <li>
                            <a href="#">
                              <i className="fa fa-plus-square" />
                              Add to wishlist
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-plus-square" />
                              Add to compare
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center col-md-12">
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
            </div>
    
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrangChu;
