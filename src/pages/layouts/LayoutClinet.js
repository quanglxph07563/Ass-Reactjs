import React from "react";
import Header from "../../components/Client/Header/Header";
import Footer from "../../components/Client/Footer/Footer";
import Menu from "../../components/Client/Menu/Menu";

import '../../styleClient/css/owl.carousel.css'
import '../../styleClient/css/responsive.css'
import '../../styleClient/css/style.scss'
import '../../styleClient/css/font-awesome.min.css'

function LayoutClinet({children}) {
  const getCountCart = ()=>{
    var getCart=localStorage.getItem('cart')
    var listsp = JSON.parse(getCart)
    var totalsp=0
    if (listsp!=null) {
          listsp.forEach(elements=>{
    totalsp+=elements.sl
    })
    }

    document.querySelector(".product-count").innerHTML=totalsp
    }
    window.onload = function(){ 
      getCountCart()
    }
  return (
    <div id='clinet'>
      <Header />
      <Menu/>
      {children}
      <Footer />
    </div>
  );
}

export default LayoutClinet;
