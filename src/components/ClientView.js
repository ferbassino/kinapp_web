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
import MotionView from "./MotionView";

const ClientView = ({ id }) => {
  const navigate = useNavigate();
  const [clientData, setClientData] = useState({});
  const [age, setAge] = useState(0);
  const [role, setRole] = useState("");
  const [arrayDataTests, setArrayDataTests] = useState([]);
  const [dataTest, setDataTest] = useState([]);
  const [editRole, setEditRole] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [testVisible, setTestVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalBody, setModalBody] = useState("");

  // modal
  const [show, setShow] = useState(false);
  const handleCancel = () => setShow(false);
  const handleConfirm = () => {
    setConfirmDelete(true);
    setShow(false);
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
  };

  const handleTest = (el) => {
    const id = el._id;
    const res = arrayDataTests.find((el) => el._id === id);
    setDataTest(res);
    setTestVisible(true);
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

    setEditRole(false);
  };

  const handleTestDelete = async (el) => {
    try {
      await client.delete(`/api/motion/${el._id}`);
      window.location.href = window.location.href;
    } catch (error) {
      console.log(error);
    }
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
            <MotionView dataTest={dataTest} />
          </>
        ) : (
          <>
            <Header title={`${clientData.email} tests`} />
            <div className="col">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Date --- Hour</th>
                    <th scope="col">Test</th>
                    <th scope="col">movement</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                  {arrayDataTests.map((el, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        ID:{el._id}---OPPOSITE:{el.opposite}
                        {/* {getDate(el.date)}---{getHour(el.date)} */}
                      </td>
                      <td>{el.motionType}</td>
                      <td>
                        {el.motion} - {el.side} - {el.segment}
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleTest(el)}
                          // value={email}
                        >
                          go test
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={(e) => handleTestDelete(el)}
                          // value={email}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <ModalComponent
        title={modalTitle}
        body={modalBody}
        show={show}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
      />
    </>
  );
};

export default ClientView;
