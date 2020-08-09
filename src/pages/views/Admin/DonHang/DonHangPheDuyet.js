import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import http from "../../../../api/api.js";
function DonHangPheDuyet() {
  const [items, setItems] = useState([]);
  const setList = () => {
    http
      .get("donhang-da-phe-duyet")
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
  useEffect(setList, []);
  function financial(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }
  return (
    <div className="table">
      <table className="table">
        <thead className="thead-light">
          <tr>
            {/* <th scope="col">
                <input type="checkbox" id="checkAll" onClick={checkAll} /> Check
              </th> */}
            <th scope="col">Stt</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Địa chỉ </th>
            <th scope="col">Email</th>
            <th scope="col">Tổng tiền</th>
            <th scope="col">Chi tiết</th>
          </tr>
        </thead>
        <tbody id="list_data">
          {items.map((item, index) => (
            <tr>
              <th scope="row">{1} </th>
              <td>{item.name_user}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
              <td>{financial(item.total_price)}</td>
              <td>
                <button
                  data-toggle="modal"
                  data-toggle="modal"
                  data-target={"#exampleModal" + item.id}
                  type="button"
                  className="btn btn-success"
                >
                  Chi tiết
                </button>
              </td>
              {/* Modal */}
              <div
                className="modal fade"
                id={"exampleModal" + item.id}
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Chi tiết đơn hàng
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Ảnh sản phẩm</th>
                            <th scope="col">Giá sản phẩm</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                          </tr>
                        </thead>
                        <tbody id="listsp">
                          {item.detail.map((product, key) => (
                            <tr>
                              <th scope="row">{product.name_product}</th>
                              <td>
                                <img
                                  style={{ width: "200px" }}
                                  src={product.images}
                                />
                              </td>
                              <td>{financial(product.price)}</td>
                              <td>{product.amount}</td>
                              <td>
                                {financial(product.price * product.amount)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <nav aria-label="Page navigation example" id="pagination">
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
        </nav> */}
    </div>
  );
}

export default DonHangPheDuyet;
