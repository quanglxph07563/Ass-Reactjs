import React from "react";
import Header from "../../components/Client/Header/Header";
import Footer from "../../components/Client/Footer/Footer";
import Menu from "../../components/Client/Menu/Menu";

import '../../styleClient/css/owl.carousel.css'
import '../../styleClient/css/responsive.css'
import '../../styleClient/css/style.css'
import '../../styleClient/css/font-awesome.min.css'

function LayoutClinet({children}) {
  return (
    <div>
      <Header />
      <Menu/>
      {children}
      <Footer />
    </div>
  );
}

export default LayoutClinet;
