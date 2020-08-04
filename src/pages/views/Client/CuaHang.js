import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
function CuaHang() {
  const [items, setItems] = useState([]);
  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then(function (response) {
        setItems(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(setList, []);

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

  //formats price
  function financial(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }

  const searchKey = (e) => {
    var key = e.target.value;
    if (!key) {
      key = "trong";
    }
    console.log(key);
    axios
      .get("http://127.0.0.1:8000/api/products/search/" + key)
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2>Shop</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container " style={{ marginTop: "20px" }}>
        <div className="row ">
          <div className="form-group col-md-3">
            <label htmlFor="exampleFormControlSelect1">Sắp xếp theo</label>
            <select className="form-control" id="xapxep">
              <option>Chọn</option>
              <option value={1}>Giá Thấp -&gt; Cao</option>
              <option value={2}>Giá Cao -&gt; Thấp</option>
              <option value={3}>Từ A -&gt; Z</option>
              <option value={4}>Từ Z -&gt; A</option>
            </select>
          </div>
          <div className="col-md-3">
            <div className="form-group">
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
        </div>
      </div>
      <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row" id="list_sanpham">
            {items.map((product, index) => (
              <div className="col-sm-3">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <div style={{ height: "300px" }}>
                        <img src={product.images} alt="" />
                      </div>
                      <h2>{financial(product.price)}</h2>
                      <p style={{ height: "50px" }}>
                        <Link to={`chi-tiet-san-pham/${product.id}`}>
                          {product.name_product}
                        </Link>
                      </p>
                      <a
                        data-quantity={1}
                        data-product_sku
                        data-product-id={product.id}
                        rel="nofollow"
                        onClick={addCart}
                        className="btn btn-default add-to-cart"
                      >
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </a>
                    </div>
                  </div>
                  <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                      <li>
                        <a>
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
              // <div className="col-md-3 col-sm-6">
              //   <div className="single-shop-product">
              //     <div className="product-upper">
              //       <img
              //          src = {product.images}
              //         alt=""
              //       />
              //     </div>
              //     <h2>
              //     <Link to={`chi-tiet-san-pham/${product.id}`}>
              //       {product.name_product}
              //       </Link>
              //     </h2>
              //     <div className="product-carousel-price">
              //       <ins>{financial(product.price)}</ins>
              //     </div>
              //     <div className="product-option-shop">
              //       <a
              //         className="add_to_cart_button"
              //         data-quantity={1}
              //         data-product_sku
              //         data-product-id={product.id}
              //         rel="nofollow"
              //         onClick={addCart}
              //       >
              //         Add to cart
              //       </a>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
          {/* <div className="row">
            <div className="col-md-12">
              <div className="product-pagination text-center">
                <nav>
                  <ul className="pagination" id="phantrang">
                    <li>
                      <a
                        className="activephantrang activept"
                        onclick="getdata(1,this)"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a className="activephantrang" onclick="getdata(2,this)">
                        2
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CuaHang;
