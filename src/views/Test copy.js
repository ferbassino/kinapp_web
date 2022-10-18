import React, { useState } from "react";
import Chart from "../components/Chart";
import acelerationProcess from "../auxiliaries/acelerationProcess";

const Test = () => {
  const [csvFile, setCsvFile] = useState();

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

  //primer filtro
  //eliminamos los 30 primeros datos porque cuando inicia el dispositivo hace ruido
  const arrayDeleteInit = acelerationObj.yData.slice(20);
  //lo damos vuelta y cortamos los 30 iniciales, que eran los finales en realidad
  const arrayReverse = arrayDeleteInit.reverse();
  const arrayDeleteFinish = arrayReverse.slice(20);
  //guardamos en array0 el array ya filtrado con los extremos cortados
  const array0 = arrayDeleteFinish.reverse();
  //buscamos el primer indice mayor a 0.5 m/s2
  const firstIndex = array0.findIndex((el) => el > 0.5);
  //filtramos todo lo que esta antes de ese indice
  const array1 = array0.filter((el, index) => index > firstIndex);
  //lo revertimos y hacemos lo mismo con la parte negativa
  const array2 = array1.reverse();
  const lastIndex = array2.findIndex((el) => el < -0.5);
  const array3 = array2.filter((el, index) => index > lastIndex);
  //separamos las dos curvas
  const arrayPositive = array3.filter((el) => el > 0);
  const arrayNegative = array3.filter((el) => el < 0);
  //integrales

  //integral para la velocidad positiva
  let velocidad = 0;
  let arrayVelocidad = [];
  let time = [];
  let intervalo = 0.01;

  for (let i = 0; i < arrayPositive.length - 1; i++) {
    velocidad +=
      ((Number(arrayPositive[i]) + Number(arrayPositive[i + 1])) * 0.01) / 2;

    arrayVelocidad.push(velocidad);
    time.push((intervalo += 0.01).toFixed(2));
  }

  //integral para la distancia positiva
  let distanciaPositiva = 0;

  for (let i = 0; i < arrayVelocidad.length - 1; i++) {
    distanciaPositiva +=
      ((Number(arrayVelocidad[i]) + Number(arrayVelocidad[i + 1])) * 0.01) / 2;
  }

  // calculos negativos
  let velocidadNegativa = 0;
  let arrayVelocidadNegativa = [];
  for (let i = 0; i < arrayNegative.length - 1; i++) {
    velocidadNegativa +=
      ((Number(arrayNegative[i]) + Number(arrayNegative[i + 1])) * 0.01) / 2;

    arrayVelocidadNegativa.push(velocidadNegativa);
  }

  // distancia parte negativa
  let distanciaNegativa = 0;

  for (let i = 0; i < arrayVelocidadNegativa.length - 1; i++) {
    distanciaNegativa +=
      ((Number(arrayVelocidadNegativa[i]) +
        Number(arrayVelocidadNegativa[i + 1])) *
        0.01) /
      2;
  }

  const distanciaTotal = distanciaPositiva + distanciaNegativa * -1;
  console.log("distancia total", distanciaTotal.toFixed(2), "metros");

  //para graficar
  const arrayPositivoFinal = arrayPositive.reverse();
  const arrayNegativoFinal = arrayNegative.reverse();
  const arrayTotal = arrayPositivoFinal.concat(arrayNegativoFinal);
  let timeCounter = 0;
  const arrayTimeTotal = [];
  //generamos un array de tiempo para esta curva
  for (let index = 0; index < arrayTotal.length; index++) {
    timeCounter += 0.01;
    arrayTimeTotal.push(timeCounter.toFixed(2));
  }

  return (
    <div>
      <form onClick={handleClik}>
        <h3>Seleccionar archivo csv</h3>

        <input type={"file"} onChange={handlesubmit} />
      </form>
      {/* <h3>el desplazamiento fue de {distanciaTotal.toFixed(2)} metros</h3> */}
      {/* <Chart
        // x={arrayPositive}
        y={arrayTotal}
        // z={arrayNegative}
        t={arrayTimeTotal}
      /> */}
      <Chart
        // x={arrayVelocidadG}
        y={array0}
        // z={acPositiva}
        t={acelerationObj.time}
      />
    </div>
  );
};

export default Test;
