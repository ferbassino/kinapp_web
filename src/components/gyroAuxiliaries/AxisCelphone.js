import React from "react";
import axis from "./axis.jpg";

const AxisCelphone = () => {
  return (
    <>
      {" "}
      <hr className="row m-4" />
      <div className="row">
        <h6 className="col-sm d-flex align-items-center">
          Recordemos cómo se presentan los ejes con sus sentidos respectivos.
          (Para repasar este concepto se puede ver el video N° 3 del módulo I
          "Orientación y aplicación móvil")
        </h6>
        <div className="col-sm">
          <img src={axis} className="img-fluid" alt="axis" />
        </div>
      </div>
      <hr className="row m-4" />
    </>
  );
};

export default AxisCelphone;
