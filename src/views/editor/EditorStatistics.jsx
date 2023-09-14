import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import dashBoardImage from "../../assets/images/dashboard-modern.png";
import getCurrentUserTests from "../../auxiliaries/getCurrentUserTests";
import getCurrentUserClient from "../../auxiliaries/getCurrentUserClient";
import Header from "../../components/Header";

const EditorStatistics = ({ user }) => {
  const [tests, setTests] = useState([]);
  const [clients, setClients] = useState([]);
  const getAllTest = async () => {
    const testsRes = await getCurrentUserTests(user);
    const clientRes = await getCurrentUserClient(user);
    setTests(testsRes);
    setClients(clientRes);
  };
  useEffect(() => {
    getAllTest();
  }, []);

  return (
    <>
      <Header title="Statistics" />
      <div className="container row">
        <div className="col-md m-5">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Clients
              </Card.Title>
              <h1
                style={{
                  fontSize: "12rem",
                  textAlign: "center",
                  color: "#1b1b33",
                }}
              >
                {clients.length}
              </h1>
              {/* <Card.Text>Clients statistics</Card.Text> */}
              <Button variant="primary">
                <Link to="/editor/overview" className="nav-link">
                  Clients statistics
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md m-5">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Tests
              </Card.Title>
              <h1
                style={{
                  fontSize: "12rem",
                  textAlign: "center",
                  color: "#1b1b33",
                }}
              >
                {tests.length}
              </h1>
              {/* <Card.Text>Tests statistics</Card.Text> */}
              <Button variant="primary">
                <Link to="/editor/clients" className="nav-link">
                  Tests statistics
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default EditorStatistics;
