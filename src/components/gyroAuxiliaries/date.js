const date = (date = "") => {
  const dateString = new Date(date).toLocaleDateString();
  const horaString = new Date(date).toLocaleTimeString();

  const dateObj = {
    fecha: dateString,
    hora: horaString,
  };

  return dateObj;
};

export default date;
