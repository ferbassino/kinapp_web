export const dataReactionProcess = (accArray = [], testTime = 0) => {
  const accX = [];
  const accY = [];
  const accZ = [];
  const accT = [];

  let accCount = 0;
  const accInterval = testTime / 1000 / accArray.length;
  accArray.map((el, index) => {
    accX.push(Number(el.x.toFixed(3)));
    accY.push(Number(el.y.toFixed(3)));
    accZ.push(Number(el.z.toFixed(3)));
    accCount += accInterval;
    accT.push(Number(accCount.toFixed(3)));
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
