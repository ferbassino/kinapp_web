// recibimos como parametros los datos crudos del giróscopo, el acelerometro y el magnetometro

import numbers from "numbers";
import integral from "./integral";
import derivada from "./derivada";
import deleteTenMaxMin from "./deleteTenMaxMin";

// funciones que vamos a usar: integral, derivada
//  numbers const example = numbers.statistic.mode(array);

export const rotationProcess = (data = {}) => {
  const {
    accX,
    accY,
    accZ,
    velX,
    velY,
    velZ,
    magX,
    magY,
    magZ,
    accTime,
    testTime,
  } = data;
  //   primero vamos a filtrar todos los arreglos para eliminar los instantes donde no se mueve el dispositivo, vamos a tomar un arreglo especificamente que es el de la velocidad   en x que captura muy bien el reposo

  // -------------Aceleración----------

  // buscamos los angulos de inicio y de final del movimiento con las aceleraciones en y y en  para luego obtener las curvas de aceleracion sin la tangencial ni la centripeta

  // obtenemos los angulos inicial y final, busamos el promedio de los primeros 50 y los ultimos 50 indices de cada aceleración

  const initialArrayAccY = [];
  const initialArrayAccZ = [];
  const finalArrayAccY = [];
  const finalArrayAccZ = [];

  accY.map((el, index) => {
    if (index < 50) {
      initialArrayAccY.push(el);
      initialArrayAccZ.push(accZ[index]);
    }
    if (index > accY.length - 50) {
      finalArrayAccY.push(el);
      finalArrayAccZ.push(accZ[index]);
    }
  });
  const initialAccYmean = numbers.statistic.mean(initialArrayAccY);
  const initialAccZmean = numbers.statistic.mean(initialArrayAccZ);

  const finalAccYmean = numbers.statistic.mean(finalArrayAccY);
  const finalAccZmean = numbers.statistic.mean(finalArrayAccZ);

  const initialAngleAcc = Math.atan2(initialAccZmean, initialAccYmean);
  const finalAngleAcc = Math.atan2(finalAccZmean, finalAccYmean);

  // --------------VELOCIDAD ANGULAR----------

  //no sabemos si la velocidad maxima o minima es negativa o positiva, eso depende de como esté ubicado el dispositivo, vamos a hacer la curva positiva para trabajar mejor

  const vMax1 = Math.max(...velX);
  const vMax2 = Math.min(...velX);

  const velXAbs = [];

  velX.map((el) => {
    if (Math.abs(vMax1) < Math.abs(vMax2)) {
      velXAbs.push(el * -1);
    }
  });

  //   eliminamos los tramos de reposo de velXabs
  const velXF = [];
  const velMax = Math.max(...velXAbs);
  const velMaxAbsIndex = velXAbs.findIndex((el) => el === velMax);
  const last0VelMax = velXAbs.findLastIndex(
    (el, index) => index < velMaxAbsIndex && el < 0
  );
  const first0VelMax = velXAbs.findIndex(
    (el, index) => index > velMaxAbsIndex && el < 0
  );

  // aprovechamos para obtener los array filtrados de aceleracion en y y en z
  const accYF = [];
  const accZF = [];
  velXAbs.map((el, index) => {
    if (index > last0VelMax - 1 && index < first0VelMax + 2) {
      velXF.push(el);
      accYF.push(accY[index]);
      accZF.push(accZ[index]);
    }
  });
  // ----------ahora velXF es la velocidad en x de referencia, a partir de aca calulamos con los indices obtenidos, creamos un array de tiempo para graficar

  const interval = testTime / 1000 / accX.length;
  const filteredTime = [];
  let countIntervalF = 0;
  velXF.map((el) => {
    countIntervalF += interval;
    filteredTime.push(countIntervalF.toFixed(2));
  });
  //   integramos para obtener el array de angulos en redianes

  const arrayXAngleRad = integral(velXF, interval, initialAngleAcc);

  arrayXAngleRad.pop();

  //   derivamos parta obtener la aceleracion angular

  const accAngX = derivada(velXF, interval);

  // seno y coseno del angulo
  const xAngleSin = [];
  const xAngleCos = [];
  arrayXAngleRad.map((el) => {
    xAngleSin.push(Math.sin(el));
    xAngleCos.push(Math.cos(el));
  });
  // obtenemos la aceleración normal y la tangencial, ya tenemos como varia el seno y el coseno del angulo
  const normAcc = [];
  const tanAcc = [];
  arrayXAngleRad.map((el, index) => {
    normAcc.push(accYF[index] - xAngleCos[index]);
    tanAcc.push(accZF[index] - xAngleSin[index]);
  });

  // Radio
  // el radio primero lo vamos a calcular dividiendo la aceleracion normal por el cuadrado de la vel angular

  const normRadio0 = [];
  const tanAcc9 = [];
  const powVelX = [];
  const normAcc9 = [];
  const tanRadio0 = [];

  velXF.map((el, index) => {
    powVelX.push(el * el);
    normAcc9.push(normAcc[index] * 9.81);
  });
  tanAcc.map((el, index) => {
    tanAcc9.push(tanAcc[index] * 9, 81);
  });

  tanAcc.map((el, index) => {
    if (
      index > 10 &&
      index < tanAcc.length - 10 &&
      velXF[index] > 0.05 &&
      accAngX[index] !== 0
    ) {
      tanRadio0.push(Number(((el * 9.81) / accAngX[index]).toFixed(2)));
    }
  });

  // const tanRadio = [];

  const tanRadio = deleteTenMaxMin(tanRadio0);

  velXF.map((el, index) => {
    if (
      powVelX[index] > normAcc9[index] &&
      powVelX[index] > 0 &&
      normAcc9[index] > 0
    ) {
      normRadio0.push(Number((normAcc9[index] / powVelX[index]).toFixed(2)));
    }
  });

  const normRadio = deleteTenMaxMin(normRadio0);

  const normRadioMode = numbers.statistic.mean(normRadio);
  // const tanRadioMean = numbers.statistic.mean(tanRadio);
  const tanRadioMode = numbers.statistic.mean(tanRadio);
  const promRadio = (normRadioMode + tanRadioMode) / 2;

  const modeArrayNorm = [];
  const modeArrayTan = [];
  normRadio.map((el) => {
    if (el === normRadioMode) {
      modeArrayNorm.push(el);
    }
  });
  tanRadio.map((el) => {
    if (el == tanRadioMode) {
      modeArrayTan.push(el);
    }
  });

  // obtnemos el momento de inercia

  const momentoInercia = 0.722;
  const torqueFE = [];
  const fuerzaElastica = [];
  const potencia = [];
  // calculo del torque de fuerza =  momento de inercia por aceleracion angular mas el resto de los torques
  accAngX.map((el, index) => {
    torqueFE.push(
      momentoInercia * accAngX[index] + Math.sin(arrayXAngleRad[index]) * 24.39
    );
    // fuerzaElastica.push(
    //   (momentoInercia * accAngX[index] +
    //     Math.sin(arrayXAngleRad[index]) * 16.51) /
    //     (0.13 * Math.sin(arrayXAngleRad[index]))
    // );

    // calculamos la potencia multiplicando el torque muscular por la velocidad angular
    potencia.push(
      (momentoInercia * accAngX[index] +
        Math.sin(arrayXAngleRad[index]) * 24.39) *
        velXF[index]
    );
  });
  // angulo en grados
  const arrayXAngleGrad = [];
  arrayXAngleRad.map((el, index) => {
    arrayXAngleGrad.push((arrayXAngleRad[index] * 180) / Math.PI);
  });

  return {
    arrayXAngleRad,
    velXAbs,
    velXF,
    filteredTime,
    accAngX,
    accYF,
    accZF,
    normAcc,
    tanAcc,
    xAngleSin,
    xAngleCos,
    normRadio,
    powVelX,
    normAcc9,
    tanRadio,
    tanAcc9,
    torqueFE,
    potencia,
    arrayXAngleGrad,
    // fuerzaElastica,
  };
};
