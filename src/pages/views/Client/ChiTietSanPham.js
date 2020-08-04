import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
function ChiTietSanPham() {
  let { id } = useParams();
  const [detail, setDeatil] = useState({});
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
  return (
    <div>
       < div class="container">
        <div className="card"> 
          <div className="container-fliud"> 
            <div className="wrapper row"> 
              <div className="preview col-md-6"> 
                <div className="preview-pic tab-content"> 
                  <div className="tab-pane active" id="pic-1"><img src={detail.images} alt="" />
                  </div> 
                </div> 
              </div> 
              <div className="details col-md-6"> 
  <h3 className="product-title">{detail.name_product}</h3> 
                <div className="rating"> 
                  <div className="stars"> <span className="fa fa-star checked" /> <span className="fa fa-star checked" /> <span className="fa fa-star checked" /> <span className="fa fa-star" /> <span className="fa fa-star" /> 
                  </div> <span className="review-no">123 đánh giá</span> 
                </div> 
  <p className="product-description">{ReactHtmlParser(detail.detail)}</p> 
                <h4 className="price">Giá bán: {detail.price} đ</h4> 
                <p className="vote"><strong>91%</strong> of người mua hài lòng với sản phẩm này <strong>(87 bình chọn)</strong>
                </p> 
  <h5 className="sizes">Sản phẩm còn lại: <span className="size" data-toggle="tooltip" title="xtra large">{detail.amount}</span> 
                </h5> 
                <h5 className="colors">Số lượng:  <div className="form-group">
        <label htmlFor />
        <input type="text" className="form-control" name id aria-describedby="helpId" placeholder />
      </div>
                </h5> 
                <div className="action"> <a href="http://hocwebgiare.com/" target="_blank">            <button className="add-to-cart btn btn-default" type="button">MUA NGAY</button>          </a> <a href="http://hocwebgiare.com/" target="_blank">            <button className="like btn btn-default" type="button"><span className="fa fa-heart" /></button>          </a> 
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
