import React from "react";
import appStore from "../assets/img/appstore.png";
import playStore from "../assets/img/playstore.png";
import kinovea from "../assets/img/kinovea.png";
import phyphox from "../assets/img/phyphox.png";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <h3 className="col mt-4 text-center">
          Bienvenido al curso de análisis biomecánico con unidades inerciales{" "}
        </h3>

        <div>
          <h5 className=" mt-4 ">Recursos que vamos a utilizar</h5>
          <ol>
            <li>
              PC
              <ol>
                <li>Aplicación Kinapp (Se provee con el curso).</li>
                <li>Instalación de Kinovea y camara para video (opcional).</li>
                <li>Planillas de cálculo</li>
              </ol>
            </li>
            <li>
              Dispositivo móvil con giróscopo<ul>Aplicación Phyphox</ul>
            </li>
          </ol>
        </div>
        <hr className="row mt-4" />
        <h5>Descargas:</h5>
        <h6>Descarga de phyphox para el móvil (Necesaria para la cursada)</h6>
        <div className="row mt-2">
          <figure className="figure col-sm-2">
            <a
              href="https://itunes.apple.com/us/app/phyphox/id1127319693?l=de&ls=1&mt=8"
              rel={"noopener"}
              target={"_blank"}
            >
              <img
                src={appStore}
                className="figure-img img-fluid rounded"
                alt="appstore"
              />
            </a>
          </figure>
          <figure className="figure col-sm-2">
            <a
              href="https://play.google.com/store/apps/details?id=de.rwth_aachen.phyphox&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              target={"_blank"}
              rel={"noopener"}
            >
              <img
                src={playStore}
                className="figure-img img-fluid rounded"
                alt="appstore"
              />
            </a>
          </figure>
        </div>
        <h6>Descarga de Kinovea (opcional)</h6>
        <figure className="figure col-sm-4">
          <a
            href="https://www.kinovea.org/setup/kinovea.0.9.5/Kinovea-0.9.5-x64.exe"
            target={"_blank"}
            rel={"noopener"}
          >
            <img
              src={kinovea}
              className="figure-img img-fluid rounded"
              alt="appstore"
            />
          </a>
        </figure>

        <hr className="row mt-4" />

        <h5>Enlaces de interés:</h5>
        <h6>Visitar pagina de phyphox</h6>
        <div className="row mt-2">
          <figure className="figure col-sm-2">
            <a href="https://phyphox.org/" rel={"noopener"} target={"_blank"}>
              <img
                src={phyphox}
                className="figure-img img-fluid rounded"
                alt="appstore"
              />
            </a>
          </figure>
        </div>
        <h6>Visitar página de Kinovea</h6>
        <figure className="figure col-sm-4">
          <a href="https://www.kinovea.org/" target={"_blank"} rel={"noopener"}>
            <img
              src={kinovea}
              className="figure-img img-fluid rounded"
              alt="appstore"
            />
          </a>
        </figure>
        <hr className="row mt-4" />
        <div className="row mt-4">
          <h5 className="col">
            La cursada consta de tres modulos donde desarrollamos los siguientes
            contenidos:
          </h5>
        </div>
        <div className="row mt-5">
          <h5 className="col-sm-3">Módulo 1:</h5>
          <div className="col">
            <ul>
              <li>Introducción al estudio de la Bimecánica</li>
              <li>
                Determinación de la posición y el desplazamiento través de video
              </li>
              <li>Unidades inerciales</li>
              <li>
                Obtención de la distancia a traves del análisis de los datos de
                las unidades inerciales
              </li>
              <li>Velocidad y aceleración en los movimientos de traslación</li>
              <li>Análisis cinemático del salto vertical</li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <h5 className="col-sm-3">Módulo 2:</h5>
          <div className="col">
            <ul>
              <li>Movimientos de rotación</li>
              <li>Análisis de los movimientos de rotación a través de video</li>
              <li>
                Datos obtenidos de las unidades inerciales en los movimientos de
                rotación
              </li>
              <li>Velocidad y aceleración angular</li>
              <li>
                Determinación de los angulos a través de las unidades inerciales
              </li>
              <li>
                Obtneción de ángulos a través de video y de unidades inerciales
              </li>
              <li>Goniometría con unidades inerciales</li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <h5 className="col-sm-3">Módulo 3:</h5>
          <div className="col ">
            <ul>
              <li>Introducción al estudio de la cinemática</li>
              <li>
                Determinación de la fuerza a través de la aceleración. Gravedad.
                Elasticidad
              </li>
              <li>Potencia y enrgía en los movimientos de traslación</li>
              <li>
                Cinemática en rotación. Momento de una fuerza. Momento de
                inercia
              </li>
              <li>Análisis cinemático de los movimientos de rotación</li>
              <li>Estática. Equilibrio y unidades inerciales</li>
              <li>Análisis cinemático y cinético del salto vertical</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
