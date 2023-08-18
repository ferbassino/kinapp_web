import React from "react";
import translationAnalysis from "../auxiliaries/translationAnalysis";
import Chart from "./Chart";
import Header from "./Header";
import Title from "./Title";
import SubTitle from "./SubTitle";
import SubTitle2 from "./Subtitle2";
import jumpProcess from "../auxiliaries/jumpProcess";
import { useEffect } from "react";

const Jump = ({ accY = [], testTime = 0, masa = 0, accT = [] }) => {
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
  } = jumpProcess(accY, testTime, masa, accT);

  return (
    <div>
      <br />
      <br />
      <Header title={"Análisis cinemático del salto vertical"} />
      <Title text="Aceleración del dispositivo en 'y'" />
      <Chart
        x={arrayY0}
        xColor={"#fa020f"}
        xName={"Aceleración ´y´"}
        t={accT}
      />
      <SubTitle text="Tiempo de vuelo [s]" value={tV.toFixed(2)} />
      <SubTitle text="Altura [m]" value={alturaVuelo.toFixed(2)} />
      <SubTitle text="Velocidad de despegue [m/s]" value={velD.toFixed(2)} />
      <Title text="Aceleración filtrada" />
      <Chart
        x={arrayY0F}
        xColor={"#fa020f"}
        xName={"Aceleración"}
        t={arrayT0F}
      />
      <Title text="Fase de Impulso" />
      <Chart
        x={arrayY0Imp}
        xColor={"#fa020f"}
        xName={"Aceleración"}
        t={arrayT0FImp}
      />
      <Title text="Fase de Vuelo" />
      <Chart
        x={arrayY0Vuelo}
        xColor={"#fa020f"}
        xName={"Aceleración"}
        t={arrayT0Vuelo}
      />
      <Title text="Fase de Amortiguación" />
      <Chart
        x={arrayY0Amort}
        xColor={"#fa020f"}
        xName={"Aceleración"}
        t={arrayT0Amort}
      />
    </div>
  );
};

export default Jump;
