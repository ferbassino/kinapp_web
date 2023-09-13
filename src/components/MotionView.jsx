import React, { useState } from "react";
import Header from "./Header";
import Table from "react-bootstrap/Table";
import Chart from "./Chart";
import getArrayTestTime from "../auxiliaries/getArrayTestTime";
import { useNavigate, useLocation } from "react-router-dom";
import { getClients } from "../services/clients";
import { useEffect } from "react";
import { getDate, getHour } from "../auxiliaries/getDate";
import { dataProcess } from "../auxiliaries/dataProcess";
import TranslationView from "./TranslationView";
import FallView from "./FallView";
import RotacionView from "./RotacionView";
import JumpView from "./JumpView";

const MotionView = ({ dataTest = [] }) => {
  const { mass, testTime } = dataTest;

  const { accX, accY, accZ, accT, accInterval } = dataProcess(
    dataTest.accData,
    dataTest.testTime
  );

  const [translationVisible, setTraslationVisible] = useState(false);
  const [fallVisible, setFallVisible] = useState(false);
  const [rotacionVisible, setRotacionVisible] = useState(false);
  const [jumpVisible, setJumpVisible] = useState(false);
  const [sampleRate, setSampleRate] = useState(0);

  useEffect(() => {
    const samR = dataTest.testTime / 1000 / accT.length;
    setSampleRate(samR);
  });

  useEffect(() => {
    if (dataTest.motionType === "vector") {
      setTraslationVisible(true);
    }

    if (dataTest.motionType === "rotacion") {
      setRotacionVisible(true);
    }
    if (dataTest.motionType === "jump") {
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
            <th>Tipo</th>
            <th>{dataTest.motionType}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>📝</td>
            <td>Movimiento</td>
            <td>{dataTest.motion}</td>
          </tr>
          <tr>
            <td>📅</td>
            <td>Dia</td>
            <td>{getDate(dataTest.date)}</td>
          </tr>
          <tr>
            <td>📅</td>
            <td>Hora</td>
            <td>{getHour(dataTest.date)}</td>
          </tr>

          <tr>
            <td>📝</td>
            <td>Tiempo de evaluación</td>
            <td>{dataTest.testTime} ms</td>
          </tr>

          <tr>
            <td>📝</td>
            <td>Masa</td>
            <td>{dataTest.mass} kg</td>
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

export default MotionView;
