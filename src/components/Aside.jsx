import React, { useEffect, useState } from "react";
import { useNav } from "../navZustand";
import { Link } from "react-router-dom";
const Aside = (props) => {
  const { userName, roles } = props;
  const {
    navOption,
    goToIntroduction,
    goToDeviceUse,
    goToStatistics,
    goToDocumentation,
    goToHome,
    goToClients,
    goToTests,
    goToApps,
    goToUserStatistics,
    goToJornadas,
  } = useNav();

  return (
    <div className="vh-100  ">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">General</th>
          </tr>
        </thead>
      </table>
      <ul>
        <li className="nav-item">
          <Link to="/introduction" className="nav-link">
            introduction
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/deviceUse" className="nav-link">
            Device use
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/statistics" className="nav-link">
            Statistics
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/documentation" className="nav-link">
            Documentation
          </Link>
        </li>
      </ul>

      {roles === "reader" ? (
        <>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Área de {userName}</th>
              </tr>
            </thead>
          </table>
          <ul>
            <li className="nav-item">
              <Link to="/reader" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reader/clients" className="nav-link">
                Clients
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reader/motions" className="nav-link">
                Tests
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reader/statistics" className="nav-link">
                Statistics
              </Link>
            </li>
          </ul>
        </>
      ) : null}
      {roles === "admin" ? (
        <>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Área de {userName}</th>
              </tr>
            </thead>
          </table>
          <ul>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/users" className="nav-link">
                Users
              </Link>
            </li>
            <li>
              <Link to="/admin/clients" className="nav-link">
                Clients
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/admin/motions" className="nav-link">
                Tests
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/statistics" className="nav-link">
                Statistics
              </Link>
            </li>
          </ul>
        </>
      ) : null}
      {roles === "editor" ? (
        <>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Área de {userName}</th>
              </tr>
            </thead>
          </table>
          <ul>
            <li className="nav-item">
              <Link to="/editor" className="nav-link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/editor/clients" className="nav-link">
                Clients
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/editor/motions" className="nav-link">
                Tests
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/editor/statistics" className="nav-link">
                Statistics
              </Link>
            </li>
          </ul>
        </>
      ) : null}

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Otros</th>
          </tr>
        </thead>
      </table>
      <ul>
        <li className="nav-item">
          <Link to="/jornadas" className="nav-link">
            Jornadas
          </Link>
        </li>
      </ul>

      {/* <tr>
            <td>opcion 2</td>
          </tr>
          <tr>
            <td>opcion 3</td>
          </tr> */}
    </div>
  );
};

export default Aside;
