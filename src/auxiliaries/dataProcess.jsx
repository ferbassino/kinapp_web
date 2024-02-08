export const dataProcess = (accArray = [], testTime = 0) => {
  const accX = [];
  const accY = [];
  const accZ = [];
  const accT = [];

  console.log("proceso de data");
  console.log("accArray.lengt", accArray.length);
  console.log("accX.lengt en data process", accX.length);

  let accCount = 0;
  const accInterval = testTime / 1000 / accArray.length;
  accArray.map((el, index) => {
    if (index > 15) {
      accX.push(Number(el.x.toFixed(3)));
      accY.push(Number(el.y.toFixed(3)));
      accZ.push(Number(el.z.toFixed(3)));
      accCount += accInterval;
      accT.push(Number(accCount.toFixed(3)));
    }
  });

  return {
    accX,
    accY,
    accZ,
    testTime,
    accT,
    accInterval,
  };
};
