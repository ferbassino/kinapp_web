import React from "react";
import Aside from "../components/Aside";

import Jornadas from "../components/Jornadas";
import { useState } from "react";
import { useEffect } from "react";
import Documentation from "./general/Documentation";
import Statistics from "./general/Statistics";
import DeviceUse from "./general/DeviceUse";
import Introduction from "./general/Introduction";

const Home = ({ selectedView }) => {
  const [view, setView] = useState("");
  useEffect(() => {
    setView(selectedView);
  }, [selectedView]);

  return (
    <>
      {view === "jornadas" ? (
        <>
          <Jornadas view={view} />
        </>
      ) : null}
      {view === "documentation" ? (
        <>
          <Documentation view={view} />
        </>
      ) : null}
      {view === "statistics" ? (
        <>
          <Statistics view={view} />
        </>
      ) : null}
      {view === "introduction" ? (
        <>
          <Introduction view={view} />
        </>
      ) : null}
      {view === "deviceUse" ? (
        <>
          <DeviceUse view={view} />
        </>
      ) : null}
    </>
  );
};

export default Home;
