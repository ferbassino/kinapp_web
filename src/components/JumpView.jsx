import React from "react";
import translationAnalysis from "../auxiliaries/translationAnalysis";
import ChartAxis from "./ChartAxis";
import Header from "./Header";
import Title from "./Title";
import SubTitle from "./SubTitle";
import SubTitle2 from "./Subtitle2";
import jumpProcess from "../auxiliaries/jumpProcess";
import { useEffect } from "react";

const Jump = ({ accY = [], testTime = 0, weight = 0, accT = [] }) => {
  const {
    arrayY0,
    arrayY0F,
    arrayT0F,
    arrayY0Imp,
    arrayT0FImp,
    arrayY0Vuelo,
    arrayT0Vuelo,
    arrayY0Amort,
    arrayT0Amort,
    tV,
    alturaVuelo,
    velD,
  } = jumpProcess(accY, testTime, weight, accT);

  return (
    <div>
      <br />
      <br />
      <Header title={"Análisis cinemático del salto vertical"} />
      <Title text="Aceleración del dispositivo en 'y'" />
      <ChartAxis y={arrayY0} yColor={"#fa020f"} yName={"a-y"} t={accT} />
      <SubTitle text="Tiempo de vuelo [s]" value={tV.toFixed(2)} />
      <SubTitle text="Altura [m]" value={alturaVuelo.toFixed(2)} />
      <SubTitle text="Velocidad de despegue [m/s]" value={velD.toFixed(2)} />
      <Title text="Aceleración filtrada" />
      <ChartAxis y={arrayY0F} yColor={"#fa020f"} yName={"a"} t={arrayT0F} />
      <Title text="Fase de Impulso" />
      <ChartAxis
        y={arrayY0Imp}
        yColor={"#fa020f"}
        yName={"a"}
        t={arrayT0FImp}
      />
      <Title text="Fase de Vuelo" />
      <ChartAxis
        y={arrayY0Vuelo}
        yColor={"#fa020f"}
        yName={"a"}
        t={arrayT0Vuelo}
      />
      <Title text="Fase de Amortiguación" />
      <ChartAxis
        y={arrayY0Amort}
        yColor={"#fa020f"}
        yName={"a"}
        t={arrayT0Amort}
      />
    </div>
  );
};

export default Jump;
