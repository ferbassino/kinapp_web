const numbers = require("numbers");

const dropAnalysis = (accZ, accT) => {
  const mode = numbers.statistic.mode(accZ);
  const max = Math.max(...accZ);
  const min = Math.min(...accZ);
  const maxIndex = accZ.findIndex((el) => el === max);

  const zFiltered0 = [];
  const tFiltered0 = [];

  accZ.map((el, index) => {
    if (index < maxIndex) {
      zFiltered0.push(el);
      tFiltered0.push(accT[index]);
    }
  });
  const minIndex = zFiltered0.findIndex((el) => el === min);
  const index1 = zFiltered0.findLastIndex((el, index) => el < mode);

  const zFiltered1 = [];
  const tFiltered1 = [];

  zFiltered0.map((el, index) => {
    if (index <= index1) {
      zFiltered1.push(el);
      tFiltered1.push(tFiltered0[index]);
    }
  });

  const zFiltered = [];
  const tFiltered = [];

  const index0 = zFiltered1.findLastIndex((el, index) => el > mode);

  zFiltered1.map((el, index) => {
    if (index >= index0 && el < 0.7) {
      zFiltered.push(el);
      tFiltered.push(tFiltered0[index]);
    }
  });

  const tCaida = Math.max(...tFiltered) - Math.min(...tFiltered);

  const altura = tCaida * tCaida * 9.81 * 0.5;

  return { zFiltered, tFiltered, tCaida, altura };
};

export default dropAnalysis;
