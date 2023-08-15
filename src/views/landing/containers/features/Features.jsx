import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Analysis of data",
    text: "The visualization of the data obtained with the devices is observed in a more complete way.",
  },
  {
    title: "Database access",
    text: "Specific filters can be applied to requests to the database.",
  },
  {
    title: "Access to documentation",
    text: "Detailed documentation on different biomechanical and anatomo-functional contents.",
  },
  {
    title: "Statistics analysis",
    text: "Statistics on the data obtained in all evaluations.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The web application gives us the possibility to analyze the data in a
        more complete way
      </h1>
      {/* <p>Request Early Access to Get Started</p> */}
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
