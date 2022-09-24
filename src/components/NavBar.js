import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ handleLogout }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            kinapp
          </a>
          <button onClick={handleLogout}>Cerrar sesión</button>
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
                <Link
                  to="/dataform"
                  className="nav-link active"
                  aria-current="page"
                >
                  Análisis
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/searchevaluation" className="nav-link">
                  Buscar evaluación
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/renderall" className="nav-link">
                  Todas las evaluaciones
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
