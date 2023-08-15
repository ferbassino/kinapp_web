import numbers from "numbers";

export const integral = (data = {}) => {
  const { velX, velY, velZ, accY, accZ } = data;
  const interval = data.testTime / 1000 / data.velX.length;
  const halfInterval = interval / 2;

  // buscamos los valores iniciales de los arreglos de aceleracion en y y en z para sacar el angulo incial, ya que tenemos la calibracion de un segundo buscamos los 50 primeros valores y los pusheamos a los arreglos

  const accYInitialValues = [];
  const accZInitialValues = [];

  accY.map((el, index) => {
    if (index < 50) {
      accYInitialValues.push(el);
      accZInitialValues.push(accZ[index]);
    }
  });
  // sacamos los promedios
  const accYInitialValuesMean = numbers.statistic.mean(accYInitialValues);
  const accZInitialValuesMean = numbers.statistic.mean(accZInitialValues);

  // sacamos los angulos

  const YZInitialAngle = parseInt(
    (Math.atan2(accZInitialValuesMean, accYInitialValuesMean) * 180) / Math.PI
  );
  // Lo mismo para el angulo final, solo que obteniendo los ultimos 50 valores
  const accYFinalValues = [];
  const accZFinalValues = [];

  accY.map((el, index) => {
    if (index > accY.length - 50) {
      accYFinalValues.push(el);
      accZFinalValues.push(accZ[index]);
    }
  });
  const accYFinalValuesMean = numbers.statistic.mean(accYFinalValues);
  const accZFinalValuesMean = numbers.statistic.mean(accZFinalValues);

  const YZFinalAngle = parseInt(
    (Math.atan2(accZFinalValuesMean, accYFinalValuesMean) * 180) / Math.PI
  );

  // final de angulo por la aceleracion

  const grad = 180 / Math.PI;
  let countAngleX = 0;
  let countVelXRad = (-YZInitialAngle * Math.PI) / 180;
  let countVelY = 0;
  let countVelZ = 0;
  const arrayXAngle = [];
  const arrayXAngleRad = [];
  const arrayYAngle = [];
  const arrayZAngle = [];
  const centYAcc = [];
  const filteredCentYAcc = [];
  const tanYAcc = [];
  const cosInX = [];
  const sinInX = [];
  const accGY = [];
  const accGZ = [];
  const arrRadio = [];
  const pow = [];
  const filterArrayVelX = [];
  const arrY1 = [];
  const anguloZY = [];
  const arrayAccTanRadio = [];
  const filteredArrayAccTan = [];

  // -----------------------------

  const maxAccY = Math.max(...accY);

  const maxAccYIndex = accY.findIndex((el) => el === maxAccY);
  accY.map((el, index) => {
    if (index < maxAccYIndex) {
      arrY1.push(el);
    }
  });
  const arrY1Mode = numbers.statistic.mode(arrY1);

  // -----------------------------

  const arrayVelXDerivadaRaw = [];
  const arrayVelXDerivada = [];

  const countVelZDer = 0;
  for (let i = 0; i < data.velX.length - 1; i++) {
    // integral
    countAngleX += (velX[i] + velX[i + 1]) * halfInterval * grad;
    countVelXRad += (velX[i] + velX[i + 1]) * halfInterval;

    countVelY += (velY[i] + velY[i + 1]) * halfInterval * grad;
    countVelZ += (velZ[i] + velZ[i + 1]) * halfInterval * grad;
    // derivada

    arrayVelXDerivadaRaw.push((velX[i + 1] - velX[i]) / interval);
    console.log(velX[i + 1], velX[i], interval);
    console.log(arrayVelXDerivadaRaw);
    console.log("------------------");
    cosInX.push(Math.cos(countVelXRad));
    sinInX.push(Math.sin(countVelXRad));

    accGY.push(cosInX[i] * 1);
    accGZ.push(sinInX[i] * -1);
    // ---------------

    // ---------------
    centYAcc.push(accY[i] - accGY[i]);
    tanYAcc.push(accZ[i] - accGZ[i]);

    arrayXAngle.push(countAngleX);
    arrayXAngleRad.push(countVelXRad);
    arrayYAngle.push(countVelY);
    arrayZAngle.push(countVelZ);
  }
  const maxAngleXGrad = Math.min(...arrayXAngle);

  // for (let i = 0; i < accY.length - 2; i++) {
  //   accGY.push(accY[i] - centYAcc[i]);
  //   accGZ.push(accZ[i] + tanYAcc[i]);
  // }

  for (let i = 0; i < velX.length - 1; i++) {
    if (velX[i] < -0.4) {
      filterArrayVelX.push(velX[i]);
      pow.push(velX[i] * velX[i]);
      filteredCentYAcc.push(centYAcc[i] * 9.81);
      filteredArrayAccTan.push(tanYAcc[i]);
      arrayVelXDerivada.push(arrayVelXDerivadaRaw[i]);
      // arrayAccTanRadio.push(tanYAcc[i] / arrayVelXDerivadaRaw[i]);
    }
  }
  for (let i = 0; i < arrayVelXDerivada.length - 1; i++) {
    arrayAccTanRadio.push(filteredArrayAccTan[i] / arrayVelXDerivada[i]);
  }
  // console.log("velocidad angular en x", velX);
  // console.log("aceleracion angular", arrayVelXDerivada);
  // console.log("aceleracion tangencial ", tanYAcc);

  for (let i = 0; i < filterArrayVelX.length - 1; i++) {
    if (pow[i] > filteredCentYAcc[i] && filteredCentYAcc[i] > 0) {
      arrRadio.push(Number((filteredCentYAcc[i] / pow[i]).toFixed(2)));
    }
  }
  //
  const powMean = numbers.statistic.mean(pow);
  const centAccYMean = numbers.statistic.mean(filteredCentYAcc);
  const xRadio = numbers.statistic.mean(arrRadio);
  const xRadioMode = numbers.statistic.mode(arrRadio);

  return {
    arrayXAngle,
    arrayXAngleRad,
    arrayYAngle,
    arrayZAngle,
    centYAcc,
    tanYAcc,
    accGY,
    accGZ,
    cosInX,
    sinInX,
    xRadio,
    arrRadio,
    pow,
    interval,
    filterArrayVelX,
    filteredCentYAcc,
    arrY1,
    maxAngleXGrad,
    arrayVelXDerivada,
    arrayAccTanRadio,
    filteredArrayAccTan,
  };
};
