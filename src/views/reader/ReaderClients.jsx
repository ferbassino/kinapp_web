import React from "react";
import "./reader-client.css";
import logo from "../../logo.svg";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/users";
import { getClients } from "../../services/clients";
import { useNavigate } from "react-router-dom";
import { emailRegexValidator } from "../../auxiliaries/emailRegexValidator";

function ReaderClients() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [clientsData, setClientsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

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
    const id = el._id;
    navigate("/reader/client", { state: { userId: id } });
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
        const id = searchedClient._id;

        navigate("/reader/client", { state: { userId: id } });
      }
    }
  };

  return (
    <div className="App container">
      {errorMessage ? (
        <h4 className="text-danger text-center m-3">{errorMessage}</h4>
      ) : null}
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
                <th scope="col">
                  <img src={logo} className="App-logo" alt="logo" />
                </th>
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
    </div>
  );
}

export default ReaderClients;
