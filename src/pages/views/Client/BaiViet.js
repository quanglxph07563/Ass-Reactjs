import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../../../api/api";
import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
    htmlparser2,
  } from "react-html-parser";
function BaiViet() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState({ page: 1, idDanhMuc: 0 });
  const [posts, setPost] = useState([]);

  const [totalpage, setTotalpage] = useState(1);

  const [menuItemsShow, setmenuItems] = useState([]);
  var stt = 5 * (page - 1) + 1;
  let menuItems = [];
  const setList = () => {
    http
      .get(`get-all-article-category`)
      .then(function (response) {
        setItems(response.data);
        // setTotalpage(response.data.last_page)
        // pagination(response.data.last_page);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  useEffect(setList, []);
  const getPostDanhMuc = () => {
    http
      .get(`get-posts-danh-muc/` + page.idDanhMuc + "?page=" + page.page)
      .then(function (response) {
        setPost(response.data.data);
        setTotalpage(response.data.last_page);
        pagination(response.data.last_page);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
  //   console.log("fdf", posts);
  useEffect(getPostDanhMuc, [page]);

  const pagination = (totalpage) => {
    // console.log(totalpage);
    for (let index = 1; index < totalpage + 1; index++) {
      if (page.page == index) {
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
  //   console.log(items);
  const chuyenPage = (e) => {
    setPage({
      ...page,
      page: Number(e.target.getAttribute("page")),
    });
  };
  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-md-4">
          <div className>
            <div className="card-header">Danh mục bài viết</div>
            <ul className="list-group list-group-flush">
              {items.map((item, key) => (
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setPage({
                        page: 1,
                        idDanhMuc:item.id
                      });
                  }}
                  className="list-group-item"
                >
                  {item.name_category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          {posts.map((item, key) => (
            <div
              className="row p-2 mb-4"
              style={{ border: "1px solid rgb(243, 237, 237)",height:'150px',overflow:'hidden'}}
            >
              <div className="col-md-4">
                <img
                  style={{ width: "100%" }}
                  src={item.images}
                  alt=""
                />
              </div>
              <div className="col-md-8">
              <Link to={`/chi-tiet-bai-viet/${item.id}`}>
                <h5 style={{ color: "rgb(21, 31, 180)" }}>
                {item.title}
                </h5>
                </Link>
                <p>
                Ngày đăng:  {(item.created_at.slice(0,10))}
                </p>
              </div>
            </div>
          ))}

          <nav aria-label="Page navigation example" id="pagination">
            <ul className="pagination">
              <li className="page-item">
                <button
                  disabled={page.page <= 1}
                  onClick={() =>
                    setPage({
                      ...page,
                      page: page.page - 1,
                    })
                  }
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
    </div>
  );
}

export default BaiViet;
