import React from "react";
import Lottie from "lottie-react";
import kinapp_loading from "../assets/kinapp_loading.json";

const LoadingKinapp = () => (
  <div style={{ width: "50%", margin: "auto" }}>
    <Lottie animationData={kinapp_loading} loop={true} />
  </div>
);

export default LoadingKinapp;
