import React, { useEffect, useState } from "react";
import Chart from "./Chart";

import date from "./gyroAuxiliaries/date";
import AxisCelphone from "./gyroAuxiliaries/AxisCelphone";
import client from "../api/client";
import { Button } from "react-bootstrap";
import { integral } from "./gyroAuxiliaries/integral";
import { rotationProcess } from "../auxiliaries/rotationprocess";

async function getTest(id) {
  try {
    const res = await client.get(`/api/test/${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

const Rotation = () => {
  const [testsVisibles, setTestsVisibles] = useState(false);
  const [allTests, setAllTests] = useState([]);
  const [dataObj, setDataObj] = useState({});
  const [visible, setVisible] = useState(false);
  const [buttonsVisibles, setButtonsVisibles] = useState(false);
  const [accX, setAccX] = useState([]);
  const [accY, setAccY] = useState([]);
  const [accZ, setAccZ] = useState([]);
  const [testTime, setTestTime] = useState(0);
  const [accTime, setAccTime] = useState([]);
  const [velX, setVelX] = useState([]);
  const [velY, setVelY] = useState([]);
  const [velZ, setVelZ] = useState([]);
  const [velAbsXF, setVelAbsXF] = useState([]);
  const [sinX, setSinX] = useState([]);
  const [cosX, setCosX] = useState([]);
  const [accYF, setAccYF] = useState([]);
  const [accZF, setAccZF] = useState([]);
  const [normAcc, setNormAcc] = useState([]);
  const [tanAcc, setTanAcc] = useState([]);
  const [angX, setAngX] = useState([]);
  const [xChart, setXchart] = useState([]);
  const [yChart, setYchart] = useState([]);
  const [zChart, setZchart] = useState([]);
  const [iChart, setIchart] = useState([]);
  const [jChart, setJchart] = useState([]);
  const [kChart, setKchart] = useState([]);
  const [filteredTime, setFilteredTime] = useState([]);
  const [normRadio, setNormRadio] = useState([]);
  const [powVelX, setPowVelX] = useState([]);
  const [normAcc9, setNormAcc9] = useState([]);
  const [tanAcc9, setTanAcc9] = useState([]);
  const [tanRadio, setTanRadio] = useState([]);
  const [accAngX, setAccAngX] = useState([]);

  async function getTests() {
    try {
      const res = await client.get("api/imudata");
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
      const {
        accX,
        accY,
        accZ,
        velX,
        velY,
        velZ,
        magX,
        magY,
        magZ,
        date,
        accTime,
        testTime,
      } = data;
      const {
        arrayXAngleRad,
        velXAbs,
        velXF,
        filteredTime,
        accAngX,
        accYF,
        accZF,
        normAcc,
        tanAcc,
        xAngleCos,
        xAngleSin,
        normRadio,
        powVelX,
        normAcc9,
        tanRadio,
        tanAcc9,
        torqueFE,
        potencia,
        arrayXAngleGrad,
        fuerzaElastica,
      } = rotationProcess(data);

      setDataObj(data);
      setAccX(accX);
      setAccY(accY);
      setAccZ(accZ);
      setVelX(velX);
      setVelAbsXF(velXF);
      setSinX(xAngleSin);
      setCosX(xAngleCos);
      setAngX(arrayXAngleRad);
      setAccYF(accYF);
      setAccZF(accZF);
      setNormAcc(normAcc);
      setTanAcc(tanAcc);
      setNormRadio(normRadio);
      setPowVelX(powVelX);
      setNormAcc9(normAcc9);
      setTanRadio(tanRadio);
      setTanAcc9(tanAcc9);
      setAccAngX(accAngX);
      setXchart(arrayXAngleRad);
      setYchart(accAngX);
      setZchart(torqueFE);
      // setIchart(fuerzaElastica);
      setJchart(potencia);
      setKchart(arrayXAngleGrad);
      setFilteredTime(filteredTime);
      setTestTime(testTime);
      setAccTime(accTime);
      setVisible(true);
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
                    <Button
                      variant="primary"
                      className="m-2 "
                      onClick={() => handleDelete(el)}
                    >
                      delete
                    </Button>
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
            <h4>Date: {date}</h4>
          </div>
          <Button variant="primary" className="m-2 " onClick={handlebuttons}>
            click to view
          </Button>
        </>
      ) : null}
      {visible ? (
        <div>
          <div className="mt-3">
            <div className="mt-3">
              <h5>test</h5>

              <Chart
                x={angX}
                xName="Angulo rad"
                xColor="green"
                y={yChart}
                yName="acc angular"
                yColor="blue"
                z={zChart}
                zName="torque"
                zColor="red"
                // i={iChart}
                // iName="fuerzaElastica"
                // j={jChart}
                jName="potencia"
                k={kChart}
                kName="angulo °"
                t={filteredTime}
              />
            </div>
            <h5>Acceleration</h5>
            <h6>Datos crudos del acelerómetro</h6>
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
              i={velX}
              iName="i"
              // zColor="red"
              // j={yChart}
              // jName="y"
              // zColor="red"
              t={accTime}
            />
            <div className="mt-3">
              <h6>Aceleración Normal</h6>
              <Chart
                x={accYF}
                xName="aceleración en y total"
                xColor="green"
                y={cosX}
                yName="coseno en x"
                yColor="blue"
                z={angX}
                zName="angulo x"
                zColor="red"
                i={normAcc}
                iName="aceleracion normal en y"
                iColor="#000308"
                j={velAbsXF}
                jName="velocidad angular x"
                // jColor="red"
                t={filteredTime}
              />
            </div>

            <div className="mt-3">
              <h6>Aceleración tangencial</h6>
              <Chart
                x={accZF}
                xName="aceleración en z total"
                xColor="green"
                y={sinX}
                yName="sen en x"
                yColor="blue"
                z={angX}
                zName="angulo x"
                zColor="red"
                i={tanAcc}
                iName="aceleracion tangencial en z"
                iColor="#000308"
                j={velAbsXF}
                jName="velocidad angularx"
                // zColor="red"
                t={filteredTime}
              />
            </div>
            <div className="mt-3">
              <h6>radio</h6>
              <Chart
                x={tanAcc}
                xName="aceleracion tangencial"
                xColor="green"
                y={accAngX}
                yName="aceleracion angular"
                yColor="blue"
                z={tanRadio}
                zName="racio con la tangente"
                zColor="red"
                i={normRadio}
                iName="radio con la normal"
                iColor="#000308"
                j={velAbsXF}
                jName="velocidad angularx"
                // zColor="red"
                t={filteredTime}
              />
            </div>
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

export default Rotation;
