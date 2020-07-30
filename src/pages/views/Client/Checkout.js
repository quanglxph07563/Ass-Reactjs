import React from "react";

function Checkout() {
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
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Họ Và Tên</label>
                  <input
                    type="email"
                    className="form-control"
                    id="fullname"
                    aria-describedby="emailHelp"
                    placeholder="Nhập họ tên"
                  />
                  <span className="error" style={{ color: "red" }} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Số Điện Thoại</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="Nhập số điện thoại"
                  />
                  <span className="error" style={{ color: "red" }} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Địa Chỉ</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Nhập địa chỉ"
                  />
                  <span className="error" style={{ color: "red" }} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Nhập email"
                  />
                  <span className="error" style={{ color: "red" }} />
                </div>
              </form>
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
                      <tr className="cart_item">
                        <td className="product-name">
                          <a href="single-product.html?id=3">
                            <span className="name_products">
                              iPhone 8 Plus 64GB Chính hãng (mã VN/A)
                            </span>
                          </a>{" "}
                          <span>
                            <img
                              className="images_products"
                              width="60px"
                              src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/8/-/8-plus-3_1.jpg"
                            />
                          </span>{" "}
                          <b>x</b>{" "}
                          <strong className="product-quantity">1</strong>
                        </td>
                        <td className="product-total">
                          <span className="amount">13.100.000&nbsp;₫</span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-name">
                          <a href="single-product.html?id=5">
                            <span className="name_products">
                              Samsung Galaxy Note 10 Lite{" "}
                            </span>
                          </a>{" "}
                          <span>
                            <img
                              className="images_products"
                              width="60px"
                              src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/2/0/2026427.png"
                            />
                          </span>{" "}
                          <b>x</b>{" "}
                          <strong className="product-quantity">1</strong>
                        </td>
                        <td className="product-total">
                          <span className="amount">11.800.000&nbsp;₫</span>
                        </td>
                      </tr>
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
                              24.900.000&nbsp;₫
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
