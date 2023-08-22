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
import LoadingKinapp from "./LoadingKinapp";

async function getTest(id) {
  try {
    const res = await client.get(`/api/test/${id}`);
    const data = res.data;

    return data;
  } catch (error) {
    console.log(error);
  }
}

const Jornadas = ({ selectMovement }) => {
  const navigate = useNavigate();
  const [testsVisibles, setTestsVisibles] = useState(false);
  const [allTests, setAllTests] = useState([]);
  const [dataObj, setDataObj] = useState({});
  const [visible, setVisible] = useState(false);
  const [buttonsVisibles, setButtonsVisibles] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);

  async function getTests() {
    try {
      setLoadingVisible(true);
      const res = await client.get("/api/imudata");

      const data = res.data;
      console.log(res.data.imuDatas);
      if (selectMovement !== "") {
        const newData = data.imuDatas.filter(
          (el) => el.name === selectMovement
        );
        setAllTests(newData);
        console.log(newData);
      } else {
        setAllTests(data.imuDatas);
      }

      if (data) {
        setTestsVisibles(true);
        setLoadingVisible(false);
      }
    } catch (error) {
      setLoadingVisible(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getTests();
  }, [testsVisibles, selectMovement]);

  const handleTest = async (el) => {
    try {
      const res = await client.get(`/api/imudata/${el._id}`);
      const { imuData } = res.data;
      navigate("/jorn/movement", { state: { imuData, selectMovement } });
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
      {loadingVisible ? (
        <div className="text-center my-5">
          <LoadingKinapp />
          <h3 className="text-center my-5">Cargando evaluaciones...</h3>
        </div>
      ) : (
        <>
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
        </>
      )}

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
