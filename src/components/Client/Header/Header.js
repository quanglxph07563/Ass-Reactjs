import React from "react";
import imagePath from "../../../styleClient/img/logo.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Header({ infoUser }) {
  let history = useHistory();
  const logout =(e)=>{
    e.preventDefault()
    localStorage.removeItem('userToken')
    swal({
      title: 'Đăng xuất thành công',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    }).then(()=>{
      history.push("/");
    });
};
  
  const userLogin = (
    <ul>
      <li>
        <a href="checkout.html">
          <i className="fa fa-user" /> Xin chào : {infoUser.name}
        </a>
      </li>
      <li>
        <a href='' onClick = {logout}>
          <i className="fa fa-user" /> Logout
        </a>
      </li>
    </ul>
  );

  const userNotLogin = (
    <ul>
      <li>
      <Link to="signup">
          <i className="fa fa-user" /> Signup
        </Link>
      </li>
      <li>
        <Link to="login">
          <i className="fa fa-user" /> Login
        </Link>
      </li>
    </ul>
  );
  
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
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="user-menu">
                {localStorage.userToken?userLogin:userNotLogin}
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
                    <img src={imagePath} />
                  </a>
                </h1>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="shopping-item">
                <Link to={"/cart"}>
                  Cart <i className="fa fa-shopping-cart" />{" "}
                  <span className="product-count">0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
