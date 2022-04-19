import React from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="container  my-5">
        <div className="row ">
          <div className="col d-flex flex-column align-items-center justify-content-center form pt-4 my-5 order-2">
            <h2 className="display-4 fw-bolder text-center">
              HELLO, HAPPY TO SEE YOU{" "}
            </h2>
            <p className="lead">If your are already a Swiper</p>
            <h5 className="mb-5 ">Just</h5>
            <NavLink
              to="/signin"
              className="btn btn-outline-primary primary rounded-pill pb-2 w-50"
            >
              Sign In
            </NavLink>
          </div>
          <div className="col-md-6 p-5 justify-content-center">
            <h1 className="display-6 fw-bolder mb-5 text-center pt-5">
              SIGN UP
            </h1>
            <form className="m-5">
              <div className="mb-3">
                <label for="exampleInputUserName" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputUserName"
                  aria-describedby="UserName"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
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
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  I accept terms and conditions.
                </label>
              </div>
              <NavLink to="#" className="btn btn-outline-primary w-100">
                Sign up
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
