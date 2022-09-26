/*VALOR DEL EJE PRINCIPAL DE MOVIMIENTO. declaramos un condicional para imprimir el algulo del eje principal de 
  movimiento en valor absoluto, debemos ingresar los angulos por eje */

const mainValue = (x, y, z) => {
  let mainMovementValue;
  if (Math.abs(x) > Math.abs(y) && Math.abs(x) > Math.abs(z)) {
    mainMovementValue = Math.abs(x);
  } else if (Math.abs(y) > Math.abs(x) && Math.abs(y) > Math.abs(z)) {
    mainMovementValue = Math.abs(y);
  } else if (Math.abs(z) > Math.abs(x) && Math.abs(z) > Math.abs(y)) {
    mainMovementValue = Math.abs(z);
  }

  return mainMovementValue;
};

export default mainValue;
