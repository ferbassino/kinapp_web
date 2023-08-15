import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoutes = ({ admin, redirectPath = "/" }) => {
  if (!admin) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default AdminRoutes;
