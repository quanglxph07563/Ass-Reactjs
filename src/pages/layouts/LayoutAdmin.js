import React, { useState, useEffect } from 'react'
import Header from '../../components/Admin/Header/Header'
import Footer from '../../components/Admin/Footer/Footer'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import '../../styleAdmin/css/sb-admin-2.min.css';
import { useHistory } from "react-router-dom";
import axios from "axios";

function LayoutAdmin({children}) {
    const [infoUser, setinfoUser] = useState([]);
    let history = useHistory();
    if(localStorage.getItem('infoUser')){
      if(JSON.parse(localStorage.getItem('infoUser')).permission!=2){
        history.push("/");
      }
    }
    return (
        <div className="admin-page">
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header infoUser = {infoUser}/>
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
    )
}

export default LayoutAdmin
