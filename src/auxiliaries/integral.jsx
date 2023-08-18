exports.integral = (arrayATraslacion, accInterval, accT) => {
  const integral = [];
  let count = 0;
  for (let i = 0; i < arrayATraslacion.length - 1; i++) {
    count +=
      ((Number(arrayATraslacion[i]) + Number(arrayATraslacion[i + 1])) *
        (accT[i + 1] - accT[i])) /
      2;

    integral.push(count);
  }

  return integral;
};
exports.countIntegral = (arrayVTraslacion, accInterval, accT) => {
  const arrayVNegativa = [];
  const arrayDTraslacion = [];
  let distancia = 0;
  for (let i = 0; i < arrayVTraslacion.length - 1; i++) {
    if (arrayVTraslacion[i] < 0) {
      arrayVNegativa.push(arrayVTraslacion[i]);
    }
    distancia +=
      ((Number(arrayVTraslacion[i]) + Number(arrayVTraslacion[i + 1])) *
        (accT[i + 1] - accT[i])) /
      2;

    arrayDTraslacion.push(Number(distancia.toFixed(3)));
  }

  return { arrayDTraslacion, distancia };
};
