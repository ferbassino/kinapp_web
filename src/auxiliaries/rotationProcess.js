import rotationalIntegral from "./rotationalIntegral";

const rotationProcess = (archivoCsv) => {
  let arrayFile = archivoCsv
    .split("\n")
    .splice(1)
    .map((line) => line.split(","));

  const angularVelocityObj = {
    time: arrayFile.map((el) => Number(el[0]).toFixed(2)),
    xData: arrayFile.map((el) => Number(el[1])),
    yData: arrayFile.map((el) => Number(el[2])),
    zData: arrayFile.map((el) => Number(el[3])),
  };

  const angles = rotationalIntegral(
    1 / 214,
    angularVelocityObj.xData,
    angularVelocityObj.yData,
    angularVelocityObj.zData
  );

  return { angularVelocityObj, angles };
};

export default rotationProcess;
