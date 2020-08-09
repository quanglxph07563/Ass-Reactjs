import React, { useState, useEffect } from "react";
import http from '../../../api/api';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
function ChiTietBaiViet() {
    let { id } = useParams();
    const [detail, setDeatil] = useState({});
    const setList = () => {
        http
          .get("posts/" + id)
          .then(function (response) {
            setDeatil(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      useEffect(setList, [id]);
    return (
        <div className="container mt-4 mb-4">
        <div className="row">
          <div className="anh_bai_viet d-flex justify-content-center col-md-12">
            <img width='600px' src={detail.images} alt="" />
          </div>
          <h3 className="tieu_de_bv mt-3 mb-3">
            {detail.title}
          </h3>
          <div className="detail">
          {ReactHtmlParser(detail.detail)}
          </div>
        </div>
      </div>
    )
}

export default ChiTietBaiViet
