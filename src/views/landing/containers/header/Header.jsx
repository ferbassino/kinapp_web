import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
import axis2 from "../../assets/axis2.png";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Let's take biomechanical analysis to next level with kinApp
      </h1>
      <p>
        Interpret the information provided by the inertial units to evaluate the
        performance of body movement.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src={people} alt="people" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={axis2} alt="ai" />
    </div>
  </div>
);

export default Header;
