import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import http from "../../../../api/api.js";
function ListUser() {
  const [items, setItems] = useState([]);
  const setList = () => {
    http
      .get("auth/get-all-user")
      .then(function (response) {
        setItems(response.data);
        // console.log(response.data.last_page);
        // setTotalpage(response.data.last_page);
        // pagination(response.data.last_page);
        // console.log(response)
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
  useEffect(setList, []);
const phanQuyen = (e)=>{
    var data = e.target;
    var id_user = data.getAttribute("user_id")
        http
          .get(`auth/cap-nhat-quyen/${id_user}`)
          .then(function (response) {
          })
          .catch(function (error) {
          });
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
            <th scope="col">Email</th>
            <th scope="col">Admin</th>
            <th scope="col">Ngày tạo</th>
          </tr>
        </thead>
        <tbody id="list_data">
          {items.map((item, index) => (
            <tr>
              <th scope="row">{(index = index + 1)} </th>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                {item.permission == 2 ? (
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      onClick={phanQuyen}
                      checked
                      user_id={item.id}
                      className="custom-control-input"
                      id={"customSwitch" + item.id}
                    />

                    <label
                      className="custom-control-label"
                      htmlFor={"customSwitch" + item.id}
                    ></label>
                  </div>
                ) : (
                  <div className="custom-control custom-switch">
                    <input
                      user_id={item.id}
                      onClick={phanQuyen}
                      type="checkbox"
                      className="custom-control-input"
                      id={"customSwitch" + item.id}
                    />

                    <label
                      className="custom-control-label"
                      htmlFor={"customSwitch" + item.id}
                    ></label>
                  </div>
                )}
              </td>
              <td>{item.created_at}</td>
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

export default ListUser;
