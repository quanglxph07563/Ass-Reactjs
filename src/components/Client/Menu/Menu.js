import React from 'react'

function Menu() {
    return (
        <div className ='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Trang chủ <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cửa hàng</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    )
}

export default Menu
