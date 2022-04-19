import React from "react";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";

// utiliser bootstrap pour créer la navbar

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary mr-5" type="submit">
                Search
              </button>
            </form>
          </div>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/discover">
                  Discover
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/howitworks">
                  How it works?
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact us
                </NavLink>
              </li>
              <NavLink className="btn btn-outline-primary ms-2 px-4" to="/signin">
                Sign in
              </NavLink>
              <NavLink className="btn btn-primary ms-2 px-4" to="/signup">
                Sign Up
              </NavLink>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
