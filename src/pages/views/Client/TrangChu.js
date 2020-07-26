import React from 'react'
import ChuongTrinh from '../../../components/Client/ChuongTrinh/ChuongTrinh'
import Slide from '../../../components/Client/Slide/Slide'

function TrangChu() {
    return (
      <div>
      <ChuongTrinh/>
      <Slide/>
        <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row" id="list_sanpham">
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png" alt="" />
                </div>
                <h2><a href="single-product.html?id=2">iPhone 11 Chính hãng (VN/A)</a></h2>
                <div className="product-carousel-price">
                  <ins>19.990.000&nbsp;₫</ins> <del>26.100.000&nbsp;₫</del>
                </div>
                <div className="product-option-shop">
                  <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={70} rel="nofollow" onclick="addCart(2,1)">Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/8/-/8-plus-3_1.jpg" alt="" />
                </div>
                <h2><a href="single-product.html?id=3">iPhone 8 Plus 64GB Chính hãng (mã VN/A)</a></h2>
                <div className="product-carousel-price">
                  <ins>13.100.000&nbsp;₫</ins> <del>15.000.000&nbsp;₫</del>
                </div>
                <div className="product-option-shop">
                  <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={70} rel="nofollow" onclick="addCart(3,1)">Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/6/0/600_samsung-galaxy-a71_1_1.jpg" alt="" />
                </div>
                <h2><a href="single-product.html?id=4">Samsung Galaxy A71</a></h2>
                <div className="product-carousel-price">
                  <ins>7.200.000&nbsp;₫</ins> <del>8.100.000&nbsp;₫</del>
                </div>
                <div className="product-option-shop">
                  <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={70} rel="nofollow" onclick="addCart(4,1)">Add to cart</a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/2/0/2026427.png" alt="" />
                </div>
                <h2><a href="single-product.html?id=5">Samsung Galaxy Note 10 Lite	</a></h2>
                <div className="product-carousel-price">
                  <ins>11.800.000&nbsp;₫</ins> <del>12.000.000&nbsp;₫</del>
                </div>
                <div className="product-option-shop">
                  <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={70} rel="nofollow" onclick="addCart(5,1)">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default TrangChu
