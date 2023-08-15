const getArrayTestTime = (arrayLl = [], testTime) => {
  let arrayTime = [];
  let counter = 0;
  let interval = testTime / 1000 / arrayLl.length;

  arrayLl.map((el) => {
    counter += interval;
    arrayTime.push(counter.toFixed(2));
  });

  return arrayTime;
};

export default getArrayTestTime;
