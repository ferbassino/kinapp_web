import React from "react";
import "./reader-client.css";

import { useEffect, useState } from "react";
import { getUsers } from "../../services/users";
import { getClients } from "../../services/clients";

import { emailRegexValidator } from "../../auxiliaries/emailRegexValidator";
import ClientView from "../../components/ClientView";

function ReaderClients() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [clientsData, setClientsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [clientVisible, setClientVisible] = useState(false);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const { users } = await getUsers();
    const loggedUserJSON = window.localStorage.getItem(
      "loggedEvaluationAppUser"
    );
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      const userData = users.find((el) => el.email === user.email);
      const clientId = userData.client;
      const { clients } = await getClients();
      const arrayClientsData = [];
      for (let i = 0; i < clients.length; i++) {
        clientId.map((el) => {
          if (el === clients[i]._id) {
            arrayClientsData.push(clients[i]);
          }
        });
      }
      setClientsData(arrayClientsData);
    }
  };

  const handleClient = (el) => {
    setId(el._id);
    setClientVisible(true);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    if (!emailRegexValidator(email)) {
      setErrorMessage("Email is not valid!");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else {
      const searchedClient = clientsData.find(
        (client) => client.email === email
      );

      if (!searchedClient) {
        setErrorMessage("Client not found with given email!");
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
      if (searchedClient) {
        setId(searchedClient._id);
        setClientVisible(true);
      }
    }
  };

  return (
    <div className="App container">
      {errorMessage ? (
        <h4 className="text-danger text-center m-3">{errorMessage}</h4>
      ) : null}
      {clientVisible ? (
        <>
          <ClientView id={id} />
        </>
      ) : (
        <>
          <div className="row p-2">
            <div className="col-md-4">
              <div className="card p-2">
                <input
                  className="form-control mb-2"
                  placeholder="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <button
                  className="btn btn-primary"
                  onClick={(e) => handleEmail(e)}
                  value={email}
                >
                  enter an setEmail
                </button>
              </div>
            </div>

            <div className="col-md-8">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Email</th>
                    <th scope="col">role</th>
                  </tr>
                </thead>
                <tbody>
                  {clientsData.map((el, index) => (
                    <tr key={index} onClick={() => handleClient(el)}>
                      <td>{index + 1}</td>
                      <td>{el.id}</td>
                      <td>{el.email}</td>
                      <td>{el.roles[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ReaderClients;
