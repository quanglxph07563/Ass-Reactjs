

import React from 'react'
import { Link } from "react-router-dom";
export const Sidebar = () => {
    return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
          </a>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          {/* Nav Item - Dashboard */}
          <li className="nav-item">
            <Link className="nav-link" to="/admin/dashboard">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span></Link>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">
            Interface
          </div>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-fw fa-cog" />
              <span>Sản phẩm</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Chức năng</h6>
                <Link className="collapse-item" to="/admin/products">Show sản phẩm</Link>
                <Link className="collapse-item" to="/admin/add-product">Thêm sản phẩm</Link>
              </div>
            </div>
          </li>
          {/* Nav Item - Utilities Collapse Menu */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-wrench" />
              <span>Danh mục</span>
            </a>
            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Chức năng</h6>
                <Link className="collapse-item" to="/admin/category">Show danh mục</Link>
                <Link className="collapse-item" to="/admin/add-category">Thêm danh mục</Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#donhang" aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-wrench" />
              <span>Đơn hàng</span>
            </a>
            <div id="donhang" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Chức năng</h6>
                <Link className="collapse-item" to="/admin/donhang">Đơn hàng</Link>
                <Link className="collapse-item" to="/admin/donhang-da-phe-duyet">Đơn hàng hoàn tất</Link>

              </div>
            </div>
          </li>
          {/* Divider */}
          <hr className="sidebar-divider" />
          {/* Heading */}
          <div className="sidebar-heading">
            Addons
          </div>
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder" />
              <span>User</span>
            </a>
            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <Link className="collapse-item" to="/admin/user">Danh sách</Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#danmucbaiviet" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder" />
              <span>Danh mục bài viết</span>
            </a>
            <div id="danmucbaiviet" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <Link className="collapse-item" to="/admin/danh-muc-bai-viet">Danh mục</Link>
              </div>
              <div className="bg-white py-2 collapse-inner rounded">
                <Link className="collapse-item" to="/admin/add-danh-muc-bai-viet">Thêm danh mục</Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#baiviet" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder" />
              <span>Bài viết</span>
            </a>
            <div id="baiviet" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <Link className="collapse-item" to="/admin/danh-sach-bai-viet">Danh sách</Link>
              </div>
              <div className="bg-white py-2 collapse-inner rounded">
                <Link className="collapse-item" to="/admin/add-bai-viet">Thêm bài viết</Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#phanhoi" aria-expanded="true" aria-controls="collapsePages">
              <i className="fas fa-fw fa-folder" />
              <span>Phản hồi</span>
            </a>
            <div id="phanhoi" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <Link className="collapse-item" to="/admin/phan-hoi">Danh sách</Link>
              </div>
            </div>
          </li>
          {/* Nav Item - Charts */}
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
          </div>
        </ul>
    )
}

export default Sidebar;
