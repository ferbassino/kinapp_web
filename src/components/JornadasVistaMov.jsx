import React, { useState } from "react";
import Header from "./Header";
import Table from "react-bootstrap/Table";
import Chart from "./Chart";
import getArrayTestTime from "../auxiliaries/getArrayTestTime";
import { useNavigate, useLocation } from "react-router-dom";
import { getClients } from "../services/clients";
import { useEffect } from "react";
import { getDate, getHour } from "../auxiliaries/getDate";

const JornadasVistaMov = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { imuData } = location.state;
  console.log("datatest", imuData);
  const [sampleRate, setSampleRate] = useState(0);

  useEffect(() => {
    const samR = imuData.testTime / 1000 / imuData.accT.length;
    setSampleRate(samR);
  });

  return (
    <div className="container">
      <Header title={"test data"} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>📅</th>
            <th>Identificador</th>
            <th>{imuData.identifier}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>📝</td>
            <td>Movimiento</td>
            <td>{imuData.name}</td>
          </tr>
          <tr>
            <td>📅</td>
            <td>Dia</td>
            <td>{getDate(imuData.date)}</td>
          </tr>
          <tr>
            <td>📅</td>
            <td>Hora</td>
            <td>{getHour(imuData.date)}</td>
          </tr>
          <tr>
            <td>📝</td>
            <td>Identificador</td>
            <td>{imuData.identifier}</td>
          </tr>
          <tr>
            <td>📝</td>
            <td>Tiempo de evaluación</td>
            <td>{imuData.testTime} ms</td>
          </tr>

          <tr>
            <td>📝</td>
            <td>Masa</td>
            <td>{imuData.mass} kg</td>
          </tr>
          <tr>
            <td>📝</td>
            <td>intervalo del muestreo</td>
            <td>{sampleRate.toFixed(3)} s</td>
          </tr>
        </tbody>
      </Table>

      <Header title={"Charts"} />
      <Chart
        x={imuData.accX}
        xName="aceleración en x"
        xColor="red"
        y={imuData.accY}
        yName="aceleración en y"
        yColor="green"
        z={imuData.accZ}
        zName="aceleración en z"
        zColor="blue"
        t={imuData.accT}
      />
    </div>
  );
};

export default JornadasVistaMov;