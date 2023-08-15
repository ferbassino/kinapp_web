import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import dashBoardImage from "../../assets/images/dashboard-modern.png";
import clients from "../../assets/images/images.png";
import motion from "../../assets/images/motion.png";

const ReaderNavigation = () => {
  return (
    <div className="container">
      <h2 className="m-3">Navigation</h2>
      <div className="container row">
        <div className="col-md m-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={dashBoardImage} />
            <Card.Body>
              <Card.Title>Overview</Card.Title>
              <Card.Text>Overview of all data</Card.Text>
              <Button variant="primary">
                <Link to="/reader/overview" className="nav-link">
                  overview
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md m-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={clients} />
            <Card.Body>
              <Card.Title>Clients</Card.Title>
              <Card.Text>Clients information</Card.Text>
              <Button variant="primary">
                <Link to="/reader/clients" className="nav-link">
                  all Clients
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md m-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={motion} />
            <Card.Body>
              <Card.Title>Motion</Card.Title>
              <Card.Text>Motion information</Card.Text>
              <Button variant="primary">
                <Link to="/reader/motions" className="nav-link">
                  all tests
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md m-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={motion} />
            <Card.Body>
              <Card.Title>Motion</Card.Title>
              <Card.Text>Motions information</Card.Text>
              <Button variant="primary">
                <Link to="/reader/motion" className="nav-link">
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

export default ReaderNavigation;
