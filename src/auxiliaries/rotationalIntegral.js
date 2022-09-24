const rotationalIntegral = (interval, xData, yData, zData) => {
  let xRadAngle = 0;
  let yRadAngle = 0;
  let zRadAngle = 0;

  for (let i = 0; i < xData.length - 10; i++) {
    xRadAngle += ((Number(xData[i]) + Number(xData[i + 1])) * interval) / 2;
    yRadAngle += ((Number(yData[i]) + Number(yData[i + 1])) * interval) / 2;
    zRadAngle += ((Number(zData[i]) + Number(zData[i + 1])) * interval) / 2;
  }

  const xGradAngle = ((xRadAngle * 180) / Math.PI).toFixed(2);
  const yGradAngle = ((yRadAngle * 180) / Math.PI).toFixed(2);
  const zGradAngle = ((zRadAngle * 180) / Math.PI).toFixed(2);

  return { xGradAngle, yGradAngle, zGradAngle };
};
export default rotationalIntegral;
