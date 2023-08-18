import React from "react";
import { dropAnalysis } from "../auxiliaries/caida";
import Header from "./Header";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Chart from "./Chart";
import { rotationAnalysis } from "../auxiliaries/rotationAnalysis";

export default function RotacionView({ accY, accZ, accT }) {
  const { arrayZYAngle, zYAngle } = rotationAnalysis(accY, accZ, accT);

  return (
    <div>
      <br />
      <br />
      <Header title={"Análisis de la rotación pura"} />
      <Title text="Evolución del ángulo z-y en funcion del tiempo" />
      <SubTitle text="ángulo [°]" value={parseInt(zYAngle)} />

      <Chart
        x={arrayZYAngle}
        xColor={"#fa020f"}
        xName={"ángulo z-y"}
        t={accT}
      />
    </div>
  );
}
