import React, { useEffect, useState } from "react";
import { useNav } from "../navZustand";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Aside = (props) => {
  const [t, i18n] = useTranslation("global");
  const { userName, roles } = props;

  return (
    <div className="vh-100  ">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">{t("aside.general")}</th>
          </tr>
        </thead>
      </table>
      <ul>
        <li className="nav-item">
          <Link to="/introduction" className="nav-link">
            {t("aside.introduction")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/deviceuse" className="nav-link">
            {t("aside.deviceUse")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/statistics" className="nav-link">
            {t("aside.statistics")}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/documentation" className="nav-link">
            {t("aside.documentation")}
          </Link>
        </li>
      </ul>

      {roles === "reader" ? (
        <>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">
                  {t("aside.zone")} {userName}
                </th>
              </tr>
            </thead>
          </table>
          <ul>
            <li className="nav-item">
              <Link to="/reader" className="nav-link">
                {t("aside.home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reader/clients" className="nav-link">
                {t("aside.clients")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reader/motions" className="nav-link">
                {t("aside.tests")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reader/statistics" className="nav-link">
                {t("aside.userStatistics")}
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
                <th scope="col">
                  {t("aside.zone")} {userName}
                </th>
              </tr>
            </thead>
          </table>
          <ul>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                {t("aside.home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/users" className="nav-link">
                Users
              </Link>
            </li>
            <li>
              <Link to="/admin/clients" className="nav-link">
                {t("aside.clients")}
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/admin/motions" className="nav-link">
                {t("aside.tests")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/statistics" className="nav-link">
                {t("aside.userStatistics")}
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
                <th scope="col">
                  {t("aside.zone")} {userName}
                </th>
              </tr>
            </thead>
          </table>
          <ul>
            <li className="nav-item">
              <Link to="/editor" className="nav-link">
                {t("aside.home")}
              </Link>
            </li>

            <li>
              <Link to="/editor/clients" className="nav-link">
                {t("aside.clients")}
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/editor/motions" className="nav-link">
                {t("aside.tests")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/editor/statistics" className="nav-link">
                {t("aside.userStatistics")}
              </Link>
            </li>
          </ul>
        </>
      ) : null}

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">{t("aside.others")}</th>
          </tr>
        </thead>
      </table>
      <ul>
        <li className="nav-item">
          <Link to="/jornadas" className="nav-link">
            {t("aside.jornadas")}
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
