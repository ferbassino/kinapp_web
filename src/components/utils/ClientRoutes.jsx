import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ClientRoutes = ({ bronze, redirectPath = "/" }) => {
  if (!bronze) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ClientRoutes;
