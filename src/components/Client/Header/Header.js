import React from "react";
import imagePath from '../../../styleClient/img/logo.png';
function Header() {
  return (
    <div>
      <div className="header-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="user-menu">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-user" /> My Account
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart" /> Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <i className="fa fa-user" /> My Cart
                    </a>
                  </li>
                  <li>
                    <a href="checkout.html">
                      <i className="fa fa-user" /> Checkout
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-user" /> Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo">
                <h1>
                  <a href="./">
                    <img src={imagePath}/>
                  </a>
                </h1>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="shopping-item">
                <a href="cart.html">
                  Cart <i className="fa fa-shopping-cart" />{" "}
                  <span className="product-count">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
