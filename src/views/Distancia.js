import React, { useState } from "react";
import Chart from "../components/Chart";
import acelerationProcess from "../auxiliaries/acelerationProcess";

const Distancia = () => {
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(initialTime, finalTime);
  // };

  //buscamos los indices de los intervalos
  const t0 = acelerationObj.time.findIndex((el) => el == initialTime);

  const tf = acelerationObj.time.findIndex((el) => el == finalTime);
  const lastIndex = acelerationObj.yData.length - 1;

  //cortamos la curva
  const arrayY = acelerationObj.yData.slice(t0, tf);

  //cramos por fuera de la evaluacion, para setear en cero
  const arrayPre = acelerationObj.yData.slice(0, t0);
  const arrayPos = acelerationObj.yData.slice(tf, lastIndex);
  const arrayExterior = arrayPre.concat(arrayPos);

  //sacamos el promedio del array exterior
  let promedio = 0;
  let contadorPromedio = 0;
  for (let i = 0; i < arrayExterior.length; i++) {
    contadorPromedio += arrayExterior[i];
  }
  promedio = contadorPromedio / arrayExterior.length;

  // subimos o bajamos la curva arrayY y la guardamos en arrayYZero

  let arrayYZero = [];
  if (promedio < 0) {
    arrayYZero = arrayY.map((el) => el - promedio);
  } else {
    arrayYZero = arrayY.map((el) => el + promedio);
  }

  // integramos arrayYZero para obtener la velocidad

  let velocidadZero = 0;
  let arrayVelocidadZero = [];
  let timeZero = [];
  let intervaloZero = 0.01;

  for (let i = 0; i < arrayYZero.length - 1; i++) {
    velocidadZero +=
      ((Number(arrayYZero[i]) + Number(arrayYZero[i + 1])) * 0.01) / 2;

    arrayVelocidadZero.push(velocidadZero);
    timeZero.push((intervaloZero += 0.01).toFixed(2));
  }

  // integral para la distanciaZero
  let distanciaZero = 0;

  for (let i = 0; i < arrayVelocidadZero.length - 1; i++) {
    distanciaZero +=
      ((Number(arrayVelocidadZero[i]) + Number(arrayVelocidadZero[i + 1])) *
        0.01) /
      2;
  }

  return (
    <div className="container">
      <h3 className="m-4">Análisis de los movimientos de traslación</h3>
      <h4 className="m-4">
        Determinación de la distancia a traves de la aceleración
      </h4>
      <h4 className="m-4">1. Cargar el archivo</h4>

      <form onClick={handleClik} className="form-control">
        <input type={"file"} onChange={handlesubmit} />
      </form>

      <Chart
        y={arrayVelocidadZero}
        // x={arrayVelocidadZero}
        x={arrayYZero}
        // z={arrayVelocidadZero}
        z={acelerationObj.yData}
        t={acelerationObj.time}
      />
      <h4 className="m-4">2. Ingresamos el tiempo inicial y el tiempo final</h4>
      <form
      // onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col form-control m-1">
            <p>Tiempo inicial</p>{" "}
            <input type={"number"} step="0.01" onChange={handleInitialTime} />
          </div>

          <div className="col form-control m-1">
            <p>Tiempo final</p>{" "}
            <input type={"number"} step="0.01" onChange={handleFinalTime} />
          </div>
          <button className="btn btn-light">enviar</button>
        </div>
      </form>
      <br />
      <div className="form-control mb-5">
        <h3>La distancia fue de {distanciaZero.toFixed(2)} m</h3>
      </div>
    </div>
  );
};

export default Distancia;
