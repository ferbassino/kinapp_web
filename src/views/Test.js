import React, { useState } from "react";
import Chart from "../components/Chart";
import acelerationProcess from "../auxiliaries/acelerationProcess";

const Test = () => {
  const [csvFile, setCsvFile] = useState();
  //declaramos los estados del intervalo de tiempo
  const [initialTime, setInitialTime] = useState(0);
  const [finalTime, setFinalTime] = useState(0);

  const handlesubmit = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      setCsvFile(reader.result);
    };
  };

  const handleClik = () => {};
  const { acelerationObj } = acelerationProcess(csvFile);

  const handleInitialTime = (e) => {
    setInitialTime(Number(e.target.value));
  };
  const handleFinalTime = (e) => {
    setFinalTime(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialTime, finalTime);
  };

  //buscamos los indices de los intervalos
  const t0 = acelerationObj.time.findIndex((el) => el == initialTime);
  const tf = acelerationObj.time.findIndex((el) => el == finalTime);

  //cortamos la curva
  const arrayY = acelerationObj.yData.slice(t0, tf);
  const arrayt = acelerationObj.time.slice(t0, tf);

  //separamos las curvas en positivas y negativas

  const arrayYPositive = arrayY.filter((el) => el > 0);
  const arrayYNegative = arrayY.filter((el) => el < 0);

  //integramos para obtener la velocidad

  //parte positiva

  //integral para la velocidad positiva
  let velocidad = 0;
  let arrayVelocidad = [];
  let time = [];
  let intervalo = 0.01;

  for (let i = 0; i < arrayYPositive.length - 1; i++) {
    velocidad +=
      ((Number(arrayYPositive[i]) + Number(arrayYPositive[i + 1])) * 0.01) / 2;

    arrayVelocidad.push(velocidad);
    time.push((intervalo += 0.01).toFixed(2));
  }

  //integral para la distancia positiva
  let distanciaPositiva = 0;

  for (let i = 0; i < arrayVelocidad.length - 1; i++) {
    distanciaPositiva +=
      ((Number(arrayVelocidad[i]) + Number(arrayVelocidad[i + 1])) * 0.01) / 2;
  }
  //parte Negativa
  //integral para la velocidad positiva
  let velocidadNegativa = 0;
  let arrayVelocidadNegativa = [];
  let timeNegativo = [];

  for (let i = 0; i < arrayYNegative.length - 1; i++) {
    velocidadNegativa +=
      ((Number(arrayYNegative[i]) + Number(arrayYNegative[i + 1])) * 0.01) / 2;

    arrayVelocidadNegativa.push(velocidadNegativa);
    timeNegativo.push((intervalo += 0.01).toFixed(2));
  }

  //integral para la distancia negativa
  let distanciaNegativa = 0;

  for (let i = 0; i < arrayVelocidadNegativa.length - 1; i++) {
    distanciaNegativa +=
      ((Number(arrayVelocidadNegativa[i]) +
        Number(arrayVelocidadNegativa[i + 1])) *
        0.01) /
      2;
  }
  const distanciaTotal = distanciaPositiva + distanciaNegativa * -1;

  return (
    <div>
      <form onClick={handleClik}>
        <h3>Seleccionar archivo csv</h3>

        <input type={"file"} onChange={handlesubmit} />
      </form>

      <Chart
        // x={arrayVelocidadG}
        y={acelerationObj.yData}
        // z={acPositiva}
        t={acelerationObj.time}
      />
      <form onSubmit={handleSubmit}>
        <input type={"number"} step="0.01" onChange={handleInitialTime} />
        <input type={"number"} step="0.01" onChange={handleFinalTime} />
        <button>enviar</button>
      </form>
      <br />
      <h3>La distancia fue de {distanciaTotal.toFixed(2)} m</h3>
      <br />
      <br />
      <br />
      <br />
      {/* <Chart x={arrayYPositive} y={arrayY} z={arrayYNegative} t={arrayt} /> */}
    </div>
  );
};

export default Test;
