import numbers from "numbers";
import { countIntegral, integral } from "./integral";

const translationAnalysis = (accY, accT, masa, testTime) => {
  const accInterval = testTime / 1000 / accT.length;

  const mode = numbers.statistic.mode(accY);
  const max = Math.max(...accY);
  const min = Math.min(...accY);

  const maxIndex = accY.findIndex((el, index) => el === max);
  const minIndex = accY.findIndex((el, index) => el === min);

  const index0 = accY.findLastIndex(
    (el, index) => el < max && el < mode && index < maxIndex
  );
  const index1 = accY.findIndex(
    (el, index) => el > min && el > mode && index > minIndex
  );

  const arrayATraslacion = [];
  const arrayTTraslacion = [];

  accY.map((el, index) => {
    if (index > index0 && index < index1) {
      arrayATraslacion.push(el * 9.81 - mode * 9.81);
      arrayTTraslacion.push(Number(accT[index].toFixed(2)));
    }
  });

  const arrayVTraslacion = integral(arrayATraslacion, accInterval, accT);

  const { arrayDTraslacion, distancia } = countIntegral(
    arrayVTraslacion,
    accInterval,
    accT
  );

  // fase propulsiva
  const arrayATraslacionProp = [];
  const arrayVTraslacionProp = [];
  const arrayDTraslacionProp = [];
  const arrayTTraslacionProp = [];
  let distanciaProp = 0;

  arrayATraslacion.map((el, index) => {
    if (el > 0) {
      arrayATraslacionProp.push(el);
      arrayVTraslacionProp.push(arrayVTraslacion[index]);
      arrayTTraslacionProp.push(Number(arrayTTraslacion[index].toFixed(2)));
    }
  });

  for (let i = 0; i < arrayVTraslacionProp.length - 1; i++) {
    distanciaProp +=
      ((Number(arrayVTraslacionProp[i]) + Number(arrayVTraslacionProp[i + 1])) *
        accInterval) /
      2;

    arrayDTraslacionProp.push(Number(distanciaProp.toFixed(2)));
  }
  const velMaxProp = Math.max(...arrayVTraslacionProp);
  const velMedProp = numbers.statistic.mean(arrayVTraslacionProp);
  //   dinámica con la fase propulsiva

  // aplicamos newton con la masa y el array de aceleración propulsiva
  const arrayFuerza = [];
  arrayATraslacionProp.map((el) =>
    arrayFuerza.push(parseInt(masa * (el + 9.81)))
  );
  const fuerzaMaxima = Math.max(...arrayFuerza);
  const fuerzaPromedio = parseInt(numbers.statistic.mean(arrayFuerza));
  //   potencia: array de fuerza por el de velicidad
  const arrayPotencia = [];
  arrayFuerza.map((el, index) => {
    arrayPotencia.push(el * arrayVTraslacionProp[index]);
  });
  const potenciaMaxima = parseInt(Math.max(...arrayPotencia));
  const potenciaPromedio = parseInt(numbers.statistic.mean(arrayPotencia));
  const masaAnalysis = masa;

  return {
    masaAnalysis,
    arrayTTraslacion,
    arrayATraslacion,
    arrayVTraslacion,
    arrayDTraslacion,
    distancia,
    arrayTTraslacionProp,
    arrayATraslacionProp,
    arrayVTraslacionProp,
    arrayDTraslacionProp,
    distanciaProp,
    velMedProp,
    arrayFuerza,
    arrayPotencia,
    velMaxProp,
    fuerzaMaxima,
    fuerzaPromedio,
    potenciaMaxima,
    potenciaPromedio,
  };
};

export default translationAnalysis;
