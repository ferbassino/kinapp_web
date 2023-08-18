import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import { useLocation, useNavigate } from "react-router-dom";
import date from "./gyroAuxiliaries/date";
import AxisCelphone from "./gyroAuxiliaries/AxisCelphone";
import client from "../api/client";
import { Button } from "react-bootstrap";
import { integral } from "./gyroAuxiliaries/integral";
import { rotationProcess } from "../auxiliaries/rotationprocess";
import { getDate, getHour } from "../auxiliaries/getDate";

async function getTest(id) {
  try {
    const res = await client.get(`/api/test/${id}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

const Jornadas = () => {
  const navigate = useNavigate();
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
      const res = await client.get("/api/imudata");

      const data = res.data;

      if (data) {
        setTestsVisibles(true);
      }

      setAllTests(data.imuDatas);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTests();
  }, [testsVisibles]);

  const handleTest = async (el) => {
    try {
      const res = await client.get(`/api/imudata/${el._id}`);
      const { imuData } = res.data;
      navigate("/jorn/movement", { state: { imuData } });
      setVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (el) => {
    try {
      const res = await client.delete(`/api/imudata/${el._id}`);
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
      <h2 className="mt-3">Kinapp mobile application</h2>

      {testsVisibles ? (
        <>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Movimiento</th>
                <th scope="col">Identificador</th>
                <th scope="col">Dia</th>
                <th scope="col">Hora</th>
                <th scope="col">Seleccionar / Eliminar</th>
              </tr>
            </thead>

            {allTests.map((el) => (
              <tbody key={el._id}>
                <tr>
                  <td>{el.name}</td>
                  <td>{el.identifier}</td>
                  <td>{getDate(el.date)}</td>
                  <td>{getHour(el.date)}</td>
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
            <Chart />
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

export default Jornadas;
