import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import swal from "sweetalert";
function Cart() {
  const [items, setItems] = useState([]);
  let history = useHistory();

  const setList = () => {
    var getCart = localStorage.getItem("cart");
    var listsp = JSON.parse(getCart);
    var listGetDataApi = [];
    if (listsp == null) {
      return;
    }
    listsp.forEach((elements) => {
      var url_get_info_API =
      process.env.REACT_APP_API_URL+"products/" + elements.id;
      var promise = axios.get(url_get_info_API);
      listGetDataApi.push(promise);
    });
    Promise.all(listGetDataApi).then(function (response) {
      response.forEach((elements) => {
        listsp.forEach((elements1) => {
          if (elements.data.data.id == elements1.id) {
            elements.data.data.sl = elements1.sl;
          }
        });
      });
      setItems(response);
    });
  };
  useEffect(setList, []);
  const changeSl = (e) => {
    var dataSp = e.target;
    var index = dataSp.getAttribute("index");
    let productCopy = [...items];
    productCopy[index].data.data.sl = dataSp.value;
    setItems(productCopy);
    // alert(1);
    var getCart = localStorage.getItem("cart");
    var listsp = JSON.parse(getCart);
    listsp[index].sl = Number(dataSp.value);
    var sonlistsp = JSON.stringify(listsp);
    localStorage.setItem("cart", sonlistsp);
    if (dataSp.value == "" || dataSp.value == 0) {
      remove(index);
    }
    getCountCart();
  };
  function remove(index) {
    // alert(index)
    var getCart = localStorage.getItem("cart");
    var listsp = JSON.parse(getCart);
    listsp.splice(index, 1);
    var sonlistsp = JSON.stringify(listsp);
    localStorage.setItem("cart", sonlistsp);
    let productCopyDelete = [...items];
    productCopyDelete.splice(index, 1);
    setItems(productCopyDelete);
    getCountCart();
  }

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

  function financial(sale) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(sale);
  }

  function totalgia(sale, sl) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(sale * sl);
  }

  function totalPriceProduc() {
    var totalPrice = 0;
    items.map(
      (elements, index) =>
        (totalPrice += elements.data.data.sale * elements.data.data.sl)
    );
    return financial(totalPrice);
  }
  const  thanhToan =()=>{
    if(!localStorage.userToken){
      swal({
        title: "Bạn cần đăng nhập để tiến hành thanh toán",
        // text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((result) => {
        if (result) {
      history.push("/login");
        }
      })
    }else{
      history.push("/checkout");

    }
  };
  return (
    <div>
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2>Giỏ Hàng</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="woocommerce">
                  <form method="post" action="#">
                    <table cellSpacing={0} className="shop_table cart">
                      <thead>
                        <tr>
                          <th className="product-remove">&nbsp;</th>
                          <th className="product-thumbnail">&nbsp;</th>
                          <th className="product-name">SẢN PHẨM</th>
                          <th className="product-sale">GIÁ BÁN</th>
                          <th className="product-quantity">SỐ LƯỢNG</th>
                          <th className="product-subtotal">THÀNH TIỀN</th>
                        </tr>
                      </thead>
                      <tbody id="listCart">
                        {items.map((elements, index) => (
                          <tr className="cart_item">
                            <td className="product-remove">
                              <a
                                title="Remove this item"
                                onClick={() => remove(index)}
                                className="remove"
                              >
                                ×
                              </a>
                            </td>
                            <td className="product-thumbnail">
                              <a href="single-product.html?id=5">
                                <img
                                  width={145}
                                  height={145}
                                  alt="poster_1_up"
                                  className="shop_thumbnail"
                                  src={elements.data.data.images}
                                />
                              </a>
                            </td>
                            <td className="product-name">
                              <a href="single-product.html?id=5">
                                {elements.data.data.name_product}
                              </a>
                            </td>
                            <td className="product-sale">
                              <span className="amount">
                                {financial(elements.data.data.sale)}
                              </span>
                            </td>
                            <td className="product-quantity">
                              <div className="quantity buttons_added">
                                <input
                                  onChange={changeSl}
                                  name="amount"
                                  type="number"
                                  size={4}
                                  className="input-text qty text"
                                  title="Qty"
                                  value={elements.data.data.sl}
                                  min={0}
                                  step={1}
                                  index={index}
                                />
                              </div>
                            </td>
                            <td className="product-subtotal">
                              <span className="amount">
                                {totalgia(
                                  elements.data.data.sale,
                                  elements.data.data.sl
                                )}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </form>
                  <div className="cart-collaterals">
                    <div className="cart_totals ">
                      <table cellSpacing={0}>
                        <tbody>
                          <tr className="order-total">
                            <th>Tổng tiền thành toán</th>
                            <td>
                              <strong>
                                <span className="amount" id="total-sale">
                                  {totalPriceProduc()}
                                </span>
                              </strong>{" "}
                            </td>
                          </tr>
                          <tr className="shipping">
                            <th>Phí Vận Chuyển</th>
                            <td>Miễn Phí Vận Chuyển</td>
                          </tr>
                          <tr className="cart-subtotal">
                            <th>Thanh toán</th>
                            <td>
                              <span className="btn btn-primary" onClick = {thanhToan}>          
                                  Thanh Toán                  
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
