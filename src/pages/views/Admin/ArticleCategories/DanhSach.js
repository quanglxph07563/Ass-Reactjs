import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import http from "../../../../api/api.js";

function DanhSach() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpage, setTotalpage] = useState(1);

  const [menuItemsShow, setmenuItems] = useState([]);
  var stt =5*(page-1) +1
  const setList = () => {
    http
      .get(`article-category?page=${page}`)
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

  const deletecategory = (id) => {
    http
      .delete("article-category/" + id)
      .then(function (response) {
        setList();
        swal({
          title: "Xóa danh mục thành công!",
          text: "You clicked the button!",
          icon: "success",
          button: "Đóng!",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
      <div className="d-flex justify-content-end mb-2">
        <button type="button" className="btn btn-light">
          <Link to="/admin/add-danh-muc-bai-viet">Thêm mới danh mục </Link>
        </button>
      </div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Stt</th>
            <th scope="col">Tên danh mục</th>
            <th scope="col">Số lượng bài viết</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody id="list_data">
          {items.map((category, index) => (
            <tr key={index}>
              <th scope="row">{stt++}</th>
              <td>{category.name_category}</td>
              <td>{category.slsp}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    if (
                      window.confirm("Bạn có chắc chắn muốn xóa danh mục này")
                    ) {
                      deletecategory(category.id);
                    }
                  }}
                  className="btn btn-warning"
                >
                  Xóa
                </button>
                <Link to={`edit-danh-muc-bai-viet/${category.id}`}>
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
  );
}

export default DanhSach
