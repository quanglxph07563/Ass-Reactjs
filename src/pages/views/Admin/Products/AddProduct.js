import React from "react";
import axios from "axios";
const AddProduct = () => {
  const addSanPham = (event) => {
    event.preventDefault();
    let target = event.target;
    let data = {
      name_product: target.name_product.value,
      images: target.images.value,
      price: target.price.value,
      amount: target.amount.value,
      detail: target.detail.value,
      idCategory: target.categoryId.value,
    };
    axios
      .post("http://127.0.0.1:8000/api/products/", data)
      .then(function (response) {
        window.location.pathname = "/admin/products";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form method='POST' onSubmit={addSanPham}>
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Danh mục</label>
          {/* <select className="form-control" id="categoryId"></select> */}
          <input type="text" className="form-control" name="categoryId" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
          <input type="text" className="form-control" name="name_product" />
          <span className="error" style={{ color: "red" }} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1"> Ảnh Sản Phẩm</label>
          <input
            type="file"
            onchange="loadImageFileAsURL();"
            className="form-control"
            id="images"
            name="images"
          />
          <span className="error" style={{ color: "red" }} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Giá Tiền</label>
          <input type="number" min={0} className="form-control" name="price" />
          <span className="error" style={{ color: "red" }} />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Số Lượng</label>
          <input type="number" className="form-control" name="amount" />
          <span className="error" style={{ color: "red" }} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Chi tiết sản phẩm
          </label>
          <textarea
            className="form-control"
            name="detail"
            rows={5}
            defaultValue={""}
          />
          <span className="error" style={{ color: "red" }} />
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="submit"
          // onClick={() => addSanPham()}
          class="btn btn-primary"
        >
         Thêm mới sản phẩm
        </button>
      </div>
    </div>
  </form>
  );
};

export default AddProduct;
