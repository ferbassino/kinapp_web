import React from "react";
// import "./reader-client.css";
import logo from "../../logo.svg";
import { useEffect, useState } from "react";
import { getUsers } from "../../services/users";
import { getClients } from "../../services/clients";
import { useNavigate } from "react-router-dom";
import { emailRegexValidator } from "../../auxiliaries/emailRegexValidator";
import Header from "../../components/Header";
function EditorClients() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [clientsData, setClientsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [noData, setNoData] = useState(false);
  const [noDataMesagge, setNoDataMesagge] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    setLoading(true);
    try {
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
        if (arrayClientsData.length === 0) {
          setLoading(false);
          setNoData(true);
          setNoDataMesagge(`no evaluation data found to ${user.userName}`);
        } else {
          setClientsData(arrayClientsData);
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleClient = (el) => {
    const id = el._id;
    navigate("/editor/client", { state: { userId: id } });
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

        navigate("/editor/client", { state: { userId: id } });
      }
    }
  };

  return (
    <div className="App container">
      <Header title="Clients" />
      {errorMessage ? (
        <h4 className="text-danger text-center m-3">{errorMessage}</h4>
      ) : null}

      <div className="col-md-6 mx-auto my-4">
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
            search by email
          </button>
        </div>
      </div>
      <div className="col-md-8">
        {loading ? (
          <>
            <h2>loading clients...</h2>
          </>
        ) : (
          <>
            {noData ? (
              <>{noDataMesagge}</>
            ) : (
              <>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Email</th>
                      <th scope="col">role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientsData.map((el, index) => (
                      <tr key={index} onClick={() => handleClient(el)}>
                        <td>{el.email}</td>
                        <td>{el.roles}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default EditorClients;
