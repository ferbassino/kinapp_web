//la funcion recibe los intervalos y los arrays de cada eje

const rotationalIntegral = (interval, xData, yData, zData) => {
  let xRadAngle = 0;
  let yRadAngle = 0;
  let zRadAngle = 0;

  //INTEGRAL NUMERICA: por cada dato de velocidad angular, hacemos dicho número mas el siguiente, y esa suma la multiplicamos por el intervalo, y lo dividimos por dos. estas dos operaciones se pueden hacer al final como factor comun. cada intervalos se suma y se gurada en la variable correspondiente (xRadAngle), que seria el acumulador respectivo
  for (let i = 0; i < xData.length - 10; i++) {
    xRadAngle += ((Number(xData[i]) + Number(xData[i + 1])) * interval) / 2;
    yRadAngle += ((Number(yData[i]) + Number(yData[i + 1])) * interval) / 2;
    zRadAngle += ((Number(zData[i]) + Number(zData[i + 1])) * interval) / 2;
  }
  //como el valor viene en radianes, para mejor interpretacion lo pasamos a grados (*180/PI)
  const xGradAngle = ((xRadAngle * 180) / Math.PI).toFixed(2);
  const yGradAngle = ((yRadAngle * 180) / Math.PI).toFixed(2);
  const zGradAngle = ((zRadAngle * 180) / Math.PI).toFixed(2);

  //retornamos los angulos en grados
  return { xGradAngle, yGradAngle, zGradAngle };
};
export default rotationalIntegral;
