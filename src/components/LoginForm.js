import React from "react";

const LoginForm = ({
  handleLogin,
  username,
  password,
  handleUsername,
  handlePassword,
}) => {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container">
          <h2 className="navbar-brand">kinapp</h2>
          <form className="d-flex row" role="search" onSubmit={handleLogin}>
            <input
              className="form-control m-2 col-sm "
              aria-label="Search"
              type="text"
              value={username}
              name="Username"
              placeholder="Username"
              onChange={handleUsername}
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

            <button className="btn btn-outline-success m-2  col">
              Ingresar
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default LoginForm;
