//importamos la integral
import arrayIntegralAngulo from "./arrayIntegralAngulo";
import rotationalIntegral from "./rotationalIntegral";
//convertimos el files en strings de 5 elementos primero separado por los saltos de linea, luego eliminamos la primera linea de las referencias, finalmente separamos por comas para que cada elemento de cada row se separe en tiempo, vel x, vel y, velz.
const rotationProcess = (file = "") => {
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

  return { angularVelocityObj, angles, arraysGradAngles };
};

export default rotationProcess;
