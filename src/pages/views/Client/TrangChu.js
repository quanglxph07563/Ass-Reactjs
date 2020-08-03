import React from "react";
import ChuongTrinh from "../../../components/Client/ChuongTrinh/ChuongTrinh";
import Slide from "../../../components/Client/Slide/Slide";

function TrangChu() {
  return (
    <div>
      <Slide />
      <ChuongTrinh />

      <div className="single-product-area">
        <div className="zigzag-bottom" />
        <div className="container">
          <div className="row" id="list_sanpham">
            <div className="col-md-3">
              <div className="left-sidebar">
                <h2>Danh mục sản phẩm</h2>
                <div className="panel-group category-products" id="accordian">
                  {/*category-productsr*/}
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#sportswear"
                        >
                          <span className="badge pull-right">
                            <i className="fa fa-plus" />
                          </span>
                          Sportswear
                        </a>
                      </h4>
                    </div>
                    <div id="sportswear" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul>
                          <li>
                            <a href="#">Nike </a>
                          </li>
                          <li>
                            <a href="#">Under Armour </a>
                          </li>
                          <li>
                            <a href="#">Adidas </a>
                          </li>
                          <li>
                            <a href="#">Puma</a>
                          </li>
                          <li>
                            <a href="#">ASICS </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#mens"
                        >
                          <span className="badge pull-right">
                            <i className="fa fa-plus" />
                          </span>
                          Mens
                        </a>
                      </h4>
                    </div>
                    <div id="mens" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul>
                          <li>
                            <a href="#">Fendi</a>
                          </li>
                          <li>
                            <a href="#">Guess</a>
                          </li>
                          <li>
                            <a href="#">Valentino</a>
                          </li>
                          <li>
                            <a href="#">Dior</a>
                          </li>
                          <li>
                            <a href="#">Versace</a>
                          </li>
                          <li>
                            <a href="#">Armani</a>
                          </li>
                          <li>
                            <a href="#">Prada</a>
                          </li>
                          <li>
                            <a href="#">Dolce and Gabbana</a>
                          </li>
                          <li>
                            <a href="#">Chanel</a>
                          </li>
                          <li>
                            <a href="#">Gucci</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordian"
                          href="#womens"
                        >
                          <span className="badge pull-right">
                            <i className="fa fa-plus" />
                          </span>
                          Womens
                        </a>
                      </h4>
                    </div>
                    <div id="womens" className="panel-collapse collapse">
                      <div className="panel-body">
                        <ul>
                          <li>
                            <a href="#">Fendi</a>
                          </li>
                          <li>
                            <a href="#">Guess</a>
                          </li>
                          <li>
                            <a href="#">Valentino</a>
                          </li>
                          <li>
                            <a href="#">Dior</a>
                          </li>
                          <li>
                            <a href="#">Versace</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Kids</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Fashion</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Households</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Interiors</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Clothing</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Bags</a>
                      </h4>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a href="#">Shoes</a>
                      </h4>
                    </div>
                  </div>
                </div>
                {/*/category-products*/}
              </div>
            </div>
            <div className="col-md-9">
              <h2 class="title text-center">Danh sách sản phẩm</h2>
              <div className="row">
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-thumb-blue-400x400.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-thumb-blue-400x400.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-thumb-blue-400x400.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-thumb-blue-400x400.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-thumb-blue-400x400.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-thumb-blue-400x400.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-thumb-blue-400x400.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-thumb-blue-400x400.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-thumb-blue-400x400.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="https://cdn.tgdd.vn/Products/Images/42/222596/oppo-reno4-thumb-blue-400x400.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default TrangChu;
