import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
import NavBar from "../NavBar";

import { evaluation, segment } from "./formAuxiliaries";

const DataForm = () => {
  const [email, setEmail] = useState("");
  const [evaluacion, setEvaluacion] = useState("");
  const [segmento, setSegmento] = useState("");
  const [csvFile, setCsvFile] = useState();

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
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("evaluacion", evaluacion);
    formdata.append("segmento", segmento);
    formdata.append("csvFile", csvFile);

    axios
      .post("http://localhost:3001/api/uploadmongo", formdata, {
        headers: { "content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <NavBar />
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
          <button>subir datos</button>
        </div>
      </form>
    </div>
  );
};

export default DataForm;
