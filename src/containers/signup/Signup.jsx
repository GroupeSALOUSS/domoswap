import React, { useState }  from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";
import { createUser } from "../../actions/users";
import { useDispatch } from "react-redux";



const Signup = () => {
  const [user, setUser] =  useState({
    userName: '',
    email: '',
    password: ''
  })

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createUser(user))
  }
  
  const clear = () => {
    
  }


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
            <form className="m-5" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="exampleInputUserName" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputUserName"
                  aria-describedby="UserName"
                  value={user.userName}
                  onChange = {e => setUser({ ...user, userName: e.target.value})}
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
                  value={user.email}
                  onChange = {e => setUser({ ...user, email: e.target.value})}
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
                  value={user.password}
                  onChange = {e => setUser({ ...user, password: e.target.value})}
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
              <button  className="btn btn-outline-primary w-100"  onClick={clear}>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
