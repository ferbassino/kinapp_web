import React from "react";
import MotionsView from "../../components/MotionsView";
import { useLocation } from "react-router-dom";
const ReaderMotion = () => {
  const location = useLocation();

  const { el, email } = location.state;

  return (
    <div className="container">
      <MotionsView dataTest={el} email={email} />
    </div>
  );
};

export default ReaderMotion;
