import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Products
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/electronics">
                  Electronics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/jewelery">
                  Jewelery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/men's clothing">
                  Men's clothing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/women's clothing">
                  Women's clothing
                </Link>
              </li>
            </ul>
            <div className="d-flex ">
              <Link className="nav-link" to="/login">
                <button className="btn btn-success me-2" type="submit">
                  Log In
                </button>
              </Link>
              <Link className="nav-link" to="/signup">
                <button className="btn btn-success me-5" type="submit">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
