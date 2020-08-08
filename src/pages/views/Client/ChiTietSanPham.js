import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
function ChiTietSanPham() {
  let { id } = useParams();

  const [detail, setDeatil] = useState({});
  const [amount, setAmount] = useState(1);
  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/products/" + id)
      .then(function (response) {
        setDeatil(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(setList, []);
  
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
  const addCart = (e) => {
    var sl = 1;
    var dataSp = e.target;
    console.log(dataSp);
    var getCart = localStorage.getItem("cart");
    var sanpham = {
      id: parseInt(dataSp.getAttribute("data-product-id")),
      sl: parseInt(amount),
    };
    console.log( sanpham.sl);
    if (getCart != null) {
      var bien = true;
      var listsp = JSON.parse(getCart);
      listsp.forEach((elements) => {
        if (sanpham.id == elements.id) {
          elements.sl += sanpham.sl;
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
  return (
    <div>
      <div class="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={detail.images} alt="" />
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{detail.name_product}</h3>
                <div className="rating">
                  <div className="stars">
                    {" "}
                    <span className="fa fa-star checked" />{" "}
                    <span className="fa fa-star checked" />{" "}
                    <span className="fa fa-star checked" />{" "}
                    <span className="fa fa-star" />{" "}
                    <span className="fa fa-star" />
                  </div>{" "}
                  <span className="review-no">123 đánh giá</span>
                </div>
                <p className="product-description">
                  {ReactHtmlParser(detail.detail)}
                </p>
                <h4 className="price">Giá bán: {detail.price} đ</h4>
                <p className="vote">
                  <strong>91%</strong> of người mua hài lòng với sản phẩm này{" "}
                  <strong>(87 bình chọn)</strong>
                </p>
                <h5 className="sizes">
                  Sản phẩm còn lại:{" "}
                  <span
                    className="size"
                    data-toggle="tooltip"
                    title="xtra large"
                  >
                    {detail.amount}
                  </span>
                </h5>
                <h5 className="colors">
                  Số lượng:{" "}
                  <div className="form-group">
                    <label htmlFor />
                    <input
                      type="number"
                      min="0"
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                      className="form-control"
                      name
                      id
                      aria-describedby="helpId"
                      placeholder
                    />
                  </div>
                </h5>
                <div className="action">
                  <a
                    className="add-to-cart btn btn-default"
                    data-product-id={detail.id}
                    onClick={addCart}
                  >
                    MUA NGAY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChiTietSanPham;
