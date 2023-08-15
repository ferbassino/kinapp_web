import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import rotationProcess from "./gyroAuxiliaries/rotationProcess";
import date from "./gyroAuxiliaries/date";
import AxisCelphone from "./gyroAuxiliaries/AxisCelphone";
import client from "../api/client";
import { Button } from "react-bootstrap";
import { integral } from "./gyroAuxiliaries/integral";

async function getTest(id) {
  try {
    const res = await client.get(`/api/test/${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

const GyroscopeRotation = () => {
  const [testsVisibles, setTestsVisibles] = useState(false);
  const [allTests, setAllTests] = useState([]);
  const [dataObj, setDataObj] = useState({});
  const [visible, setVisible] = useState(false);
  const [buttonsVisibles, setButtonsVisibles] = useState(false);
  const [accX, setAccX] = useState([]);
  const [accY, setAccY] = useState([]);
  const [accZ, setAccZ] = useState([]);
  const [accTime, setAccTime] = useState([]);
  const [arrXAngle, setArrXAngle] = useState([]);
  const [arrYAngle, setArrYAngle] = useState([]);
  const [arrZAngle, setArrZAngle] = useState([]);
  const [centYAcc, setCentYAcc] = useState([]);
  const [tanYAcc, setTanYAcc] = useState([]);
  const [accGY, setAccGY] = useState([]);
  const [accGZ, setAccGZ] = useState([]);
  const [cosX, setCosX] = useState([]);
  const [sinInX, setSinInX] = useState([]);
  const [arrXAngleRad, setArrXAngleRad] = useState([]);
  const [xRadio, setXRadio] = useState([]);
  const [pow, setPow] = useState([]);
  const [filterArrayVelX, setFilterArrayVelX] = useState([]);
  const [filteredCentYAcc, setFilteredCentYAcc] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [testTime, setTestTime] = useState(0);
  const [arrayY1, setArrayY1] = useState(0);
  const [arrRadio, setArrRadio] = useState(0);
  const [maxAngleXGra, setMaxAngleXGrad] = useState([]);
  const [arrayVelXDerivada, setsArrayVelXDerivada] = useState([]);
  const [arrayAccTanRadio, setArrayAccTanRadio] = useState();
  const [filteredArrayAccTan, setFilteredArrayAccTan] = useState();

  async function getTests() {
    try {
      const res = await client.get("/api/tests");
      const data = res.data;

      if (data) {
        setTestsVisibles(true);
      }
      setAllTests(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTests();
  }, [testsVisibles]);

  const handleTest = async (el) => {
    try {
      const res = await client.get(`/api/test/${el._id}`);
      const data = res.data;

      const { accX, accY, accZ, accTime, name, date, testTime } = data;

      setDataObj(data);

      const {
        arrayXAngle,
        arrayXAngleRad,
        arrayYAngle,
        arrayZAngle,
        centYAcc,
        tanYAcc,
        accGY,
        accGZ,
        cosInX,
        sinInX,
        xRadio,
        pow,
        filterArrayVelX,
        filteredCentYAcc,
        arrY1,
        arrRadio,
        maxAngleXGrad,
        arrayVelXDerivada,
        arrayAccTanRadio,
        filteredArrayAccTan,
      } = integral(data);
      setArrRadio(arrRadio);
      setArrXAngle(arrayXAngle);
      setArrYAngle(arrayYAngle);
      setArrZAngle(arrayZAngle);
      setCentYAcc(centYAcc);
      setTanYAcc(tanYAcc);
      setAccX(accX);
      setAccY(accY);
      setAccZ(accZ);
      setAccTime(accTime);
      setAccGY(accGY);
      setAccGZ(accGZ);
      setCosX(cosInX);
      setSinInX(sinInX);
      setArrXAngleRad(arrayXAngleRad);
      setXRadio(xRadio);
      setPow(pow);
      setName(name);
      setDate(date);
      setButtonsVisibles(true);
      setFilterArrayVelX(filterArrayVelX);
      setFilteredCentYAcc(filteredCentYAcc);
      setTestTime(testTime);
      setArrayY1(arrY1);
      setMaxAngleXGrad(maxAngleXGrad);
      setsArrayVelXDerivada(arrayVelXDerivada);
      setArrayAccTanRadio(arrayAccTanRadio);
      setFilteredArrayAccTan(filteredArrayAccTan);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (el) => {
    try {
      const res = await client.delete(`/api/test/${el._id}`);
      const data = res.data;
      setTestsVisibles(false);
      setButtonsVisibles(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlebuttons = () => {
    setVisible(true);
  };
  // const fecha = date(new Date());

  return (
    <div className="container">
      <h2 className="mt-3">Analysis with kinapp mobile application</h2>

      {testsVisibles ? (
        <>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">click to select</th>
              </tr>
            </thead>

            {allTests.map((el) => (
              <tbody key={el._id}>
                <tr>
                  <td>{el.name}</td>
                  <td>{el._id}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="m-2 "
                      onClick={() => handleTest(el)}
                    >
                      select
                    </Button>
                    {/* <Button
                      variant="primary"
                      className="m-2 "
                      onClick={() => handleDelete(el)}
                    >
                      delete
                    </Button> */}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </>
      ) : null}

      {buttonsVisibles ? (
        <>
          <div>
            <h4>Test: {name}</h4>
            <h4>Date: {date}</h4>
            <h4>Samples: {testTime}</h4>
            <h4>interval: {(testTime / 1000 / accX.length).toFixed(2)} s</h4>
          </div>
          <Button variant="primary" className="m-2 " onClick={handlebuttons}>
            click to view
          </Button>
        </>
      ) : null}
      {visible ? (
        <div>
          {/* <div className="mt-3">
            <h3>Análisis</h3>
            <p>Fecha: {fecha.fecha}</p>
            <p>Hora: {fecha.hora} hs</p>
          </div> */}
          <h4>Max angle x:{maxAngleXGra}°</h4>
          <div className="mt-3">
            <h5>Acceleration</h5>
            <Chart
              x={accX}
              xName="x"
              xColor="green"
              y={accY}
              yName="y"
              yColor="blue"
              z={accZ}
              zName="z"
              zColor="red"
              t={accTime}
            />
          </div>
          <div className="mt-3">
            <h5>centripetal acceleration</h5>
            <Chart
              x={accGY}
              xName="accGY"
              xColor="green"
              // x={arrayY1}
              // xName="accGY"
              // xColor="green"
              y={accY}
              yName="accY"
              yColor="blue"
              z={centYAcc}
              zName="cenTYAcc"
              zColor="red"
              t={accTime}
            />
          </div>
          <div className="mt-3">
            <h5>tangential acceleration</h5>
            <Chart
              x={accGZ}
              xName="accGZ"
              xColor="green"
              y={accZ}
              yName="accZ"
              yColor="blue"
              z={tanYAcc}
              zName="tanYAcc"
              zColor="red"
              t={accTime}
            />
          </div>
          <div className="mt-5">
            <h5> Angle Rad</h5>
            <Chart
              x={arrXAngleRad}
              xName="arrXAngleRad"
              xColor="green"
              y={cosX}
              yName="cosX"
              yColor="blue"
              z={sinInX}
              zName="sinInXz"
              zColor="red"
              t={dataObj.velTime}
            />
          </div>
          <div className="mt-5">
            <h5>Angular velocity</h5>
            <Chart
              x={dataObj.velX}
              xName="x"
              xColor="green"
              y={dataObj.velY}
              yName="y"
              yColor="blue"
              z={dataObj.velZ}
              zName="z"
              zColor="red"
              t={dataObj.velTime}
            />
          </div>
          {/* {dataObj.name === "rotation" ? ( */}
          <>
            <div className="mt-5">
              <h5>Radio: {xRadio.toFixed(4)} m</h5>
              <Chart
                x={filteredArrayAccTan}
                xName="filteredArrayAccTan"
                xColor="green"
                // x={filteredCentYAcc}
                // xName="filteredCentYAcc"
                // xColor="green"
                y={arrayVelXDerivada}
                yName="arrayVelXDerivada,"
                yColor="blue"
                // y={pow}
                // yName="pow"
                // yColor="blue"
                // z={arrRadio}
                // zName="arrRadio"
                // zColor="red"
                z={arrayAccTanRadio}
                zName="arrayAccTanRadio"
                zColor="red"
                t={dataObj.velTime}
              />
            </div>
            <div className="mt-5">
              <h5>Angle</h5>
              <Chart
                x={arrXAngle}
                xName="x"
                xColor="green"
                y={arrYAngle}
                yName="y"
                yColor="blue"
                z={arrZAngle}
                zName="z"
                zColor="red"
                t={dataObj.velTime}
              />
            </div>
          </>
          {/* ) : null} */}
          <div className="mt-5">
            <h5>Magnetic field</h5>
            <Chart
              x={dataObj.magX}
              xName="x"
              xColor="green"
              y={dataObj.magY}
              yName="y"
              yColor="blue"
              z={dataObj.magZ}
              zName="z"
              zColor="red"
              t={dataObj.magTime}
            />
          </div>
        </div>
      ) : (
        <div className="mt-5">
          <h5>Results will be displayed below...</h5>
        </div>
      )}
      <hr className="row m-4" />
      <div className="row mb-5 text-center">
        <p className="col">curso.biomecanica.imu@gmail.com</p>
      </div>
    </div>
  );
};

export default GyroscopeRotation;
