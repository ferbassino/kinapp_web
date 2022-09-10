import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const RenderUser = () => {
  const [objDatos, setObjDatos] = useState({});
  const [stringData, setStringData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/uploadmongo/631bb691869a4659d38f48ed")
      .then((res) => {
        setObjDatos({
          segment: res.data.segment,

          email: res.data.email,
          file: res.data.csvFile.csvData,
        });
      });
  }, []);

  const analizar = () => {
    const arrayDatos = objDatos.file
      .split("\n")
      .splice(1)
      .map((line) => line.split(","));

    arrayDatos.pop();
    arrayDatos.splice(0, 100);
    console.log(arrayDatos);
  };

  //

  return (
    <>
      <NavBar />
      <h2>Evaluación biomecánica</h2>
      <h2>Tus datos</h2>
      <h4>Email: {objDatos.email}</h4>
      <h4>Segmento: {objDatos.segment}</h4>
      <button onClick={analizar}>analizar</button>
    </>
  );
};

export default RenderUser;
