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
            </Switch>
          </LayoutAdmin>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup/>
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
              <Route path="/chi-tiet-san-pham/:id" exact>
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
            </LayoutClinet>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routers;
