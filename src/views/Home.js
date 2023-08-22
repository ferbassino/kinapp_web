import React from "react";
import Aside from "../components/Aside";

import Jornadas from "../components/Jornadas";
import { useState } from "react";
import { useEffect } from "react";

const Home = ({ selectMov }) => {
  const [selectMovement, setSelectMovement] = useState("");
  useEffect(() => {
    setSelectMovement(selectMov);
  }, [selectMov]);

  return (
    <div>
      <div>
        <main>
          <Jornadas selectMovement={selectMovement} />
        </main>
      </div>
      <footer>footer</footer>
    </div>
  );
};

export default Home;
