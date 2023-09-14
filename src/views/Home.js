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
import Admin from "./admin/Admin";
const Home = ({ selectedView, userName, roles }) => {
  const [view, setView] = useState("home");
  useEffect(() => {
    setView(selectedView);
  }, [selectedView]);

  return (
    <>
      {roles === "reader" ? (
        <>
          <Reader view={view} userName={userName} />
        </>
      ) : null}
      {roles === "editor" ? (
        <>
          <Editor view={view} userName={userName} />
        </>
      ) : null}
      {roles === "admin" ? (
        <>
          <Admin view={view} userName={userName} />
        </>
      ) : null}
    </>
  );
};

export default Home;
