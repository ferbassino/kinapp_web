import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import axis from "./assets/axis2.png";
import movileApp from "./assets/movile_app.jpeg";
import webApp from "./assets/web_app.png";
import umico from "./assets/umico.png";
import dataBase from "./assets/database.png";
import anyWhere from "./assets/anywhere.png";
import jornadas from "./assets/jornadas.png";
import hero from "./assets/hero.png";

function Landing() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary bg-light  ">
        <Container className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#environment">
                <h4 className="text-primary">Environment</h4>
              </Nav.Link>
              <Nav.Link href="#possibility">
                <h4 className="text-primary">Possibility</h4>
              </Nav.Link>
              <Nav.Link href="#web">
                <h4 className="text-primary">web</h4>
              </Nav.Link>
              <Nav.Link href="#events">
                <h4 className="text-primary">Events</h4>
              </Nav.Link>
              <Nav.Link href="#contact">
                <h4 className="text-primary">Contact</h4>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header style={{ paddingLeft: 0 }} className="my-5">
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: hero,
            height: 400,
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3  ">kinApp</h1>
                <h4 className="mb-3">
                  Let's take biomechanical analysis to next level with kinApp
                </h4>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="my-5">
        <Container>
          <Row>
            <Row id="environment" className="my-5">
              <Col sm={6}>
                <h1 className="text-primary">
                  Obtain infinite data with this powerful tool
                </h1>
              </Col>
              <Col sm={6} className="text-justify">
                <h4 className="text-secondary">
                  kinapp is a resource environment for biomechanical analysis
                  which includes mobile applications, web applications, inertial
                  devices (UMICO) and database storage.
                </h4>
              </Col>
            </Row>
            <Row className="my-5 bg-light">
              <Col sm className="my-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={movileApp} />
                  <Card.Body>
                    <Card.Title className="text-primary">Mobile app</Card.Title>
                    <Card.Text className="text-secondary">
                      With the mobile application you can capture body movements
                      or the movement of different elements mobilized by it.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className="my-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={webApp} />
                  <Card.Body>
                    <Card.Title className="text-primary">Web app</Card.Title>
                    <Card.Text className="text-secondary">
                      In the web application we can view the data stored in the
                      database and access specific documentation.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className="my-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={umico} />
                  <Card.Body>
                    <Card.Title className="text-primary">UMICO</Card.Title>
                    <Card.Text className="text-secondary">
                      Umico is an inertial device that captures angular velocity
                      and positional acceleration with bluetooth connection for
                      pc.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className="my-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={dataBase} />
                  <Card.Body>
                    <Card.Title className="text-primary">
                      Database storage
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      Store all your records in the database to have them
                      available at any time.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="my-5 " id="possibility">
              <Col sm={6}>
                <img src={anyWhere} className="img-fluid shadow-4" alt="..." />
              </Col>
              <Col sm={6}>
                <h1 className="text-primary">
                  Movile app, the possibility of evaluating anywhere. With the
                  mobile application you can obtain data on the movement quickly
                  and easily with storage in the database.
                </h1>
              </Col>
            </Row>
            <Row className="my-5 bg-light" id="web">
              <Col sm={5}>
                <h1 className="text-primary">
                  Web application gives us the possibility to analyze the data
                  in a more complete way
                </h1>
              </Col>
              <Col sm={7}>
                <Row className="my-2">
                  <Col>
                    <h4>Analysis of data</h4>
                  </Col>
                  <Col>
                    <h6 className="text-secondary">
                      The visualization of the data obtained with the devices is
                      observed in a more complete way.
                    </h6>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <h4>Database access</h4>
                  </Col>
                  <Col>
                    <h6 className="text-secondary">
                      Specific filters can be applied to requests to the
                      database.
                    </h6>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <h4>Access to documentation</h4>
                  </Col>
                  <Col>
                    <h6 className="text-secondary">
                      Detailed documentation on different biomechanical and
                      anatomo-functional contents.
                    </h6>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <h4>Statistics analysis</h4>
                  </Col>

                  <Col>
                    <h6 className="text-secondary">
                      on the data obtained in all evaluations.
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Col className="my-5" id="events">
              <Col>
                <h1 className="text-primary">Find out about upcoming events</h1>
              </Col>
              <Row>
                <Col>
                  <Col>
                    <h4 className="text-secondary">
                      El día Jueves 28/09/2023 realizaremos un taller de
                      análisis biomecánico con unidades inerciales.
                    </h4>
                  </Col>
                  <Col>
                    <h6 className="text-secondary">
                      Descargá la aplicación kinApp para poder evaluar aquí
                    </h6>
                  </Col>
                </Col>
                <Col>
                  <img
                    src={jornadas}
                    className="img-fluid shadow-4"
                    alt="..."
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>

      <footer className="my-5 bg-light" id="contact">
        <Container>
          <Row>
            <h4 className="text-primary">
              Follow us on Instagram, send an email or a message to receive more
              information
            </h4>
          </Row>
          <Row>
            <Col className="text-secondary">Instagram: kinapp.dev</Col>
            <Col className="text-secondary">kinappbiomechanics@gmail.com</Col>
            <Col className="text-secondary">WhatsApp: +54 9 11 5806 0332</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Landing;
