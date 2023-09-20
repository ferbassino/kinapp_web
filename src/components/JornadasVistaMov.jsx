import React, { useState } from "react";
import Header from "./Header";
import Table from "react-bootstrap/Table";
import Chart from "./Chart";
import getArrayTestTime from "../auxiliaries/getArrayTestTime";
import { useNavigate, useLocation } from "react-router-dom";
import { getClients } from "../services/clients";
import { useEffect } from "react";
import { getDate, getHour } from "../auxiliaries/getDate";

import TranslationView from "./TranslationView";
import FallView from "./FallView";
import RotacionView from "./RotacionView";
import JumpView from "./JumpView";

const JornadasVistaMov = ({ imuData, view }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { imuData, view } = location.state;

  const { accX, accY, accZ, accT, testTime, mass } = imuData;

  const accYsinG = [];

  accY.map((el) => accYsinG.push((el - 1) * 9.81));

  const accYsinGMax = Math.max(...accYsinG);

  const [translationVisible, setTraslationVisible] = useState(false);
  const [fallVisible, setFallVisible] = useState(false);
  const [rotacionVisible, setRotacionVisible] = useState(false);
  const [jumpVisible, setJumpVisible] = useState(false);
  const [sampleRate, setSampleRate] = useState(0);

  useEffect(() => {
    const samR = imuData.testTime / 1000 / imuData.accT.length;
    setSampleRate(samR);
  });
  useEffect(() => {
    if (imuData.name === "translation") {
      setTraslationVisible(true);
    }
    if (imuData.name === "fall") {
      setFallVisible(true);
    }
    if (imuData.name === "rotacion") {
      setRotacionVisible(true);
    }
    if (imuData.name === "jump") {
      setJumpVisible(true);
    }
  }, []);

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
      <Header title={"Datos crudos del dispositivo"} />

      <Chart
        x={accX}
        xName="aceleración en x"
        xColor="red"
        y={accY}
        yName="aceleración en y"
        yColor="green"
        z={accZ}
        zName="aceleración en z"
        zColor="blue"
        t={accT}
      />
      <h1>Aceleración maxima: {accYsinGMax.toFixed(2)} m/s2</h1>
      <Chart
        // x={accX}
        // xName="aceleración en x"
        // xColor="red"
        y={accYsinG}
        yName="aceleración en y"
        yColor="green"
        // z={accZ}
        // zName="aceleración en z"
        // zColor="blue"
        t={accT}
      />
      {translationVisible ? (
        <>
          <TranslationView
            accY={accY}
            accT={accT}
            masa={mass}
            testTime={testTime}
          />
        </>
      ) : null}
      {fallVisible ? (
        <>
          <FallView accZ={accZ} accT={accT} />
        </>
      ) : null}
      {rotacionVisible ? (
        <>
          <RotacionView accY={accY} accZ={accZ} accT={accT} />
        </>
      ) : null}
      {jumpVisible ? (
        <>
          <JumpView accY={accY} testTime={testTime} masa={mass} accT={accT} />
        </>
      ) : null}
    </div>
  );
};

export default JornadasVistaMov;
