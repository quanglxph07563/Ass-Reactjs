import React, { useState, useEffect } from "react";
import http from "../../../../api/api.js";
function PhanHoi() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalpage, setTotalpage] = useState(1);
  
    const [menuItemsShow, setmenuItems] = useState([]);
    var stt =5*(page-1) +1
    const setList = () => {
      http
        .get(`lien-he?page=${page}`)
        .then(function (response) {
          setItems(response.data.data);
          setTotalpage(response.data.last_page)
          pagination(response.data.last_page);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    useEffect(setList, [page]);
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
              <a className="page-link"  page={index} onClick={chuyenPage}>
                {index}
              </a>
            </li>
            );
        }else{
          menuItems.push(
            <li className="page-item">
              <a className="page-link"  page={index} onClick={chuyenPage}>
                {index}
              </a>
            </li>
          );
        }
       
      }
      setmenuItems([menuItems]);
    };
    return (
        <div className="table-responsive">
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Stt</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Email</th>
            <th scope="col">Địa chỉ</th>
            <th style={{width:'400px'}} scope="col">Nội dung</th>
          </tr>
        </thead>
        <tbody id="list_data">
          {items.map((item, index) => (
            <tr key={index}>
              <th scope="row">{stt++}</th>
              <td>{item.name}</td>
              <td>
                {item.email}
              </td>
              <td>{item.dia_chi}</td>
              <td>{item.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example" id="pagination">
        <ul className="pagination">
          <li  className="page-item" >
            <button disabled={page<=1} onClick ={() => setPage(page-1)} className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </button>
          </li>
          {menuItemsShow}
          <li  className="page-item">
            <button disabled={page>=totalpage} onClick ={() => setPage(page+1)} className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
    )
}

export default PhanHoi
