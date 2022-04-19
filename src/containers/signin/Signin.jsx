import React from "react";
import "./signin.css";
import { NavLink } from "react-router-dom";
const Signin = () => {
  return (
    <div>
      <div className="container  my-5">
        <div className="row ">
          <div className="col d-flex flex-column align-items-center form  my-5">
            <h2 className="display-4 fw-bolder text-center title">
              Welcome To DOMOSWAP{" "}
            </h2>
            <p className="lead">Join our family by putting your credentials</p>
            <h5 className="mb-5 ">OR</h5>
            <NavLink
              to="/signup"
              className="btn btn-outline-primary primary rounded-pill pb-2 w-50"
            >
              Sign Up
            </NavLink>
          </div>
          <div className="col-md-6 p-5 ">
            <h1 className="display-6 fw-bolder mb-5 text-center title">
              SIGN IN
            </h1>
            <form className="m-5">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <NavLink
                to="#"
                className="btn btn-outline-primary primary w-100 mt-5"
              >
                Sign in
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
