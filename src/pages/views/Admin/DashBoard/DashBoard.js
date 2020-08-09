import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import http from "../../../../api/api";

function DashBoard() {
  const [sumProduct, setSumProduct] = useState(0);
  const [sumPosts, setSumPosts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalSP, setTotalSP] = useState(0);
  const getSumProduct = () => {
    http
      .get("total-product/")
      .then(function (response) {
        setSumProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(getSumProduct, []);

  const getSumPosts = () => {
    http
      .get("total-posts/")
      .then(function (response) {
        setSumPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(getSumPosts, []);

  const getTotalPrice = () => {
    http
      .get("get-total-price/")
      .then(function (response) {
        setTotalPrice(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(getTotalPrice, []);

  const getTotalSp = () => {
    http
      .get("get-total-san-pham-da-ban/")
      .then(function (response) {
        setTotalSP(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(getTotalSp, []);

  function financial(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  }
    return (
        <div>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a>
        </div>
        {/* Content Row */}
        <div className="row">
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Số lượng sản phẩm</div>
    <div className="h5 mb-0 font-weight-bold text-gray-800">{new Intl.NumberFormat().format(sumProduct)}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Tổng số tiền</div>
    <div className="h5 mb-0 font-weight-bold text-gray-800">{financial(totalPrice)}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tổng sản phẩm đã bán</div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{new Intl.NumberFormat().format(totalSP)}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pending Requests Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Tổng số bài viết</div>
    <div className="h5 mb-0 font-weight-bold text-gray-800">{new Intl.NumberFormat().format(sumPosts)}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default DashBoard
