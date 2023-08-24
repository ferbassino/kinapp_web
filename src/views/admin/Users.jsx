import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { getUsers } from "../../services/users";
import { Button } from "react-bootstrap";
import client from "../../api/client";
// import getDate from "../../auxiliaries/getDate";
import LoadingKinapp from "../../components/LoadingKinapp";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [testsVisibles, setTestsVisibles] = useState(false);
  const [allTests, setAllTests] = useState([]);
  const [dataObj, setDataObj] = useState({});
  const [visible, setVisible] = useState(false);
  const [buttonsVisibles, setButtonsVisibles] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);

  async function getAllUsers() {
    try {
      setLoadingVisible(true);
      const res = await getUsers();
      setUsers(res.users);

      if (res) {
        setTestsVisibles(true);
        setLoadingVisible(false);
      }
    } catch (error) {
      setLoadingVisible(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, [testsVisibles]);

  const handleUser = async (el) => {
    try {
      const res = await client.get(`/users/${el._id}`);
      // const { imuData } = res.data;
      // navigate("/jorn/movement", { state: { imuData, selectMovement } });
      setVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (el) => {
    try {
      const res = await client.delete(`/users/${el._id}`);
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
      <h2 className="mt-3">Panel de usuarios del admin (en construcción)</h2>
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
                    <th scope="col">Username</th>
                    <th scope="col">email</th>
                    <th scope="col">Role</th>

                    <th scope="col">Seleccionar / Eliminar</th>
                  </tr>
                </thead>

                {users.map((el) => (
                  <tbody key={el._id}>
                    <tr>
                      <td>{el.userName}</td>
                      <td>{el.email}</td>
                      <td>{el.roles}</td>
                      {/* <td>{getDate(el.date)}</td> */}

                      <td>
                        <Button
                          variant="primary"
                          className="m-2 "
                          onClick={() => handleUser(el)}
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
          <div>{/* <h4>Date: {date}</h4> */}</div>
          <Button variant="primary" className="m-2 " onClick={handlebuttons}>
            click to view
          </Button>
        </>
      ) : null}
      {visible ? (
        <div>
          <div className="mt-3">{/* <Chart /> */}</div>
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

export default Users;
