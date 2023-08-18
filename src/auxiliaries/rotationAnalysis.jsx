exports.rotationAnalysis = (accY, accZ, accT) => {
  const arrayZYAngle = [];

  accY.map((el, index) => {
    arrayZYAngle.push((Math.atan2(accZ[index], accY[index]) * 180) / Math.PI);
  });
  const maxAngleZY = Math.max(...arrayZYAngle);
  const minAngleZY = Math.min(...arrayZYAngle);
  const zYAngle = maxAngleZY - minAngleZY;

  return { arrayZYAngle, zYAngle };
};
