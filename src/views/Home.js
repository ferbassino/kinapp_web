import React from "react";
import Aside from "../components/Aside";

import Jornadas from "../components/Jornadas";
import { useState } from "react";
import { useEffect } from "react";
import Documentation from "./general/Documentation";
import Statistics from "./general/Statistics";
import DeviceUse from "./general/DeviceUse";
import Introduction from "./general/Introduction";
import ZoneHome from "./zoneOf/ZoneHome";
import Editor from "./editor/Editor";
import Reader from "./reader/Reader";
import ReaderClients from "./reader/ReaderClients";
import ReaderMotions from "./reader/ReaderMotions";
const Home = ({ selectedView, userName, roles }) => {
  const [view, setView] = useState("home");
  useEffect(() => {
    setView(selectedView);
  }, [selectedView]);
  console.log(roles, "roles en home");
  return (
    <>
      {view === "home" && roles === "editor" ? (
        <>
          <Editor view={view} userName={userName} />
        </>
      ) : null}
      {view === "home" && roles === "reader" ? (
        <>
          <Reader view={view} userName={userName} />
        </>
      ) : null}
      {view === "clients" && roles === "reader" ? (
        <>
          <ReaderClients view={view} userName={userName} />
        </>
      ) : null}
      {view === "tests" && roles === "reader" ? (
        <>
          <ReaderMotions view={view} userName={userName} />
        </>
      ) : null}
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
