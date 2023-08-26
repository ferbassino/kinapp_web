import React, { useState } from "react";
import translationAnalysis from "../auxiliaries/translationAnalysis";
import Chart from "./Chart";
import Header from "./Header";
import Title from "./Title";
import SubTitle from "./SubTitle";
import SubTitle2 from "./Subtitle2";
import { useEffect } from "react";
import repsAnalisis from "../auxiliaries/repsAnalisis";

const TranslationView = ({ accY = [], accT = [], testTime = 0, masa = 0 }) => {
  const [dinamicaVisible, setDinamicaVisible] = useState(false);
  const { arrayReps } = repsAnalisis(accY, accT, masa, testTime);

  useEffect(() => {
    if (masa !== 0) {
      setDinamicaVisible(true);
    }
  }, []);

  const {
    masaAnalysis,
    arrayTTraslacion,
    arrayATraslacion,
    arrayVTraslacion,
    arrayDTraslacion,
    distancia,
    arrayTTraslacionProp,
    arrayATraslacionProp,
    arrayVTraslacionProp,
    arrayDTraslacionProp,
    distanciaProp,
    velMedProp,
    arrayFuerza,
    arrayPotencia,
    velMaxProp,
    fuerzaMaxima,
    fuerzaPromedio,
    potenciaMaxima,
    potenciaPromedio,
  } = translationAnalysis(accY, accT, masa, testTime);

  return (
    <div>
      <br />
      <br />

      <Header title={"Análisis cinemático"} />
      <Title text="Aceleración del dispositivo en 'y'" />
      <SubTitle text="Distancia [m]" value={distancia.toFixed(2)} />
      <Chart
        x={arrayATraslacion}
        xColor={"#fa020f"}
        xName={"Aceleración ´y´"}
        t={arrayTTraslacion}
      />

      <Title text="Aceleración, velocidad y posición" />
      <Chart
        x={arrayATraslacion}
        xColor={"#fa020f"}
        xName={"Aceleración"}
        y={arrayVTraslacion}
        yColor={"#0307ff"}
        yName={"Velocidad"}
        z={arrayDTraslacion}
        zColor={"#00ba09"}
        zName={"Posición"}
        t={arrayTTraslacion}
      />
      <Title text="Fase propulsiva" />

      <Chart
        x={arrayATraslacionProp}
        xColor={"#fa020f"}
        xName={"Aceleración"}
        y={arrayVTraslacionProp}
        yColor={"#0307ff"}
        yName={"Velocidad"}
        z={arrayDTraslacionProp}
        zColor={"#00ba09"}
        zName={"Posición"}
        t={arrayTTraslacionProp}
      />
      <SubTitle text="Velocidad media [m/s]" value={velMedProp.toFixed(2)} />
      <SubTitle text="Velocidad Máxima [m/s]" value={velMaxProp.toFixed(2)} />
      <SubTitle text="Distancia [m]" value={distanciaProp.toFixed(2)} />
      <br />
      <br />
      <Title text="Traslación múltiple" />
      <Chart x={arrayReps} xColor={"#fa020f"} xName={"reps ´y´"} t={accT} />
      {dinamicaVisible ? (
        <>
          <Header title="Dinámica" />
          <SubTitle2 text="Análisis dinámico de la fase propulsiva" />
          <Chart
            x={arrayVTraslacionProp}
            xColor={"#fa020f"}
            xName={"Velocidad"}
            y={arrayFuerza}
            yColor={"#0307ff"}
            yName={"Fuerza"}
            z={arrayPotencia}
            zColor={"#00ba09"}
            zName={"Potencia"}
            t={arrayTTraslacionProp}
          />
          <SubTitle text="Fuerza media [N]" value={parseInt(fuerzaPromedio)} />
          <SubTitle text="Fuerza máxima [N]" value={parseInt(fuerzaMaxima)} />
          <SubTitle
            text="Potencia media [W]"
            value={parseInt(potenciaPromedio)}
          />
          <SubTitle
            text="Potencia Máxima [W]"
            value={parseInt(potenciaMaxima)}
          />
        </>
      ) : null}
    </div>
  );
};

export default TranslationView;
