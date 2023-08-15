import React from "react";

const Header = ({ title }) => {
  return (
    <div className="p-3 m-2 bg-secondary text-white text-center">
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
