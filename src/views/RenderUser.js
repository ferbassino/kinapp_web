import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "../components/Chart";

import { useParams } from "react-router-dom";
const RenderUser = () => {
  // useparams es un hook de router que captura lo que le pasamos como dinamico en la ruta con /:algo
  const { id } = useParams();

  const [objDatos, setObjDatos] = useState({});
  const [stringData, setStringData] = useState([]);
  const [chartVisible, setChartvisible] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/evaluations/${id}`).then((res) => {
      // console.log(res.data);
      setObjDatos({
        segment: res.data.segment,
        evaluation: res.data.evaluation,
        email: res.data.email,
        file: res.data.csvFile.csvData,
      });
    });
  }, []);

  const { file } = objDatos;

  const analizar = () => {
    let arrayFile = file
      .split("\n")
      .splice(1)
      .map((line) => line.split(","));
    // .arrayFile(0, 100);
    // .arrayFile.pop();
    setStringData(arrayFile);
    setChartvisible(true);
  };

  //obtener un array por cada variable
  const dataObj = {
    time: stringData.map((el) => Number(el[0]).toFixed(2)),
    xData: stringData.map((el) => Number(el[1])),
    yData: stringData.map((el) => Number(el[2])),
    zData: stringData.map((el) => Number(el[3])),
  };

  return (
    <>
      <h2>Evaluación biomecánica</h2>
      <h2>Tus datos</h2>
      <h4>Email: {objDatos.email}</h4>
      <h4>Evaluación: {objDatos.evaluation}</h4>
      <h4>Segmento: {objDatos.segment}</h4>
      <button onClick={analizar}>analizar</button>
      {chartVisible && (
        <Chart
          x={dataObj.xData}
          y={dataObj.yData}
          z={dataObj.zData}
          t={dataObj.time}
        />
      )}
    </>
  );
};

export default RenderUser;
