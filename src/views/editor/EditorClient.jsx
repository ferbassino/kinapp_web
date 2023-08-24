import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ClientView from "../../components/ClientView";
const EditorClient = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.userId;

  return (
    <div className="container">
      <ClientView id={id} />
      <button
        className="btn btn-primary"
        onClick={() => navigate("/editor/clients")}
      >
        back clients
      </button>
    </div>
  );
};

export default EditorClient;
