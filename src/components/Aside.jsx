import React, { useState } from "react";

const Aside = (props) => {
  const { handleSearch, userName } = props;
  const [value, setValue] = useState("");

  return (
    <div className="vh-100  ">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">General</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => handleSearch("introduction")}>
            <td>Introducción</td>
          </tr>
          <tr onClick={() => handleSearch("deviceUse")}>
            <td>Uso del dispositivo</td>
          </tr>
          <tr onClick={() => handleSearch("statistics")}>
            <td>Estadísticas</td>
          </tr>
          <tr onClick={() => handleSearch("documentation")}>
            <td>Documentación</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Área de {userName}</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => handleSearch("home")}>
            <td>Home</td>
          </tr>

          <tr onClick={() => handleSearch("tests")}>
            <td>Evaluaciones</td>
          </tr>
          <tr onClick={() => handleSearch("apps")}>
            <td>Apps</td>
          </tr>
          <tr onClick={() => handleSearch("userStatistics")}>
            <td>Estadisticas</td>
          </tr>
        </tbody>
      </table>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Otros</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => handleSearch("jornadas")}>
            <td>Jornadas</td>
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
