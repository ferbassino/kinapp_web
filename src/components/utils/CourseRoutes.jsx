import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const CourseRoutes = ({ editor, redirectPath = "/" }) => {
  if (!editor) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default CourseRoutes;
