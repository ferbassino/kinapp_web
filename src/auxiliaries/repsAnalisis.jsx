import numbers from "numbers";
import { countIntegral, integral } from "./integral";

const repsAnalisis = (accY, accT, masa, testTime) => {
  const accInterval = testTime / 1000 / accT.length;
  const accY2 = [];
  accY.map((el) => accY2.push((el - 1) * 9.81));

  const arrayReps = integral(accY2, accInterval, accT);

  return { arrayReps };
};

export default repsAnalisis;
