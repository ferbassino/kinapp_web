import React, { useState } from "react";
import Chart from "../components/Chart";
import acelerationProcess from "../auxiliaries/acelerationProcess";

const Aceleracion = () => {
  const [csvFile, setCsvFile] = useState();

  const handlesubmit = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      setCsvFile(reader.result);
    };
  };

  const { acelerationObj } = acelerationProcess(csvFile);

  return (
    <div className="container">
      <h3 className="m-3">Aceleración posicional</h3>
      <p>
        Aquí una vez que se cargue el archivo csv de la aceleracion, se van a
        graficar las 3 aceleraciones
      </p>
      <form className="form-control">
        <input type={"file"} onChange={handlesubmit} />
      </form>
      {csvFile ? (
        <Chart
          x={acelerationObj.xData}
          y={acelerationObj.yData}
          z={acelerationObj.zData}
          t={acelerationObj.time}
        />
      ) : null}
    </div>
  );
};

export default Aceleracion;
