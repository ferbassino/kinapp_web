import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ReaderRoutes = ({ reader, redirectPath = "/" }) => {
  if (!reader) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default ReaderRoutes;
