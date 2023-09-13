import React from "react";
import MotionView from "../../components/MotionView";
import { useLocation } from "react-router-dom";
const EditorMotion = () => {
  const location = useLocation();

  const { el, email } = location.state;

  return (
    <div className="container">
      <MotionView dataTest={el} email={email} />
    </div>
  );
};

export default EditorMotion;
