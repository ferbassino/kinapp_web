import React from "react";
import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import icon from "../views/landing/assets/icon.png";

import SelectLanguage from "./SelectLanguage";
import { useTranslation } from "react-i18next";
const NavBar = ({ handleLogout, userName = "", roles }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top ">
      <div className="container-fluid">
        <img src={icon} alt="icon" width={40} height={40} className="mx-4" />
        <a className="navbar-brand col-md-2" href="/">
          kinApp
        </a>
        <p className="navbar-brand col-md-2 my-auto"> {userName}</p>

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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-md-6">
            {roles === "admin" ? (
              <li className="nav-item">
                {/* utilizamos link to para que refresque solo el componente y no toda la pagina */}
                <Link to="/admin" className="nav-link" aria-current="page">
                  Admin panel
                </Link>
              </li>
            ) : null}

            {roles === "reader" ? (
              <li className="nav-item">
                <Link to="/reader" className="nav-link">
                  Dashboard
                </Link>
              </li>
            ) : null}
            {roles === "editor" ? (
              <li className="nav-item">
                <Link to="/editor" className="nav-link">
                  Dashboard
                </Link>
              </li>
            ) : null}

            {roles === "bronze" ? (
              <li className="nav-item">
                <Link to="/client" className="nav-link">
                  Dashboard
                </Link>
              </li>
            ) : null}

            <li className="nav-item">
              <Link to="/kinapp" className="nav-link">
                kinapp
              </Link>
            </li>
          </ul>
          <button onClick={handleLogout} className="btn btn-light col-md-2">
            {t("userNavBar.logOut")}
          </button>
          <SelectLanguage className=" col-md-2" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
