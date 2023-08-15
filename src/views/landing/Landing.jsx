import React from "react";

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

import { Cta, Brand, Navbar, CTA } from "./components";

import "./landing.css";

const Landing = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      {/* <Brand /> */}
      <WhatGPT3 />
      <Possibility />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default Landing;
