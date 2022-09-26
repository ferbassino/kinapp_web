import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import login from "../../services/login";
import RenderUser from "../../views/RenderUser";
import LoginForm from "../LoginForm";
import { evaluation, segment } from "./formAuxiliaries";
import Chart from "../Chart";
import rotationProcess from "../../auxiliaries/rotationProcess";
import directionAxisDetect from "../../auxiliaries/directionAxisDetect";
import mainValue from "../../auxiliaries/mainValue";
import { references } from "../../auxiliaries/references";

const DataForm = () => {
  const [email, setEmail] = useState("");
  const [evaluacion, setEvaluacion] = useState("");
  const [segmento, setSegmento] = useState("");
  const [csvFile, setCsvFile] = useState();
  const [user, setUser] = useState(null);
  const [archivoCsv, setArchivoCsv] = useState("");
  const [velocityChartVisible, setVelocityChartVisible] = useState(false);

  //efecto para mantener la sesion de usuario
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(
      "loggedEvaluationAppUser"
    );
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleEvaluacion = (e) => {
    setEvaluacion(e.value);
  };

  const handleSegmento = (e) => {
    setSegmento(e.value);
  };
  const handleFile = (e) => {
    setCsvFile(e.target.files[0]);
    let reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = (e) => {
      setArchivoCsv(reader.result);
    };
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setVelocityChartVisible(true);
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("evaluacion", evaluacion);
    formdata.append("segmento", segmento);
    formdata.append("csvFile", csvFile);

    const { token } = user;

    axios
      .post("http://localhost:3001/api/evaluations", formdata, {
        headers: {
          "content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  //destructuramos lo que viene en rotationProcess, que serian los arrays de velocidad angular, los angulos y los arrays de los angulos en grados

  const { angularVelocityObj, angles, arraysGradAngles } =
    rotationProcess(archivoCsv);

  //funcion  detectora, recibe 4 parametros, el movimiento seleccionado y el array de angulos de cada eje, en este caso

  const detector = directionAxisDetect(
    arraysGradAngles.xArrayAngle,
    arraysGradAngles.yArrayAngle,
    arraysGradAngles.zArrayAngle,
    segmento
  );

  //filtrar el valor absoluto del movimiento principal, le damos 3 parametros con los valores de cada eje, que vine de angles
  const mainMovementValue = mainValue(
    angles.xGradAngle,
    angles.yGradAngle,
    angles.zGradAngle
  );

  //llamamos a la funcion references para obtener el angulo de referencia, la funcion recibe dos parametros, el segmento y el movimiento principal
  const refAngle = references(segmento, detector.mainMovement);

  return (
    <div className="container">
      <h2>Ingresa los datos de la persona a evaluar</h2>

      <form onSubmit={handlesubmit} encType="multipart/form-data" name="form">
        <div>
          <p>Email</p>
          <input type={"email"} onChange={handleEmail} />
        </div>

        <div>
          <p>Evaluación</p>
          <Select options={evaluation} onChange={handleEvaluacion} />
        </div>
        <div>
          <p>Segmento</p>
          <Select options={segment} onChange={handleSegmento} />
        </div>
        <div>
          {/* que hacemos con el archivo csv??? */}
          <p>Archivo .csv</p>
          <input type={"file"} onChange={handleFile} />
        </div>
        <br />
        <div>
          {/* que hacemos con el archivo csv??? */}
          <button>subir datos y ver análisis</button>
        </div>
      </form>
      {velocityChartVisible ? (
        <div>
          <div>
            <h3>Resumen de análisis</h3>
            <p>
              Se realizó un movimiento de {detector.mainMovement} del segmento{" "}
              {segmento}, en el plano {detector.planeMovement}, eje{" "}
              {detector.axisMovement} que corresponde con el eje "
              {detector.mainAxis}" del dispositivo. El angulo fue de{" "}
              {mainMovementValue}°. El ángulo de referencia para este movimiento
              es de: {refAngle}°.
            </p>
          </div>
          <div>
            <h4>Angulos según los ejes:</h4>
            <p>
              Angulo en x: {angles.xGradAngle}°. Plano: {detector.xGeneralPlane}
              , eje {detector.xGeneralAxis}
            </p>
            <p>
              Angulo en y: {angles.yGradAngle}°. Plano: {detector.yGeneralPlane}
              , eje {detector.yGeneralAxis}
            </p>
            <p>
              Angulo en z: {angles.zGradAngle}°. Plano: {detector.zGeneralPlane}
              , eje {detector.zGeneralAxis}
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
      ) : null}
    </div>
  );
};

export default DataForm;
