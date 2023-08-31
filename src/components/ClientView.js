import React, { useEffect, useState } from "react";
import { getClients } from "../services/clients";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Table from "react-bootstrap/Table";
import { getAge } from "../auxiliaries/getAge";
import client from "../api/client";
import { getDate, getHour } from "../auxiliaries/getDate";
import { Button } from "react-bootstrap";
import Select from "react-select";
import ModalComponent from "./ModalComponent";
import MotionsView from "./MotionsView";

const ClientView = ({ id }) => {
  const navigate = useNavigate();
  const [clientData, setClientData] = useState({});
  const [age, setAge] = useState(0);
  const [role, setRole] = useState("");
  const [arrayDataTests, setArrayDataTests] = useState([]);
  const [editRole, setEditRole] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [testVisible, setTestVisible] = useState(false);

  // modal
  const [show, setShow] = useState(false);
  const handleCancel = () => setShow(false);
  const handleConfirm = () => {
    setShow(false);
    setConfirmDelete(true);
  };

  useEffect(() => {
    getClient();
  }, []);

  const getClient = async () => {
    const { clients } = await getClients();
    const clientD = clients.find((el) => el._id === id);
    setClientData(clientD);
    setAge(getAge(clientD.birthDate));

    const arrayDataT = [];

    const allEvaluations = await client.get(`/api/motion/motionTests`);

    for (let i = 0; i < clientD.motion.length; i++) {
      allEvaluations.data.motionTests.map((el) => {
        if (el._id === clientD.motion[i]) arrayDataT.push(el);
      });
    }

    setArrayDataTests(arrayDataT);
    console.log(arrayDataT);
  };

  const handleTest = (el) => {
    setTestVisible(true);
    // navigate("/reader/motion", { state: { el, email: clientData.email } });
  };

  const handleDelete = async () => {
    try {
      setShow(true);

      if (confirmDelete) {
        navigate("/reader/clients");
      }
      // await client.delete(`/api/client/${clientData._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const options = [
    { value: "bronze", label: "bronze" },
    { value: "silver", label: "silver" },
    { value: "gold", label: "gold" },
  ];
  const handleRole = () => {
    setEditRole(true);
  };

  const handleUpdate = async () => {
    const result = await client.put(`/api/client/${clientData._id}`, {
      roles: role,
    });

    console.log("result", result.data.updatedClient.roles);
    setEditRole(false);
  };

  return (
    <>
      <div className="container">
        <Header title="Client information" />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>📧</th>
              <th>Email</th>
              <th>{clientData.email}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>BirthDate</td>
              <td>{clientData.birthDate}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Age</td>
              <td>{age} years old</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Gender</td>
              <td>{clientData.gender}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Size</td>
              <td>{clientData.size / 100} m</td>
            </tr>
            <tr>
              <td>5</td>
              <td>weight</td>
              <td>{clientData.size / 100} m</td>
            </tr>
            <tr>
              <td>6</td>
              <td>physical activity level</td>
              <td>{clientData.pALevel}</td>
            </tr>
            <tr onClick={handleRole}>
              <td>7</td>
              <td>Role</td>
              {!editRole ? (
                <td>{role ? role : clientData.roles}</td>
              ) : (
                <td>
                  <Select
                    options={options}
                    onChange={(e) => setRole(e.value)}
                  />
                </td>
              )}
            </tr>
          </tbody>
        </Table>
        <Table>
          <tbody>
            <tr>
              <td>Edit Client</td>
              <td>
                <Button onClick={handleUpdate} variant="primary">
                  Update
                </Button>
              </td>
              <td>
                <Button onClick={handleDelete} variant="primary">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        {testVisible ? (
          <>
            <MotionsView />
          </>
        ) : (
          <>
            <Header title={`${clientData.email} tests`} />
            <div className="col">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">
                      {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    </th>
                    <th scope="col">Date</th>
                    <th scope="col">Hour</th>
                    <th scope="col">Segment</th>
                    <th scope="col">movement</th>
                    <th scope="col">side</th>
                  </tr>
                </thead>
                <tbody>
                  {arrayDataTests.map((el, index) => (
                    <tr key={index} onClick={() => handleTest(el)}>
                      <td>{index + 1}</td>
                      <td>{getDate(el.date)}</td>
                      <td>{getHour(el.date)}</td>
                      <td>{el.segment}</td>
                      <td>{el.motion}</td>
                      {el.side ? <td>{el.side}</td> : <td>-</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <ModalComponent
        title="Delete client"
        body={`Confirm that you want to delete ${clientData.email}?`}
        show={show}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
      />
    </>
  );
};

export default ClientView;
