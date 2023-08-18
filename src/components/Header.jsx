import React from "react";

const Header = ({ title }) => {
  return (
    <div
      className="p-3 m-2 bg-secondary text-white text-center"
      style={{ marginTop: 10 }}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
