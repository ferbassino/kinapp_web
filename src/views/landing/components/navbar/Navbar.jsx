import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const handleSigIn = (e) => {
    navigate("/login");
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        {/* <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div> */}
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is kinApp?</a>
          </p>
          <p>
            <a href="#possibility">Movile app</a>
          </p>
          <p>
            <a href="#features">Web App</a>
          </p>
          <p>
            <a href="#blog">Upcoming events</a>
          </p>
        </div>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is kinApp?</a>
              </p>
              <p>
                <a href="#possibility">Movile app</a>
              </p>
              <p>
                <a href="#features">Web App</a>
              </p>
              <p>
                <a href="#blog">Upcoming events</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
