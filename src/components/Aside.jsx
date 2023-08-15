import React from "react";

const Aside = () => {
  return (
    <div className="vh-100  ">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Seleccionar Movimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Todos los movimientos</td>
          </tr>
          <tr>
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
          <tr>
            <td>Traslación</td>
          </tr>
          <tr>
            <td>Caida libre</td>
          </tr>
          <tr>
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
          <tr>
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
