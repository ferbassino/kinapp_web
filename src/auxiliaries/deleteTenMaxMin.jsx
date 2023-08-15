const deleteTenMaxMin = (array) => {
  const filteredArray0 = [];
  const filteredArray1 = [];
  const filteredArray2 = [];
  const filteredArray3 = [];
  const filteredArray4 = [];
  const filteredArray5 = [];
  const filteredArray6 = [];
  const filteredArray7 = [];
  const filteredArray8 = [];
  const filteredArray9 = [];
  const filteredArray = [];

  array.map((el) => {
    if (el !== Math.max(...array) && el !== Math.min(...array) && el > 0) {
      filteredArray0.push(el);
    }
  });
  filteredArray0.map((el) => {
    if (
      el !== Math.max(...filteredArray0) &&
      el !== Math.min(...filteredArray0)
    ) {
      filteredArray1.push(el);
    }
  });
  filteredArray1.map((el) => {
    if (
      el !== Math.max(...filteredArray1) &&
      el !== Math.min(...filteredArray1)
    ) {
      filteredArray2.push(el);
    }
  });
  filteredArray2.map((el) => {
    if (
      el !== Math.max(...filteredArray2) &&
      el !== Math.min(...filteredArray2)
    ) {
      filteredArray3.push(el);
    }
  });
  filteredArray3.map((el) => {
    if (
      el !== Math.max(...filteredArray3) &&
      el !== Math.min(...filteredArray3)
    ) {
      filteredArray4.push(el);
    }
  });
  filteredArray4.map((el) => {
    if (
      el !== Math.max(...filteredArray4) &&
      el !== Math.min(...filteredArray4)
    ) {
      filteredArray5.push(el);
    }
  });
  filteredArray5.map((el) => {
    if (
      el !== Math.max(...filteredArray5) &&
      el !== Math.min(...filteredArray5)
    ) {
      filteredArray6.push(el);
    }
  });
  filteredArray6.map((el) => {
    if (
      el !== Math.max(...filteredArray6) &&
      el !== Math.min(...filteredArray6)
    ) {
      filteredArray7.push(el);
    }
  });
  filteredArray7.map((el) => {
    if (
      el !== Math.max(...filteredArray7) &&
      el !== Math.min(...filteredArray7)
    ) {
      filteredArray8.push(el);
    }
  });
  filteredArray8.map((el) => {
    if (
      el !== Math.max(...filteredArray8) &&
      el !== Math.min(...filteredArray8)
    ) {
      filteredArray9.push(el);
    }
  });
  filteredArray9.map((el) => {
    if (
      el !== Math.max(...filteredArray9) &&
      el !== Math.min(...filteredArray9)
    ) {
      filteredArray.push(el);
    }
  });

  return filteredArray;
};

export default deleteTenMaxMin;
