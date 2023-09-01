import React from "react";
import { Container, Nav, Navbar, Row, Col, Card } from "react-bootstrap";

import movileApp from "./assets/movile_app.jpeg";
import webApp from "./assets/web_app.png";
import umico from "./assets/umico.png";
import dataBase from "./assets/database.png";
import anyWhere from "./assets/anywhere.png";
import jornadas from "./assets/jornadas.png";
import hero from "./assets/hero.png";
import cap_1 from "./assets/cap_1.jpeg";
import cap_2 from "./assets/cap_2.jpeg";
import cap_3 from "./assets/cap_3.jpeg";
import cap_4 from "./assets/cap_4.jpeg";
import cap_5 from "./assets/cap_5.jpeg";
import cap_6 from "./assets/cap_6.jpeg";
import logo from "../../logo.svg";
import icon from "./assets/icon.png";
import apkImage from "./assets/apk_image.jpeg";

const apkUrl = "https://kinapp-web.vercel.app/kinapp.apk";
function Landing() {
  const downloadApkUrl = (apkUrl) => {
    const fileName = apkUrl.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = apkUrl;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div>
      <Container>
        <Navbar
          expand="lg"
          className="bg-body-tertiary   "
          style={{
            background:
              "linear-gradient(90deg, rgba(36,31,0,1) 0%, rgba(226,117,96,1) 0%, rgba(255,183,0,0.6279761904761905) 100%)",
            borderRadius: 20,
          }}
        >
          <Container className="">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#environment">
                  <h4 style={{ color: "#042c54" }}>Environment</h4>
                </Nav.Link>
                <Nav.Link href="#possibility">
                  <h4 style={{ color: "#042c54" }}>Possibility</h4>
                </Nav.Link>
                <Nav.Link href="#web">
                  <h4 style={{ color: "#042c54" }}>web</h4>
                </Nav.Link>
                <Nav.Link href="#events">
                  <h4 style={{ color: "#042c54" }}>Events</h4>
                </Nav.Link>
                <Nav.Link href="#contact">
                  <h4 style={{ color: "#042c54" }}>Contact</h4>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>

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
            style={{
              background:
                "linear-gradient(90deg, rgba(36,31,0,1) 0%, rgba(226,117,96,1) 0%, rgba(255,183,0,0.6279761904761905) 100%)",
              borderRadius: 20,
              height: "100%",
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1
                  className="mb-3"
                  style={{ color: "#030029", fontSize: 50, fontWeight: "bold" }}
                >
                  kinApp
                </h1>
                <h4
                  className="mb-3"
                  style={{ color: "#030029", fontSize: 30, fontWeight: "bold" }}
                >
                  Let's take biomechanical analysis to next level with kinApp
                </h4>
              </div>
              <img
                src={logo}
                className="App-logo"
                alt="logo"
                style={{ position: "absolute", zIndex: -1 }}
              />
            </div>
          </div>
        </div>
      </header>
      <main className="my-5">
        <Container>
          <Row>
            <Row id="environment" className="my-5">
              <Col sm={6}>
                <h1 style={{ color: "#042c54" }}>
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
            <Row
              className="my-5"
              style={{
                background:
                  "linear-gradient(90deg, rgba(36,31,0,1) 0%, rgba(226,117,96,1) 0%, rgba(255,183,0,0.6279761904761905) 100%)",
                padding: 20,
                borderRadius: 20,
              }}
            >
              <Col sm className="my-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={movileApp} />
                  <Card.Body>
                    <Card.Title style={{ color: "#042c54" }}>
                      Mobile app
                    </Card.Title>
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
                    <Card.Title style={{ color: "#042c54" }}>
                      Web app
                    </Card.Title>
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
                    <Card.Title style={{ color: "#042c54" }}>UMICO</Card.Title>
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
                    <Card.Title style={{ color: "#042c54" }}>
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
                <h1 style={{ color: "#042c54" }}>
                  Movile app, the possibility of evaluating anywhere. With the
                  mobile application you can obtain data on the movement quickly
                  and easily with storage in the database.
                </h1>
              </Col>
              <Col sm={6}>
                <img src={anyWhere} className="img-fluid shadow-4" alt="..." />
              </Col>
            </Row>
            <Row
              className="my-5"
              id="web"
              style={{
                background:
                  "linear-gradient(90deg, rgba(36,31,0,1) 0%, rgba(226,117,96,1) 0%, rgba(255,183,0,0.6279761904761905) 100%)",
                padding: 20,
                borderRadius: 20,
              }}
            >
              <Col sm={5}>
                <h1 style={{ color: "#042c54" }}>
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
                <h1 className="my-5" style={{ color: "#042c54" }}>
                  Find out about upcoming events
                </h1>
              </Col>
              <Row>
                <Col sm={6}>
                  <img
                    src={jornadas}
                    className="img-fluid shadow-4"
                    alt="..."
                  />
                </Col>
                <Col sm={6}>
                  <Col>
                    <h4 style={{ color: "#042c54", margin: "0.3rem" }}>
                      El día Jueves 28/09/2023 realizaremos un taller de
                      análisis biomecánico con unidades inerciales.
                    </h4>
                  </Col>
                  <Col style={{ textAlign: "center" }}>
                    <h5 style={{ color: "#042c54", marginTop: "3rem" }}>
                      Clik sobre la imagen para descargar apk 👇
                    </h5>

                    <img
                      style={{
                        borderRadius: 20,
                        margin: "3rem",
                        cursor: "pointer",
                        width: "8rem",
                      }}
                      src={apkImage}
                      className="img-fluid shadow-4"
                      alt="..."
                      onClick={() => {
                        downloadApkUrl(apkUrl);
                      }}
                    />
                  </Col>
                </Col>
                <h5 style={{ color: "#042c54", margin: "1rem" }}>Capturas:</h5>
                <Row style={{ textAlign: "center", justifyContent: "center" }}>
                  <img
                    src={cap_2}
                    className="img-fluid shadow-4"
                    alt="..."
                    style={{ width: "12rem", margin: "0.3rem" }}
                  />
                  <img
                    src={cap_1}
                    className="img-fluid shadow-4"
                    alt="..."
                    style={{ width: "12rem", margin: "0.3rem" }}
                  />
                  <img
                    src={cap_5}
                    className="img-fluid shadow-4"
                    alt="..."
                    style={{ width: "12rem", margin: "0.3rem" }}
                  />
                  <img
                    src={cap_3}
                    className="img-fluid shadow-4"
                    alt="..."
                    style={{ width: "12rem", margin: "0.3rem" }}
                  />

                  <img
                    src={cap_6}
                    className="img-fluid shadow-4"
                    alt="..."
                    style={{ width: "12rem", margin: "0.3rem" }}
                  />
                  <img
                    src={cap_4}
                    className="img-fluid shadow-4"
                    alt="..."
                    style={{ width: "12rem", margin: "0.3rem" }}
                  />
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>

      <footer
        className="my-5 "
        id="contact"
        style={{
          background:
            "linear-gradient(90deg, rgba(36,31,0,1) 0%, rgba(226,117,96,1) 0%, rgba(255,183,0,0.6279761904761905) 100%)",
          padding: 20,
          borderRadius: 20,
          height: "100%",
        }}
      >
        <Container>
          <Row>
            <h4 style={{ color: "#042c54" }}>
              Follow us on Instagram, send an email or a message to receive more
              information
            </h4>
          </Row>
          <Row>
            <Col>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/kinapp.dev?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
                >
                  Instagram: kinapp.dev
                </a>
              </div>
            </Col>

            <Col>kinappbiomechanics@gmail.com</Col>
            <Col>WhatsApp: +54 9 11 5806 0332</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Landing;
