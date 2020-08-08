import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import http from "../../../api/api";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

function Checkout() {
  let history = useHistory();
  const [infoUser, setinfoUser] = useState([]);
  if(!localStorage.userToken){
    history.push("/");
  }
  const getInfoUser = () => {
    axios
      .get("http://127.0.0.1:8000/api/auth/user/", {
        headers: { Authorization: `Bearer ${localStorage.userToken}` },
      })
      .then(function (response) {
        setinfoUser(response.data)
      })
      .catch(function (error) {
        // document.getElementById('trung_ten').innerHTML = error.response.data.errors.name_category
      });
  };
  useEffect(getInfoUser, []);
  // console.log(infoUser)
  const [items, setItems] = useState([]);
  const { register, handleSubmit, watch, errors } = useForm();
  const setList = () => {
    var getCart = localStorage.getItem("cart");
    var listsp = JSON.parse(getCart);
    var listGetDataApi = [];
    if (listsp == null) {
      return;
    }
    listsp.forEach((elements) => {
      var url_get_info_API =
        process.env.REACT_APP_API_URL + "products/" + elements.id;
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
    return Number(totalPrice);
  }
  const onSubmit = (data) => {
    data.order_detail=localStorage.cart;
    http
    .post("checkout", data)
    .then(function (response) {
      swal({
        title: 'Đặt hàng thành công thành công',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
      }).then(()=>{
        localStorage.removeItem('cart')
      history.push("thanh-toan-thanh-cong");
      })
    })
    .catch(function (error) {
    });
  };
  return (
    <div>
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2 style={{ fontFamily: "inherit" }}>Thanh toán</h2>
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
          <div className="col-md-8">
            <div className="product-content-right">
              <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                <input name='total_price'
                value ={totalPriceProduc()}
                ref={register({
                  required: true,
                })}
                type='hidden'
                ></input>
                <input name='id_user'
                type='hidden'

                ref={register({
                  required: true,
                })}
                value ={infoUser.id}
                ></input>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    Địa chỉ nhận hàng
                  </label>
                  <input
                  name ='address'
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Địa chỉ nhận hàng"
                    ref={register({
                      required: true,
                    })}
                  />
                  <span className="loi">
                    {errors.address?.type === "required" &&
                      "Địa chỉ không dược để trống"}
                  </span>
                </div>
                <div className="woocommerce">
                  <h3 id="order_review_heading">Đơn Hàng Của Bạn</h3>
                  <div id="order_review" style={{ position: "relative" }}>
                    <table className="shop_table">
                      <thead>
                        <tr>
                          <th className="product-name">Sản Phẩm</th>
                          <th className="product-total">Toàn Bộ</th>
                        </tr>
                      </thead>
                      <tbody id="listsp">
                        {items.map((product, index) => (
                          <tr className="cart_item">
                            <td className="product-name">
                              <a href="single-product.html?id=3">
                                <span className="name_products">
                                  {product.data.data.name_product}
                                </span>
                              </a>{" "}
                              <span>
                                <img
                                  className="images_products"
                                  width="60px"
                                  src={product.data.data.images}
                                />
                              </span>{" "}
                              <b>x</b>{" "}
                              <strong className="product-quantity">
                                {product.data.data.sl}
                              </strong>
                            </td>
                            <td className="product-total">
                              <span className="amount">
                                {totalgia(
                                  product.data.data.sl,
                                  product.data.data.sale
                                )}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="shipping">
                          <th>Phí Vận Chuyển</th>
                          <td>Miễn Phí Vận Chuyển</td>
                        </tr>
                        <tr className="order-total">
                          <th>Tổng Thanh Toán</th>
                          <td>
                            <strong>
                              <span className="totalprice">
                                {financial(totalPriceProduc())}
                              </span>
                            </strong>{" "}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                    <div id="payment">
                      <div className="form-row place-order">
                        <input
                          type="submit"
                          data-value="Place order"
                          defaultValue="Đặt Hàng"
                          id="place_order"
                          name="woocommerce_checkout_place_order"
                          className="button alt"
                        />
                      </div>
                      <div className="clear" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
