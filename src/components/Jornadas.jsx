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

import ButtonGroup from "react-bootstrap/ButtonGroup";
import JornadasVistaMov from "./JornadasVistaMov";

async function getTest(id) {
  try {
    const res = await client.get(`/api/test/${id}`);
    const data = res.data;

    return data;
  } catch (error) {
    console.log(error);
  }
}

const Jornadas = ({ view }) => {
  const navigate = useNavigate();
  const [testsVisibles, setTestsVisibles] = useState(false);
  const [allTests, setAllTests] = useState([]);
  const [dataObj, setDataObj] = useState({});
  const [visible, setVisible] = useState(false);
  const [buttonsVisibles, setButtonsVisibles] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const [mov, setMov] = useState("");
  const [selectedTestVisible, setSelectedTestVisible] = useState(false);
  const [imuData, setImuData] = useState([]);

  async function getTests() {
    try {
      setLoadingVisible(true);
      const res = await client.get("/api/imudata");

      const data = res.data;

      if (mov !== "") {
        const newData = data.imuDatas.filter((el) => el.name === mov);
        setAllTests(newData);
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
  }, [testsVisibles, view, mov]);

  const handleTest = async (el) => {
    try {
      const res = await client.get(`/api/imudata/${el._id}`);
      const { imuData } = res.data;
      setImuData(imuData);
      setSelectedTestVisible(true);
      // navigate("/jorn/movement", { state: { imuData, view } });
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
  const selectMov = (e) => {
    setSelectedTestVisible(false);
    setMov(e.target.value);
  };
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
              <ButtonGroup size="lg" className="mb-2">
                <Button value={""} onClick={(e) => selectMov(e)}>
                  Todas
                </Button>
                <Button value={"inespecifico"} onClick={(e) => selectMov(e)}>
                  Inespecíficas
                </Button>
                <Button value={"translation"} onClick={(e) => selectMov(e)}>
                  Traslación
                </Button>
                <Button value={"rotacion"} onClick={(e) => selectMov(e)}>
                  Rotación
                </Button>
                <Button value={"fall"} onClick={(e) => selectMov(e)}>
                  Caída
                </Button>
                <Button value={"jump"} onClick={(e) => selectMov(e)}>
                  Salto
                </Button>
              </ButtonGroup>
              {selectedTestVisible ? (
                <>
                  <JornadasVistaMov imuData={imuData} view={view} />
                </>
              ) : (
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
              )}
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

      <div className="row mb-5 text-center">
        <p className="col">curso.biomecanica.imu@gmail.com</p>
      </div>
    </div>
  );
};

export default Jornadas;
