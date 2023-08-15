import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Client = () => {
  return (
    <div className="container">
      <h2 className="m-3">Dashboard</h2>
      <div className="container row">
        <div className="col-md m-5">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src={traslacion} /> */}
            <Card.Body>
              <Card.Title>Overview</Card.Title>
              <Card.Text>Overview of all data</Card.Text>
              <Button variant="primary">
                <Link to="/admin/overview" className="nav-link">
                  go to overview
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md m-5">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src={angle} /> */}
            <Card.Body>
              <Card.Title>Profile</Card.Title>
              <Card.Text>Users information</Card.Text>
              <Button variant="primary">
                <Link to="/bronze/profile" className="nav-link">
                  go to Users
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md m-5">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src={manzana} /> */}
            <Card.Body>
              <Card.Title>Clients</Card.Title>
              <Card.Text>Clients information</Card.Text>
              <Button variant="primary">
                <Link to="/admin/clients" className="nav-link">
                  go to Clients
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md m-5">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src={goniometry} /> */}
            <Card.Body>
              <Card.Title>Motion</Card.Title>
              <Card.Text>Motions information</Card.Text>
              <Button variant="primary">
                <Link to="/admin/motion" className="nav-link">
                  go to Motion
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Client;
