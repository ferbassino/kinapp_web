import React from "react";
import "./Header.css";
const Header = ({ title }) => {
  return (
    <div className=" header-div p-3 m-2  text-center">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
