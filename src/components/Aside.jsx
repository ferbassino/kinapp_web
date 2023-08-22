import React, { useState } from "react";

const Aside = (props) => {
  const { handleSearch } = props;
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="vh-100  ">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Seleccionar Movimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => handleSearch("all")}>
            <td>Todos los movimientos</td>
          </tr>
          <tr onClick={() => handleSearch("unspecific")}>
            <td>Movimientos inespecíficos</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Movimientos de traslación</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => handleSearch("translation")}>
            <td>Traslación</td>
          </tr>

          <tr onClick={() => handleSearch("fall")}>
            <td>Caida libre</td>
          </tr>
          <tr onClick={() => handleSearch("jump")}>
            <td>Salto</td>
          </tr>
        </tbody>
      </table>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Movimientos de rotación</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => handleSearch("rotacion")}>
            <td>Rotación</td>
          </tr>
          {/* <tr>
            <td>opcion 2</td>
          </tr>
          <tr>
            <td>opcion 3</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Aside;
