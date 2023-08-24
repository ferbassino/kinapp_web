import React, { useState } from "react";
import Header from "./Header";
import Table from "react-bootstrap/Table";
import Chart from "./Chart";
import getArrayTestTime from "../auxiliaries/getArrayTestTime";
import { useNavigate } from "react-router-dom";
import { getClients } from "../services/clients";
const MotionsView = ({ dataTest, email }) => {
  const navigate = useNavigate();

  const date = new Date(dataTest.date);
  const arrayLl = dataTest.arrayLl;
  const testTime = dataTest.testTime;
  const arrayTime = getArrayTestTime(arrayLl, testTime);

  const handleEmail = async (email) => {
    // const email = e.target.value;

    const data = await getClients();
    const clients = data.clients;

    const searchedClient = clients.find((client) => client.email === email);

    if (searchedClient) {
      const id = searchedClient._id;

      navigate("/reader/client", { state: { userId: id } });
    }
  };
  return (
    <div className="container">
      <Header title={"test data"} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>📅</th>
            <th>date</th>
            <th>{date.toDateString()}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>📝</td>
            <td>Body part</td>
            <td>{dataTest.corporalPart}</td>
          </tr>
          <tr>
            <td>📝</td>
            <td>Motion Type</td>
            <td>{dataTest.motionType}</td>
          </tr>
          <tr>
            <td>📝</td>
            <td>Segment</td>
            <td>{dataTest.segment}</td>
          </tr>
          {dataTest.side ? (
            <tr>
              <td>📝</td>
              <td>Gender</td>
              <td>{dataTest.gender}</td>
            </tr>
          ) : null}

          <tr>
            <td>📝</td>
            <td>Movement</td>
            <td>{dataTest.motion}</td>
          </tr>
          <tr>
            <td>📝</td>
            <td>Test time</td>
            <td>{dataTest.testTime / 1000} s</td>
          </tr>
          <tr>
            <td>📝</td>
            <td>Sample rate</td>
            <td>{(dataTest.testTime / 1000 / arrayLl.length).toFixed(3)} s</td>
          </tr>
          <tr>
            <td>📝</td>
            <td>Samples</td>
            <td>{arrayLl.length} </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>📝</th>
            <th>Angle</th>
            <th>{dataTest.maxAngleLl}°</th>
          </tr>
        </thead>
      </Table>
      <Header title={"client data"} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>📧</th>
            <th>Email</th>
            <th onClick={(e) => handleEmail(email)} value={email}>
              {email}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>📝</td>
            <td>Gender</td>
            <td>{dataTest.gender}</td>
          </tr>
          <tr>
            <td>📝</td>
            <td>Age</td>
            <td>{dataTest.age}</td>
          </tr>
          <tr>
            <td>📝</td>
            <td>Weight</td>
            <td>{dataTest.weight} kg</td>
          </tr>

          <tr>
            <td>📝</td>
            <td>Size</td>
            <td>{dataTest.size / 100} m</td>
          </tr>
          <tr>
            <td>📝</td>
            <td>Physical activity level</td>
            <td>{dataTest.pALevel}</td>
          </tr>
        </tbody>
      </Table>
      <Header title={"Charts"} />
      <Chart
        y={dataTest.arrayLl}
        yName="Eje latero-lateral"
        yColor="red"
        t={arrayTime}
      />
    </div>
  );
};

export default MotionsView;
