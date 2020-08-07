import React, { useState, useEffect } from 'react'
import Header from "../../components/Client/Header/Header";
import Footer from "../../components/Client/Footer/Footer";
import Menu from "../../components/Client/Menu/Menu";
import axios from "axios";
import "../../styleClient/css/owl.carousel.css";
import "../../styleClient/css/responsive.css";
import "../../styleClient/css/style.scss";
import "../../styleClient/css/font-awesome.min.css";
import http from "../../api/api";
function LayoutClinet({ children }) {
  const [infoUser, setinfoUser] = useState([]);
  const getCountCart = () => {
    var getCart = localStorage.getItem("cart");
    var listsp = JSON.parse(getCart);
    var totalsp = 0;
    if (listsp != null) {
      listsp.forEach((elements) => {
        totalsp += elements.sl;
      });
    }

    document.querySelector(".product-count").innerHTML = totalsp;
  };
  const getInfoUser = () => {
    axios
      .get("http://127.0.0.1:8000/api/auth/user/", {
        headers: { Authorization: `Bearer ${localStorage.userToken}` },
      })
      .then(function (response) {
        setinfoUser(response.data)
      })
      .catch(function (error) {
        // document.getElementById('trung_ten').innerHTML = error.response.data.errors.name_category
      });
  };
  useEffect(getInfoUser, []);
  // console.log("fdsfsad", infoUser);

  window.onload = function () {
    getCountCart();
  };
  return (
    <div id="clinet">
      <Header infoUser = {infoUser} />
      <Menu />
      {children}
      <Footer />
    </div>
  );
}

export default LayoutClinet;
