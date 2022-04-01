import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/Logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <Logo width={"50px"} height={"50px"} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Projects
            </a>
            <Link to="/about" className="nav-link">
              Personal Projects
            </Link>
            <a className="nav-link" href="/">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
