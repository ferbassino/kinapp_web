import numbers from "numbers";

export default function jumpProcess(accY, testTime, masa, accT) {
  const evT = testTime / 1000;
  const interv = evT / accY.length;

  const modo = numbers.statistic.mode(accY);

  const arrayY0 = accY.map((el, index) => el - modo);

  const index2 = accY.findIndex(
    (el, index) =>
      el > modo &&
      el < accY[index + 1] &&
      el < accY[index + 2] &&
      el < accY[index + 3] &&
      el < accY[index + 4] &&
      el < accY[index + 5] &&
      el < accY[index + 6] &&
      el < accY[index + 7] &&
      el < accY[index + 8] &&
      el < accY[index + 9] &&
      el < accY[index + 10] &&
      el < accY[index + 11] &&
      el < accY[index + 12] &&
      el < accY[index + 13] &&
      el < accY[index + 14] &&
      el < accY[index + 15] &&
      el < accY[index + 16]
  );

  const arrayY1 = [];
  accY.map((el, index) => {
    if (index < index2) {
      arrayY1.push(el);
    }
  });

  const modo2 = numbers.statistic.mode(arrayY1);

  const index1 = arrayY1.findLastIndex(
    (el, index) => el > modo2 && index < index2
  );

  // -----------FASE EXCENTRICA array2 (index 1-2)

  const arrayY2 = [];

  arrayY1.map((el, index) => {
    if (index > index1) arrayY2.push(el);
  });

  const index3 = accY.findIndex((el, index) => el < modo && index > index2);

  // -----------FASE DE IMPULSO arrayY3 (index 2-3)

  const arrayY3 = [];

  accY.map((el, index) => {
    if (index > index2 && index < index3) {
      arrayY3.push(el);
    }
  });

  // ------------FASE DE VUELO ArrayY4 (index 3-4)

  const index4 = accY.findIndex((el, index) => el > modo && index > index3);

  const arrayY4 = [];
  accY.map((el, index) => {
    if (index > index3 && index < index4 && el < 5) {
      arrayY4.push(el);
    }
  });

  // Análisis cinemático de la fase de vuelo

  const tV = arrayY4.length * interv;

  const alturaVuelo = (1 / 8) * 9.81 * Math.pow(tV, 2);

  const velD = Math.sqrt(2 * 9.81 * alturaVuelo);

  // ----------FASE DE IMPACTO arrayY5 (index 4-5)

  const index5 = accY.findIndex((el, index) => el < modo && index > index4);

  const arrayY5 = [];

  accY.map((el, index) => {
    if (index > index4 && index < index5) {
      arrayY5.push(el);
    }
  });

  const index6 = accY.findIndex((el, index) => el > modo && index > index5);

  const arrayY6 = [];

  accY.map((el, index) => {
    if (index > index5 && index < index6) {
      arrayY6.push(el);
    }
  });

  const arrayY0F = [];
  const arrayT0F = [];
  const arrayY0Imp = [];
  const arrayT0FImp = [];
  const arrayY0Vuelo = [];
  const arrayT0Vuelo = [];
  const arrayY0Amort = [];
  const arrayT0Amort = [];

  arrayY0.forEach((el, index) => {
    if (index > index1 && index < index6) {
      arrayY0F.push(Number(el.toFixed(2)));
      arrayT0F.push(Number(accT[index].toFixed(2)));
    }
    if (index > index1 && index < index3) {
      arrayY0Imp.push(Number(el.toFixed(2)));
      arrayT0FImp.push(Number(accT[index].toFixed(2)));
    }
    if (index > index3 && index < index4) {
      arrayY0Vuelo.push(Number(el.toFixed(2)));
      arrayT0Vuelo.push(Number(accT[index].toFixed(2)));
    }
    if (index > index4 && index < index6) {
      arrayY0Amort.push(Number(el.toFixed(2)));
      arrayT0Amort.push(Number(accT[index].toFixed(2)));
    }
  });

  return {
    arrayY0,
    arrayY0F,
    arrayT0F,
    arrayY0Imp,
    arrayT0FImp,
    arrayY0Vuelo,
    arrayT0Vuelo,
    arrayY0Amort,
    arrayT0Amort,
    tV,
    alturaVuelo,
    velD,
  };
}
