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
import { useTranslation } from "react-i18next";
import SelectLanguage from "../../components/SelectLanguage";

const apkUrl = "https://kinapp-web.vercel.app/ka.apk";

function Landing() {
  const [t, i18n] = useTranslation("global");

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
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-flex justify-content-between"
            >
              <Nav.Link href="#environment" className="mx-3">
                <h4 style={{ color: "#042c54" }}>
                  {t("landing.nav.environment")}
                </h4>
              </Nav.Link>
              <Nav.Link href="#possibility" className="mx-3">
                <h4 style={{ color: "#042c54" }}>
                  {t("landing.nav.possibility")}
                </h4>
              </Nav.Link>
              <Nav.Link href="#web" className="mx-3">
                <h4 style={{ color: "#042c54" }}>{t("landing.nav.web")}</h4>
              </Nav.Link>
              <Nav.Link href="#events" className="mx-3">
                <h4 style={{ color: "#042c54" }}>{t("landing.nav.events")}</h4>
              </Nav.Link>
              <Nav.Link href="#contact" className="mx-3">
                <h4 style={{ color: "#042c54" }}>{t("landing.nav.contact")}</h4>
              </Nav.Link>

              <SelectLanguage />
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
                  {t("landing.header.subTitle")}
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
                  {t("landing.environment.title")}
                </h1>
              </Col>
              <Col sm={6} className="text-justify">
                <h4 className="text-secondary">
                  {t("landing.environment.subTitle")}
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
                      {t("landing.environment.mobileAppTitle")}
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      {t("landing.environment.mobileAppText")}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className="my-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={webApp} />
                  <Card.Body>
                    <Card.Title style={{ color: "#042c54" }}>
                      {t("landing.environment.webAppTitle")}
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      {t("landing.environment.webAppText")}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className="my-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={umico} />
                  <Card.Body>
                    <Card.Title style={{ color: "#042c54" }}>
                      {t("landing.environment.umicoTitle")}
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      {t("landing.environment.umicoText")}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm className="my-2">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={dataBase} />
                  <Card.Body>
                    <Card.Title style={{ color: "#042c54" }}>
                      {t("landing.environment.dataBaseTitle")}
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      {t("landing.environment.dataBaseText")}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="my-5 " id="possibility">
              <Col sm={6}>
                <h1 style={{ color: "#042c54" }}>
                  {t("landing.possibility.text")}
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
                  {t("landing.web.webTitle")}
                </h1>
              </Col>
              <Col sm={7}>
                <Row className="my-2">
                  <Col>
                    <h4>{t("landing.web.dataAnalysisTitle")}</h4>
                  </Col>
                  <Col>
                    <h6 className="text-secondary">
                      {t("landing.web.dataAnalysisText")}
                    </h6>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <h4>{t("landing.web.dataBaseTitle")}</h4>
                  </Col>
                  <Col>
                    <h6 className="text-secondary">
                      {t("landing.web.dataBaseText")}
                    </h6>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <h4>{t("landing.web.docsTitle")}</h4>
                  </Col>
                  <Col>
                    <h6 className="text-secondary">
                      {t("landing.web.docsText")}
                    </h6>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <h4>{t("landing.web.statisticsTitle")}</h4>
                  </Col>

                  <Col>
                    <h6 className="text-secondary">
                      {t("landing.web.statisticsText")}
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Col className="my-5" id="events">
              <Col>
                <h1 className="my-5" style={{ color: "#042c54" }}>
                  {t("landing.events.title")}
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
                      análisis biomecánico con unidades inerciales en la ᙭᙭᙭IV
                      edición de las jornadas de Estudiantes de Kinesiología y
                      fisiatría de la Universidad de Buenos Aires.
                    </h4>
                  </Col>
                  <Col style={{ textAlign: "center" }}>
                    <h5 style={{ color: "#042c54", marginTop: "3rem" }}>
                      Clik sobre la imagen para descargar apk que vamos a
                      utilizar en el taller 👇
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
            <h4 style={{ color: "#042c54" }}> {t("landing.footer.title")}</h4>
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
