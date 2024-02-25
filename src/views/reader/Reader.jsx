import React, { useState } from "react";
import ReaderNavigation from "./ReaderNavigation";
import ReaderClients from "./ReaderClients";
import ReactFileReader from "react-file-reader";
import Chart from "../../components/Chart";

const Reader = () => {
  const [timeArray, setTimeArray] = useState([]);
  const [shoulderArray, setShoulderArray] = useState([]);
  const [elbowArray, setElbowArray] = useState([]);
  const [wristArray, setWristArray] = useState([]);
  const uploadFile = (file) => {
    // Creating the object of FileReader Class
    let read = new FileReader();

    // when readAsText will invoke, onload() method on the read object will execute.
    read.onload = function (e) {
      const rawData = read.result;
      // console.log(rawData);
      // perform some operations with read data
      // console.log(rawData);
      const data = rawData.split("\n").slice(1);

      const rows = [];
      data.map((el, index) => {
        if (index < data.length - 1) {
          rows.push(el.split(";"));
        }
      });
      console.log(rows);
      const time = [];
      const shoulder = [];
      const elbow = [];
      const wrist = [];

      rows.map((el) => {
        time.push(Number(el[0]));
        shoulder.push(Number(el[1].replace(",", ".")));
        elbow.push(Number(el[2].replace(",", ".")));
        wrist.push(Number(el[3].replace(",", ".")));
      });
      setTimeArray(time);
      setShoulderArray(shoulder);
      setElbowArray(elbow);
      setWristArray(wrist);
    };
    // Invoking the readAsText() method by passing the uploaded file as a parameter
    read.readAsText(file[0]);
  };

  return (
    <div className="container">
      <h2 className="m-3">Reader Zone...</h2>
      <ReactFileReader handleFiles={uploadFile} fileTypes={".csv"}>
        <button className="btn"> Upload </button>
      </ReactFileReader>
      <Chart
        x={shoulderArray}
        xName="Shoulder"
        xColor="red"
        y={elbowArray}
        yName="Elbow"
        yColor="blue"
        z={wristArray}
        zName="Wrist"
        zColor="green"
        t={timeArray}
      />
    </div>
  );
};

export default Reader;
