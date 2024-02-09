const stiffnessAnalysis = (accYI = [], testTime = 0, masa = 0) => {
  const arrayAccTime = [];
  let count = 0;
  const interval = testTime / accYI.length / 1000;

  console.log("interval", interval);
  let accY = [];
  accYI.map((el) => {
    accY.push(el - 1);
    count += testTime / accYI.length;
    arrayAccTime.push(count / 1000);
  });
  console.log("accy.lenght", accY.length);
  const arrayYCentral = [];
  const timeArrayYCentral = [];
  accY.map((el, index) => {
    if (arrayAccTime[index] > 3 && arrayAccTime[index] < 10) {
      arrayYCentral.push(el);
      timeArrayYCentral.push(arrayAccTime[index]);
    }
  });
  const arrayYCentral0 = [];
  const timeArrayYCentral0 = [];
  const arrayYCentral0F = [];
  const timeArrayYCentral0F = [];

  let indexI = 0;
  let index0I = 0;
  arrayYCentral.map((el, index) => {
    if (arrayYCentral[0] > 0) {
      index0I = arrayYCentral.findIndex((el) => el < 0);
      if (index0I <= index) {
        arrayYCentral0.push(el);
        timeArrayYCentral0.push(arrayAccTime[index].toFixed(2));
      }
    }
    if (arrayYCentral[0] < 0) {
      indexI = arrayYCentral.findIndex((el) => el > 0);
    }
  });

  arrayYCentral.map((el, index) => {
    if (index > indexI) {
      arrayYCentral0F.push(el);
    }
  });

  index0I = arrayYCentral0F.findIndex((el, index) => el < 0);

  arrayYCentral0F.map((el, index) => {
    if (index > index0I) {
      arrayYCentral0.push(el);
      timeArrayYCentral0.push(arrayAccTime[index].toFixed(2));
    }
  });
  const index0 = 0;
  let index1 = 0;
  let index2 = 0;
  let index3 = 0;
  let index4 = 0;
  let index5 = 0;
  let index6 = 0;
  let index7 = 0;
  let index8 = 0;

  arrayYCentral0.map((el, index) => {
    index1 = arrayYCentral0.findIndex((el) => el > 0);
    index2 = arrayYCentral0.findIndex((el, index) => index > index1 && el < 0);
    index3 = arrayYCentral0.findIndex((el, index) => index > index2 && el > 0);
    index4 = arrayYCentral0.findIndex((el, index) => index > index3 && el < 0);
    index5 = arrayYCentral0.findIndex((el, index) => index > index4 && el > 0);
    index6 = arrayYCentral0.findIndex((el, index) => index > index5 && el < 0);
    index7 = arrayYCentral0.findIndex((el, index) => index > index6 && el > 0);
    index8 = arrayYCentral0.findIndex((el, index) => index > index7 && el < 0);
  });

  console.log("index0", index0);
  console.log("index1", index1);
  console.log("index2", index2);
  console.log("index3", index3);
  console.log("index4", index4);
  console.log("index5", index5);
  console.log("index6", index6);
  console.log("index7", index7);
  console.log("index8", index8);

  const tV01 = (index1 - index0) * interval;
  const tC12 = (index2 - index1) * interval;
  // console.log(tV01, tC12);
  const tV23 = (index3 - index2) * interval;
  const tC34 = (index4 - index3) * interval;
  // console.log(tV23, tC34);
  const tV45 = (index5 - index4) * interval;
  const tC56 = (index6 - index5) * interval;
  // console.log(tV45, tC56);

  const tV67 = (index7 - index6) * interval;
  const tC78 = (index8 - index7) * interval;
  // console.log(tV67, tC78);

  const tC = (tC34 + tC56 + tC78) / 3;
  const tV = (tV23 + tV45 + tV67) / 3;

  const a = masa * Math.PI * (tV + tC);
  const b = Math.pow(tC, 2);
  const c = (tC + tV) / Math.PI;
  const d = tC / 4;

  const stiffness = parseInt(a / (b * (c + d)));
  const stiffnessData = {
    tC34,
    tC56,
    tC78,
    tV23,
    tV45,
    tV67,
    stiffness,
  };
  console.log("stifness", stiffness);

  return {
    stiffnessData,
    arrayYCentral,
    arrayYCentral0F,
    arrayYCentral0,
    timeArrayYCentral0,
    accY,
    arrayAccTime,
  };
};

export default stiffnessAnalysis;
