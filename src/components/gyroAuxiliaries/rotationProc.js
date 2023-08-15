//importamos la integral
import arrayIntegralAngulo from "./arrayIntegralAngulo";
import rotationalIntegral from "./rotationalIntegral";
//convertimos el files en strings de 5 elementos primero separado por los saltos de linea, luego eliminamos la primera linea de las referencias, finalmente separamos por comas para que cada elemento de cada row se separe en tiempo, vel x, vel y, velz.

//intervalo en rotacion

const interval = 1 / 214;
const rotationProc = (file = "") => {
  let arrayFile = file
    .split("\n")
    .splice(1)
    .map((line) => line.split(","));
  arrayFile.pop();
  //generamos los arrays de cada variable y los guardamos en un objeto
  const angularVelocityObj = {
    time: arrayFile.map((el) => Number(el[0]).toFixed(2)),
    xData: arrayFile.map((el) => Number(el[1])),
    yData: arrayFile.map((el) => Number(el[2])),
    zData: arrayFile.map((el) => Number(el[3])),
  };

  //derivación numerica para obtener la aceleración angular, que seria el valor superior menos el inferior dividido el intervalo que seria 1/214, lo vamos a hacer con un for porque tenemos que restar el ultimo valor al array para que no de error. los valores se repiten cada un intervalo entonces restamos dos posiciones posteriores

  const angularAcelerationObj = {
    xData: [],
    yData: [],
    zData: [],
  };
  let xAngularAceleration = 0;
  let yAngularAceleration = 0;
  let zAngularAceleration = 0;

  for (let i = 0; i < arrayFile.length - 2; i++) {
    xAngularAceleration =
      (angularVelocityObj.xData[i + 2] - angularVelocityObj.xData[i]) /
      interval;
    yAngularAceleration =
      (angularVelocityObj.yData[i + 2] - angularVelocityObj.yData[i]) /
      interval;
    zAngularAceleration =
      (angularVelocityObj.zData[i + 2] - angularVelocityObj.zData[i]) /
      interval;

    angularAcelerationObj.xData.push(xAngularAceleration);
    angularAcelerationObj.yData.push(yAngularAceleration);
    angularAcelerationObj.zData.push(zAngularAceleration);
  }
  //array con la velocidad angular en grados sobre segundo
  const angularVelicityGrad = {
    xData: angularVelocityObj.xData.map((el) => Number((el * 180) / Math.PI)),
    yData: angularVelocityObj.yData.map((el) => Number((el * 180) / Math.PI)),
    zData: angularVelocityObj.zData.map((el) => Number((el * 180) / Math.PI)),
  };

  //enviamos los arrays y el intervalo como parametro para integrar loa arrays,  obtener el ángulo en radianes y en grados. la funcion retorna los ángulos en grados de cada eje, los cuales se guardan en un objeto angles
  const angles = rotationalIntegral(
    1 / 214,
    angularVelocityObj.xData,
    angularVelocityObj.yData,
    angularVelocityObj.zData,
    angularVelocityObj.time
  );

  //llamamos a la funcion arrayIntegralAngulo para obtener los arrays de los angulos en grados. la funcion recibe dos parametros, el intervalo y  los arrays en radianes, que en este caso seria angularVelocityObj, lo guardamos en la variable arraysGradAngles

  const arraysGradAngles = arrayIntegralAngulo(
    1 / 214,
    angularVelocityObj.xData,
    angularVelocityObj.yData,
    angularVelocityObj.zData,
    angularVelocityObj.time
  );
  //retornamos los arrays en angularVelocity,  los angulos de cada eje y el array de grados

  return {
    angularVelocityObj,
    angles,
    arraysGradAngles,
    angularVelicityGrad,
    angularAcelerationObj,
  };
};

export default rotationProc;
