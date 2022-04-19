import React from "react";
import "./discover.css";
import img1 from "../../assets/house1.jpg";


const Discover = () => {
  return (
    <div className="domoswap__discover">
      <div className="container title">
        <div className=" text-center title">
          <h1>Discover our houses</h1>
          <p>More than 450000 members ready to welcome you</p>
        </div>
        <div className="row mr-5 title">
            <div className="col-md-4">
              <div className="card p-3" >
              <img src={img1} alt="" />
              <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">this is my house </h5>
                  <p className="card-text lead">Torronto, Canada. </p>
                  <button type="submit" className="btn btn-outline-primary">Visit my domo<i className="fa fa-paper-plane ms-2"></i></button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Discover;
