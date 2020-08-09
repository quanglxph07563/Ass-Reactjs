import React from 'react'
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className ='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Trang chủ <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/cua-hang">Cửa hàng <span className="sr-only">(current)</span></Link> 
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/lien-he">Liên hệ <span className="sr-only">(current)</span></Link> 
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/bai-viet">Bài viết<span className="sr-only">(current)</span></Link> 
            </li>
          </ul>
        </div>
      </nav>
      </div>
    )
}

export default Menu
