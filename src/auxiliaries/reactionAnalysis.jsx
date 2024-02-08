import numbers from "numbers";

const reactionAnalysis = (accX = [], accY = [], accZ = [], testTime = 0) => {
  const testTimeSecond = testTime / 1000;
  const interval = testTimeSecond / accX.length;

  console.log("interval", interval);
  console.log("testtimeinput", testTime);
  console.log("accX.lengt", accX.length);

  const accXToFixed3 = [];

  accX.map((el, index) => {
    accXToFixed3.push(Number(el.toFixed(3)));
  });

  const accXToFixed3Mode = numbers.statistic.mode(accXToFixed3);

  const accXSet0 = [];

  accXToFixed3.map((el, index) => {
    accXSet0.push(el - accXToFixed3Mode);
  });

  const minX = Math.min(...accX);
  const maxX = Math.max(...accX);

  const minXIndex = accX.findIndex((el, index) => el === minX);
  const maxXIndex = accX.findIndex((el, index) => el === maxX);

  let side;
  if (minXIndex > maxXIndex) {
    side = "left";
  } else {
    side = "right";
  }

  if (side === "right") {
    const arrayXCeroMin = [];
    const arrayXCeroMinTime = [];
    let arrayXCeroMinTimCount = 0;
    accX.map((el, index) => {
      if (index < minXIndex) {
        arrayXCeroMin.push(Number(el.toFixed(3)));
        arrayXCeroMinTime.push(
          Number((arrayXCeroMinTimCount += interval).toFixed(2))
        );
      }
    });
    const mode = numbers.statistic.mode(arrayXCeroMin);

    const reactionTimeArray = [];

    arrayXCeroMin.map((el) => {
      if (el > mode - 0.03 && el < mode + 0.03) {
        reactionTimeArray.push(el);
      }
    });
    const reactionTime = reactionTimeArray.length * interval;

    return {
      arrayXCeroMin,
      reactionTimeArray,
      reactionTime,
      side,
      arrayXCeroMinTime,
    };
  } else {
    const arrayXCeroMin = [];
    const arrayXCeroMinTime = [];
    let arrayXCeroMinTimCount = 0;
    accX.map((el, index) => {
      if (index < maxXIndex) {
        arrayXCeroMin.push(Number(el.toFixed(3)));
        arrayXCeroMinTime.push(
          Number((arrayXCeroMinTimCount += interval).toFixed(2))
        );
      }
    });
    const mode = numbers.statistic.mode(arrayXCeroMin);

    const reactionTimeArray = [];

    arrayXCeroMin.map((el) => {
      if (el > mode - 0.03 && el < mode + 0.03) {
        reactionTimeArray.push(el);
      }
    });
    const reactionTime = reactionTimeArray.length * interval;

    return {
      arrayXCeroMin,
      reactionTimeArray,
      reactionTime,
      side,
      arrayXCeroMinTime,
    };
  }
};

export default reactionAnalysis;
