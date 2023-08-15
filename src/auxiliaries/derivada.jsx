// la derivada recibe dos parametros, el arreglo y el intervalo
const derivada = (array, interval) => {
  const arrayDerivada = [];
  for (let i = 0; i < array.length - 1; i++) {
    arrayDerivada.push((array[i + 1] - array[i]) / interval);
  }
  return arrayDerivada;
};

export default derivada;
