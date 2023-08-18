import React from "react";
import { dropAnalysis } from "../auxiliaries/caida";
import Header from "./Header";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Chart from "./Chart";

export default function FallView({ accZ, accT }) {
  const { zFiltered, tFiltered, tCaida, altura } = dropAnalysis(accZ, accT);

  return (
    <div>
      <br />
      <br />
      <Header title={"Análisis de la caida libre"} />
      <Title text="Aceleración del dispositivo en caida libre (z)" />
      <SubTitle text="Tiempo de caída [s]" value={tCaida.toFixed(2)} />
      <SubTitle text="Altura [m]" value={altura.toFixed(2)} />
      <Chart
        x={zFiltered}
        xColor={"#fa020f"}
        xName={"Aceleración ´z´"}
        t={tFiltered}
      />
    </div>
  );
}
