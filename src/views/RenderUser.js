import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "../components/Chart";
import { useParams } from "react-router-dom";
import rotationProcess from "../auxiliaries/rotationProcess";
import directionAxisDetect from "../auxiliaries/directionAxisDetect";
import mainValue from "../auxiliaries/mainValue";
import { references } from "../auxiliaries/references";
import date from "../auxiliaries/date";

// https://kinapp22.herokuapp.com
// http://localhost:3001

const RenderUser = () => {
  // useparams es un hook de router que captura lo que le pasamos como dinamico en la ruta con /:algo
  const { id } = useParams();
  const [objDatos, setObjDatos] = useState({});
  const [dateObj, setDateObj] = useState({});

  useEffect(() => {
    axios
      .get(`https://kinapp22.herokuapp.com/api/evaluations/${id}`)
      .then((res) => {
        setObjDatos({
          date: res.data.date,
          segment: res.data.segment,
          evaluation: res.data.evaluation,
          email: res.data.email,
          file: res.data.csvFile.csvData,
        });
      });
  }, []);
  const { file } = objDatos;

  const { angularVelocityObj, angles, arraysGradAngles } =
    rotationProcess(file);

  const detector = directionAxisDetect(
    arraysGradAngles.xArrayAngle,
    arraysGradAngles.yArrayAngle,
    arraysGradAngles.zArrayAngle,
    objDatos.segment
  );
  const mainMovementValue = mainValue(
    angles.xGradAngle,
    angles.yGradAngle,
    angles.zGradAngle
  );
  const refAngle = references(objDatos.segment, detector.mainMovement);

  const fecha = date(objDatos.date);

  return (
    <>
      <h2>Evaluación biomecánica</h2>
      <h2>Datos</h2>
      <h4>Email: {objDatos.email}</h4>
      <h4>Evaluación: {objDatos.evaluation}</h4>
      <h4>Segmento: {objDatos.segment}</h4>
      {/* <button onClick={analizar}>analizar</button> */}

      <div>
        <div>
          <h3>Tu análisis</h3>
          <p>{fecha.fecha}</p>
          <p>{fecha.hora} hs</p>
          <p>
            Se realizó un movimiento de {detector.mainMovement} del segmento{" "}
            {objDatos.segment}, en el plano {detector.planeMovement}, eje{" "}
            {detector.axisMovement} que corresponde con el eje "
            {detector.mainAxis}" del dispositivo. El angulo fue de{" "}
            {mainMovementValue}°. El ángulo de referencia para este movimiento
            es de: {refAngle}°.
          </p>
        </div>
        <div>
          <h4>Angulos según los ejes:</h4>
          <p>
            Angulo en x: {angles.xGradAngle}°. Plano: {detector.xGeneralPlane},
            eje {detector.xGeneralAxis}
          </p>
          <p>
            Angulo en y: {angles.yGradAngle}°. Plano: {detector.yGeneralPlane},
            eje {detector.yGeneralAxis}
          </p>
          <p>
            Angulo en z: {angles.zGradAngle}°. Plano: {detector.zGeneralPlane},
            eje {detector.zGeneralAxis}
          </p>
        </div>

        <div>
          <h4>Gráfico de la evolución del ángulo en función del tiempo</h4>
          <Chart
            x={arraysGradAngles.xArrayAngle}
            y={arraysGradAngles.yArrayAngle}
            z={arraysGradAngles.zArrayAngle}
            t={angularVelocityObj.time}
          />
        </div>
        <div>
          <h4>Gráfico de velocidad angular en función del tiempo</h4>
          <Chart
            x={angularVelocityObj.xData}
            y={angularVelocityObj.yData}
            z={angularVelocityObj.zData}
            t={angularVelocityObj.time}
          />
        </div>
      </div>
    </>
  );
};

export default RenderUser;
