import React from "react";
import icon from "../views/landing/assets/icon.png";
const LoginForm = ({
  handleLogin,
  email,
  password,
  webCode,
  handleEmail,
  handlePassword,
  handleWebCode,
}) => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img src={icon} alt="icon" width={40} height={40} className="mx-4" />
          <h2 className="navbar-brand ">kinApp</h2>
          <form className="d-flex row" role="search" onSubmit={handleLogin}>
            <input
              className="form-control m-2 col-sm "
              aria-label="Search"
              type="text"
              value={email}
              name="email"
              placeholder="email"
              onChange={handleEmail}
              required
            />
            <input
              className="form-control m-2 col-sm"
              aria-label="Search"
              type="password"
              value={password}
              name="Password"
              placeholder="Password"
              onChange={handlePassword}
              required
            />
            <input
              className="form-control m-2 col-sm"
              aria-label="Search"
              type="number"
              value={webCode}
              name="webCode"
              placeholder="mobile code"
              onChange={handleWebCode}
              required
            />

            <button className="btn btn-outline-success m-2  col">
              Sign in
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default LoginForm;
