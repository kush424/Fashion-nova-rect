import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="topbar text-center py-2">
        <div className="container">
          <small>Free shipping on all orders over 500 Rs</small>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
        <div className="container">
          <Link className="navbar-brand brand-logo" to="/">
            Fashion nova
          </Link>

          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="header-icons d-flex align-items-center gap-3">
              <span><i className="bi bi-search"></i></span>
              <span><i className="bi bi-person"></i></span>
              <span><i className="bi bi-heart"></i></span>
              <span><i className="bi bi-bag"></i></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
