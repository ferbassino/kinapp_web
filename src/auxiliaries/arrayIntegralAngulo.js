//integramos para obtener los arrays de los grados para graficar grados en función del tiempo, arrayIntegralAngulo recibe el intervalo y los arrays de velocidad

const arrayIntegralAngulo = (interval, xData, yData, zData, time) => {
  let xArrayInterval = 0;
  let yArrayInterval = 0;
  let zArrayInterval = 0;

  let xArrayAngle = [];
  let yArrayAngle = [];
  let zArrayAngle = [];

  for (let i = 0; i < xData.length - 1; i++) {
    xArrayInterval +=
      ((((Number(xData[i]) + Number(xData[i + 1])) * interval) / 2) * 180) /
      Math.PI;
    xArrayAngle.push(xArrayInterval);

    yArrayInterval +=
      ((((Number(yData[i]) + Number(yData[i + 1])) * interval) / 2) * 180) /
      Math.PI;
    yArrayAngle.push(yArrayInterval);

    zArrayInterval +=
      ((((Number(zData[i]) + Number(zData[i + 1])) * interval) / 2) * 180) /
      Math.PI;
    zArrayAngle.push(zArrayInterval);
  }

  return { xArrayAngle, yArrayAngle, zArrayAngle, time };
};

export default arrayIntegralAngulo;
