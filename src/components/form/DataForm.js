import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import login from "../../services/login";
import RenderUser from "../../views/RenderUser";
import LoginForm from "../LoginForm";
import { evaluation, segment } from "./formAuxiliaries";
import Chart from "../Chart";
import rotationProcess from "../../auxiliaries/rotationProcess";

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

  const { angularVelocityObj, angles } = rotationProcess(archivoCsv);

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
          <h3>Angulos según los ejes:</h3>
          <p>Angulo en x: {angles.xGradAngle}°</p>
          <p>Angulo en y: {angles.yGradAngle}°</p>
          <p>Angulo en x: {angles.zGradAngle}°</p>
          <Chart
            x={angularVelocityObj.xData}
            y={angularVelocityObj.yData}
            z={angularVelocityObj.zData}
            t={angularVelocityObj.time}
          />
        </div>
      ) : null}
    </div>
  );
};

export default DataForm;
