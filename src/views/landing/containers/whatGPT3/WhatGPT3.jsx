import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatgtp3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is kinApp"
        text="kinapp is a resource environment for biomechanical analysis which includes mobile applications, web applications, inertial devices (UMICO) and database storage."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        Obtain infinite data with this powerful tool
      </h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Mobile app"
        text="With the mobile application you can capture body movements or the movement of different elements mobilized by it."
      />
      <Feature
        title="Web app"
        text="In the web application we can view the data stored in the database and access specific documentation."
      />
      <Feature
        title="UMICO"
        text="Umico is an inertial device that captures angular velocity and positional acceleration with bluetooth connection for pc."
      />
    </div>
  </div>
);

export default WhatGPT3;
