import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ handleLogout, name }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            kinapp
          </a>
          <p className="navbar-brand">¡Hola {name}!</p>
          <button onClick={handleLogout} className="btn btn-light">
            Cerrar sesión
          </button>
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
                {/* utilizamos link to para que refresque solo el componente y no toda la pagina */}
                <Link to="/modulo1" className="nav-link" aria-current="page">
                  Módulo 1
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/modulo2" className="nav-link">
                  Modulo 2
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/modulo3" className="nav-link">
                  Modulo 3
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/test" className="nav-link">
                  Tests
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
