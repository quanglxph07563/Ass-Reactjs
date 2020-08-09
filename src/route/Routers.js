import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutAdmin from "../pages/layouts/LayoutAdmin";
import LayoutClinet from "../pages/layouts/LayoutClinet";
import TrangChu from "../pages/views/Client/TrangChu";
import ShowProducts from "../pages/views/Admin/Products/ShowProduct";
import AddProduct from "../pages/views/Admin/Products/AddProduct";
import EditProduct from "../pages/views/Admin/Products/EditProduct";
import Cart from "../pages/views/Client/Cart";
import Checkout from "../pages/views/Client/Checkout";
import ThanhToanThanhCong from "../pages/views/Client/ThanhToanThanhCong";
import CuaHang from "../pages/views/Client/CuaHang";
import ChiTietSanPham from "../pages/views/Client/ChiTietSanPham";
import LienHe from "../pages/views/Client/LienHe";
import DashBoard from "../pages/views/Admin/DashBoard/DashBoard";
import AddCategory from "../pages/views/Admin/Category/AddCategory";
import ShowCategory from "../pages/views/Admin/Category/ShowCategory";
import EditCategory from "../pages/views/Admin/Category/EditCategory";
import Login from "../pages/views/Client/Login";
import Signup from "../pages/views/Client/Signup";
import DonHang from "../pages/views/Admin/DonHang";
import ListUser from "../pages/views/Admin/User/ListUser";
import DanhSach from "../pages/views/Admin/ArticleCategories/DanhSach";
import AddDanhMucBaiViet from "../pages/views/Admin/ArticleCategories/AddDanhMucBaiViet";
import EditDanhMucBaiViet from "../pages/views/Admin/ArticleCategories/EditDanhMucBaiViet";
import DanhSachBaiViet from "../pages/views/Admin/Posts/DanhSachBaiViet";
import AddBaiViet from "../pages/views/Admin/Posts/AddBaiViet";
import SuaBaiViet from "../pages/views/Admin/Posts/SuaBaiViet";
import PhanHoi from "../pages/views/Admin/PhanHoi/PhanHoi";
import BaiViet from "../pages/views/Client/BaiViet";
import ChiTietBaiViet from "../pages/views/Client/ChiTietBaiViet";
import DonHangPheDuyet from "../pages/views/Admin/DonHang/DonHangPheDuyet";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?/:path" exact>
          <LayoutAdmin>
            <Switch>
              <Route path="/admin/dashboard" exact>
                <DashBoard />
              </Route>
              <Route path="/admin/products" exact>
                <ShowProducts />
              </Route>
              <Route path="/admin/add-product" exact>
                <AddProduct />
              </Route>
              <Route path="/admin/edit-products/:id" exact>
                <EditProduct />
              </Route>

              <Route path="/admin/category" exact>
                <ShowCategory />
              </Route>
              <Route path="/admin/add-category" exact>
                <AddCategory />
              </Route>
              <Route path="/admin/edit-category/:id" exact>
                <EditCategory />
              </Route>

              <Route path="/admin/donhang" exact>
                <DonHang />
              </Route>

              <Route path="/admin/donhang-da-phe-duyet" exact>
                <DonHangPheDuyet />
              </Route>

              <Route path="/admin/user" exact>
                <ListUser />
              </Route>

              <Route path="/admin/danh-muc-bai-viet" exact>
                <DanhSach />
              </Route>

              <Route path="/admin/add-danh-muc-bai-viet" exact>
                <AddDanhMucBaiViet />
              </Route>

              <Route path="/admin/edit-danh-muc-bai-viet/:id" exact>
                <EditDanhMucBaiViet />
              </Route>

              <Route path="/admin/danh-sach-bai-viet/" exact>
                <DanhSachBaiViet />
              </Route>
              <Route path="/admin/add-bai-viet/" exact>
                <AddBaiViet />
              </Route>
              <Route path="/admin/edit-bai-viet/:id" exact>
                <SuaBaiViet />
              </Route>

              <Route path="/admin/phan-hoi" exact>
                <PhanHoi />
              </Route>
            </Switch>
          </LayoutAdmin>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route>
          <Switch>
            <LayoutClinet>
              <Route path="/" exact>
                <TrangChu />
              </Route>
              <Route path="/cart" exact>
                <Cart />
              </Route>
              <Route path="/cua-hang" exact>
                <CuaHang />
              </Route>
              <Route path="/chi-tiet-san-pham/:id">
                <ChiTietSanPham />
              </Route>
              <Route path="/checkout" exact>
                <Checkout />
              </Route>
              <Route path="/thanh-toan-thanh-cong" exact>
                <ThanhToanThanhCong />
              </Route>
              <Route path="/lien-he" exact>
                <LienHe />
              </Route>

              <Route path="/bai-viet" exact>
                <BaiViet />
              </Route>
              <Route path="/chi-tiet-bai-viet/:id" exact>
                <ChiTietBaiViet />
              </Route>
              
            </LayoutClinet>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
