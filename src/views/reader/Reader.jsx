import React, { useEffect, useState } from "react";
import ReaderNavigation from "./ReaderNavigation";
import ReaderClients from "./ReaderClients";
import ReactFileReader from "react-file-reader";
import Chart from "../../components/Chart";

const Reader = () => {
  const [verticalTimeArray, setVerticalTimeArray] = useState([]);
  const [verticalShoulderArray, setVerticalShoulderArray] = useState([]);
  const [verticalElbowArray, setVerticalElbowArray] = useState([]);
  const [verticalWristArray, setVerticalWristArray] = useState([]);
  const [horizontalTimeArray, setHorizontalTimeArray] = useState([]);
  const [horizontalShoulderArray, setHorizontalShoulderArray] = useState([]);
  const [horizontalElbowArray, setHorizontalElbowArray] = useState([]);
  const [horizontalWristArray, setHorizontalWristArray] = useState([]);

  const [shoulderArray, setShoulderArray] = useState([]);
  const [elbowArray, setElbowArray] = useState([]);
  const [wristArray, setWristArray] = useState([]);

  const [alphaAngle, setAlphaAngle] = useState([]);

  const uploadVerticalFile = (file) => {
    let read = new FileReader();

    read.onload = function (e) {
      const rawData = read.result;
      const data = rawData.split("\n").slice(1);
      const rows = [];
      data.map((el, index) => {
        if (index < data.length - 1) {
          rows.push(el.split(";"));
        }
      });
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
      setVerticalTimeArray(time);
      setVerticalShoulderArray(shoulder);
      setVerticalElbowArray(elbow);
      setVerticalWristArray(wrist);
    };
    read.readAsText(file[0]);
  };

  const uploadHorizontalFile = (file) => {
    let read = new FileReader();
    read.onload = function (e) {
      const rawData = read.result;
      const data = rawData.split("\n").slice(1);
      const rows = [];
      data.map((el, index) => {
        if (index < data.length - 1) {
          rows.push(el.split(";"));
        }
      });
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
      setHorizontalTimeArray(time);
      setHorizontalShoulderArray(shoulder);
      setHorizontalElbowArray(elbow);
      setHorizontalWristArray(wrist);

      const shoulderArr = [];
      const elbowArr = [];
      const wristArr = [];
      verticalShoulderArray.map((el, index) => {
        shoulderArr.push([shoulder[index], verticalShoulderArray[index]]);
        elbowArr.push([elbow[index], verticalElbowArray[index]]);
        wristArr.push([wrist[index], verticalWristArray[index]]);
      });

      // vectors u/w arrays
      const uArray = [];
      const wArray = [];
      shoulderArr.map((el, index) => {
        uArray.push([
          shoulderArr[index][1] - elbowArr[index][1],
          shoulderArr[index][0] - elbowArr[index][0],
        ]);
        wArray.push([
          wristArr[index][1] - elbowArr[index][1],
          wristArr[index][0] - elbowArr[index][0],
        ]);
      });
      //dot product
      const dotProductUW = [];

      uArray.map((el, index) => {
        dotProductUW.push(
          uArray[index][0] * wArray[index][0] +
            uArray[index][1] * wArray[index][1]
        );
      });

      //module product
      const uModule = [];
      const wModule = [];
      uArray.map((el, index) => {
        uModule.push(
          Math.sqrt(Math.pow(uArray[index][0], 2)) +
            Math.sqrt(Math.pow(uArray[index][1], 2))
        );
        wModule.push(
          Math.sqrt(Math.pow(wArray[index][0], 2)) +
            Math.sqrt(Math.pow(wArray[index][1], 2))
        );
      });

      const moduleProduct = [];
      uModule.map((el, index) => {
        moduleProduct.push(uModule[index] * wModule[index]);
      });

      const alpha = [];

      moduleProduct.map((el, index) => {
        alpha.push(
          (
            (Math.acos(dotProductUW[index] / moduleProduct[index]) * 180) /
            Math.PI
          ).toFixed(2)
        );
      });
      setAlphaAngle(alpha);

      setShoulderArray(wristArr);
      setElbowArray(elbowArr);
      setWristArray(wristArr);
    };
    read.readAsText(file[0]);
  };

  return (
    <div className="container">
      <h2 className="m-3">Reader Zone...</h2>

      <ReactFileReader handleFiles={uploadVerticalFile} fileTypes={".csv"}>
        <button className="btn"> Vertical </button>
      </ReactFileReader>
      <Chart
        x={verticalShoulderArray}
        xName="Shoulder"
        xColor="red"
        y={verticalElbowArray}
        yName="Elbow"
        yColor="blue"
        z={verticalWristArray}
        zName="Wrist"
        zColor="green"
        t={verticalTimeArray}
      />
      <ReactFileReader handleFiles={uploadHorizontalFile} fileTypes={".csv"}>
        <button className="btn"> Horizontal </button>
      </ReactFileReader>
      <Chart
        x={horizontalShoulderArray}
        xName="Shoulder"
        xColor="red"
        y={horizontalElbowArray}
        yName="Elbow"
        yColor="blue"
        z={horizontalWristArray}
        zName="Wrist"
        zColor="green"
        t={horizontalTimeArray}
      />
      <Chart
        x={alphaAngle}
        xName="elbow"
        xColor="red"
        // y={horizontalElbowArray}
        // yName="Elbow"
        // yColor="blue"
        // z={horizontalWristArray}
        // zName="Wrist"
        // zColor="green"
        t={horizontalTimeArray}
      />
    </div>
  );
};

export default Reader;
