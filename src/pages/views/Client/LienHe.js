import React from 'react'

function LienHe() {
    return (
        <div>
             <div className="container " style={{marginTop: '30px', marginBottom: '30px'}}>
        <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="col-md-10 ">
            <form method>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Họ tên</label>
                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Nhập họ tên" />
                <span className="error" style={{color: 'red'}} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Địa chỉ</label>
                <input type="text" className="form-control" id="address" placeholder="Địa chỉ" />
                <span className="error" style={{color: 'red'}} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Nhập Email" />
                <span className="error" style={{color: 'red'}} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Nội dung</label>
                <textarea className="form-control" id="content" rows={8} defaultValue={""} />
                <span className="error" style={{color: 'red'}} />
              </div>
            </form>
            <button type="submit" id="gui" className="btn btn-primary">Gửi</button>
          </div>
          <div className="col-md-10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7445.842453400471!2d105.65306419999999!3d21.075808199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1588006884306!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
          </div>
        </div>
      </div>
        </div>
    )
}

export default LienHe
