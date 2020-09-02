import React, { useState, useEffect } from "react";
import http from '../../../api/api';
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
  const [sanphamCungDanhMuc, setSanphamCungDanhMuc] = useState([]);

  const setList = () => {
    http
      .get("products/" + id)
      .then(function (response) {
        setDeatil(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(setList, [id]);

  const getSanphamCungDanhMuc = () => {
    http
      .get("get-san-pham-cung-danh-muc/" + id)
      .then(function (response) {
        setSanphamCungDanhMuc(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(getSanphamCungDanhMuc, []);
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
  function financial(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }
  return (
    // <div>
    //   <div class="container">
    //     <div className="card">
    //       <div className="container-fliud">
    //         <div className="wrapper row">
    //           <div className="preview col-md-6">
    //             <div className="preview-pic tab-content">
    //               <div className="tab-pane active" id="pic-1">
    //                 <img src={detail.images} alt="" />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="details col-md-6">
    //             <h3 className="product-title">{detail.name_product}</h3>
    //             <div className="rating">
    //               <div className="stars">
    //                 {" "}
    //                 <span className="fa fa-star checked" />{" "}
    //                 <span className="fa fa-star checked" />{" "}
    //                 <span className="fa fa-star checked" />{" "}
    //                 <span className="fa fa-star" />{" "}
    //                 <span className="fa fa-star" />
    //               </div>{" "}
    //               <span className="review-no">123 đánh giá</span>
    //             </div>
    //             <p className="product-description">
    //               {ReactHtmlParser(detail.detail)}
    //             </p>
    //             <h4 className="price">Giá bán: {detail.price} đ</h4>
    //             <p className="vote">
    //               <strong>91%</strong> of người mua hài lòng với sản phẩm này{" "}
    //               <strong>(87 bình chọn)</strong>
    //             </p>
    //             <h5 className="sizes">
    //               Sản phẩm còn lại:{" "}
    //               <span
    //                 className="size"
    //                 data-toggle="tooltip"
    //                 title="xtra large"
    //               >
    //                 {detail.amount}
    //               </span>
    //             </h5>
    //             <h5 className="colors">
    //               Số lượng:{" "}
    //               <div className="form-group">
    //                 <label htmlFor />
    //                 <input
    //                   type="number"
    //                   min="0"
    //                   value={amount}
    //                   onChange={(e) => {
    //                     setAmount(e.target.value);
    //                   }}
    //                   className="form-control"
    //                   name
    //                   id
    //                   aria-describedby="helpId"
    //                   placeholder
    //                 />
    //               </div>
    //             </h5>
    //             <div className="action">
    //               <a
    //                 className="add-to-cart btn btn-default"
    //                 data-product-id={detail.id}
    //                 onClick={addCart}
    //               >
    //                 MUA NGAY
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mt-4">
    <div className="row">
      <div className="col-md-3">
        <section className="ts-products-widget">
          <div className="title-wrapper">
            <h3 className="hr_title heading-title">
              Sản phẩm cùng danh mục
            </h3>
          </div>
          <div className="ts-products-wrapper">
            <div className="per-slide">
              <ul className="product_list_widget">
                {sanphamCungDanhMuc.map((item,key)=>(
                  <li>
                  <a className="ts-wg-thumbnail" href="/san-pham/ao-thun-nu-belike.html" title="Áo thun nữ Belike">
                    <img src={item.images} alt="Áo thun nữ Belike" />
                  </a>
                  <div className="ts-wg-meta">
                <Link to={'/chi-tiet-san-pham/'+item.id} title="Áo thun nữ Belike">{item.name_product}</Link>
                    <span className="price">
                <span className="amount"> <del style={{fontSize: '13px', color: 'gray'}}>{financial(item.price)}</del></span> <br/>
                <ins><span className="amount" style={{fontSize: '18px',color: '#d0011b'}}>{financial(item.sale)}</span></ins>
                    </span>
                  </div>
                </li>
                ))}
              </ul>         
            </div>
          </div>
        </section>
      </div>
      <div className="col-md-9">
        <div className="row">
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={detail.images} alt="" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">
            {detail.name_product}
            </h2>
            <div className="mota-ngan ">
              <p style={{textAlign: 'justify'}} className>
                <span>Mô tả</span>: {detail.short_description}
              </p>
            </div>
            <div className="soluong">
              <p>Sản phẩm có sẵn : <span style={{fontSize: '20px', color: '#d0011b'}}>{detail.amount}</span></p>
            </div>
            <div className="product-price" id="price-preview">
              <del style={{fontSize: '15px', color: 'gray'}}>{financial(detail.price)}</del> &nbsp;
  <span style={{color: '#d0011b'}}>{financial(detail.sale)}</span>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Số lượng</label>
              <input type="number"
                                 min="0"
                                 value={amount}
                                 onChange={(e) => {
                                   setAmount(e.target.value);
                                 }}
              className="form-control" id="exampleInputPassword1" />
            </div>
            <div>
              <button type="button" 
               data-product-id={detail.id}
                onClick={addCart}
              className="btn btn-secondary">Add to cart</button>
            </div>
          </div>    
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="">
              <div className="alert alert-primary" role="alert">
                Chi tiết sản phẩm 
              </div>
              <div className="card-body">
                {ReactHtmlParser(detail.detail)}
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
