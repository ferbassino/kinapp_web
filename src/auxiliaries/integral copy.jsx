// la integral recibe dos paramatros, el arreglo y el intervalo, retorna un arreglo que es la integral del arreglo del parametro

const integral = (array = [], interval = 0, initialCount = 0) => {
  let count = initialCount;
  const halfInterval = interval / 2;
  const arrayIntegral = [];
  for (let i = 0; i < array.length; i++) {
    count += (array[i] + array[i + 1]) * halfInterval;
    arrayIntegral.push(count);
  }

  return arrayIntegral;
};

export default integral;
