import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ClientView from "../../components/ClientView";
const ReaderClient = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.userId;

  return (
    <div className="container">
      <ClientView id={id} />
      <button
        className="btn btn-primary"
        onClick={() => navigate("/reader/clients")}
      >
        back clients
      </button>
    </div>
  );
};

export default ReaderClient;
