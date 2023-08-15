import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  cardiaca,
  diseases,
  traumatologica,
  segmento,
  lado,
  fractura,
  treatmentDisease,
} from "../auxiliaries/selects/diseases";
import { antFamList } from "../auxiliaries/checkBox/checkBoxList";
import { ocupaciones } from "../auxiliaries/selects/ocupaciones";
import SelectComponent from "./SelectComponent";
import {
  physicalActyvity,
  wekeendFrec,
} from "../auxiliaries/selects/physicalActivity";

const ClientProfile = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [trauma, setTrauma] = useState(false);
  const [cardio, setCardio] = useState(false);
  const [segment, setSegment] = useState(false);
  const [dateVisible, setDateVisible] = useState(false);
  const [typeDisease, setTypeDisease] = useState(false);
  const [side, setSide] = useState(false);
  const [tx, setTx] = useState(false);
  const [treatment, setTreatment] = useState(false);
  const [date, setDate] = useState("");
  const [antecedentes, setAntecedentes] = useState([]);
  const [antecedente, setAntecedente] = useState({});
  const [diagnosticoVisible, setDiagnosticoVisible] = useState(false);
  const [diagnostico, setDiagnostico] = useState({});
  const [antecedentVisible, setAntecedentVisible] = useState(false);
  const [toogleButtonAnt, setToogleButtonAnt] = useState(false);

  const [antFam, setAntFam] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [actFisPrinc, setActFisPrinc] = useState("");
  const [frecActFis, setfrecActFis] = useState("");

  const [checkedState, setCheckedState] = useState(
    new Array(antFamList.length).fill(false)
  );

  const handleDate = (e) => {
    setTypeDisease(true);
    if (antecedentes.length === 0) {
      const id = 1;

      setDate(e.target.value);
      setAntecedente({ ...antecedente, date: e.target.value, id: id });
    } else {
      let ids = antecedentes.map((el) => el.id);
      const maxId = Math.max(...ids);
      setDate(e.target.value);
      setAntecedente({ ...antecedente, date: e.target.value, id: maxId + 1 });
    }
  };
  const handleSelect = (e) => {
    const { value } = e.target;
    setAntecedente({ ...antecedente, area: diseases[value].text });
    if (value === "0") {
      setTrauma(true);
    }

    if (value === "1") {
      setCardio(true);
      setTrauma(false);
    }
  };

  const handleTrauma = (e) => {
    const { value } = e.target;
    setAntecedente({ ...antecedente, traumaType: traumatologica[value].text });
    setSegment(true);
  };
  const handleCardio = (e) => {
    console.log(e.target.value);
  };
  const handleSegment = (e) => {
    const { value } = e.target;
    setAntecedente({ ...antecedente, segment: segmento[value].text });
    setSide(true);
  };
  const handleSide = (e) => {
    const { value } = e.target;
    setAntecedente({ ...antecedente, side: lado[value].text });
    setTx(true);
  };
  const handleTx = (e) => {
    const { value } = e.target;
    setAntecedente({ ...antecedente, especific: fractura[value].text });
    setTreatment(true);
  };
  const handleTreatement = (e) => {
    const { value } = e.target;
    setAntecedente({
      ...antecedente,
      treatament: treatmentDisease[value].text,
    });
    setToogleButtonAnt(true);
  };

  const resetAntec = () => {
    setToogleButtonAnt(false);
    setTypeDisease(false);
    setDateVisible(false);
    setTrauma(false);
    setCardio(false);
    setSegment(false);
    setSide(false);
    setTx(false);
    setTreatment(false);
  };

  const saveAntec = () => {
    console.log("antecedentes length", antecedentes.length);
    if (antecedentes.length === 0) {
      console.log("entra en diagnostico");
      setDiagnostico(antecedente);
      setAntecedentes(antecedentes.concat(antecedente));
      setDiagnosticoVisible(true);
      setToogleButtonAnt(false);
      setTypeDisease(false);
      setDateVisible(false);
      setTrauma(false);
      setCardio(false);
      setSegment(false);
      setSide(false);
      setTx(false);
      setTreatment(false);
    } else if (antecedentes.length === 1) {
      const newAnt = antecedentes.filter((el) => el.id !== 1);
      console.log("el supusesto puto array filtrado", newAnt);
      console.log("entra en antecedente");
      setAntecedentes(newAnt.concat(antecedente));
      setAntecedentVisible(true);
      setToogleButtonAnt(false);
      setTypeDisease(false);
      setDateVisible(false);
      setTrauma(false);
      setCardio(false);
      setSegment(false);
      setSide(false);
      setTx(false);
      setTreatment(false);
    } else {
      console.log("entra si el array es mayor a 1");
      setAntecedentes(antecedentes.concat(antecedente));
      setAntecedentVisible(true);
      setToogleButtonAnt(false);
      setTypeDisease(false);
      setDateVisible(false);
      setTrauma(false);
      setCardio(false);
      setSegment(false);
      setSide(false);
      setTx(false);
      setTreatment(false);
    }
  };

  const deleteAntecedent = (el) => {
    const { id } = el;

    const newAnt = antecedentes.filter((element) => element.id !== id);

    setAntecedentes([...newAnt]);

    if (antecedentes.length + 1 === 0) {
      setAntecedentVisible(false);
    }
  };
  const deleteDiagnóstico = (antecedente) => {};

  const agregar = () => {
    setToogleButtonAnt(true);
    setDateVisible(true);
  };

  const handleAntFam = (position) => {
    const newAntFam = [];

    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    updatedCheckedState.map((el, index) => {
      if (el) {
        newAntFam.push(antFamList[index]);
      } else {
        newAntFam.filter((el) => el !== false);
      }
    });

    setCheckedState(updatedCheckedState);
    setAntFam(newAntFam);
  };
  return (
    <div>
      <h1>Profile</h1>
      <Form>
        <div className="row mt-4">
          <Form.Group
            className="col md-5 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="nombre" required={true} />
          </Form.Group>
          <Form.Group
            className="col md-5 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="apellido" required={true} />
          </Form.Group>
        </div>
        <div className="row mt-4">
          <Form.Group className="col md-5">
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              placeholder="Date of Birth"
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="col md-5 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>DNI</Form.Label>
            <Form.Control type="text" placeholder="DNI" required={true} />
          </Form.Group>
        </div>
        <div className="row mt-4">
          <SelectComponent
            title="Ocupacion"
            onChange={(e) => setOcupacion(ocupaciones[e.target.value].text)}
            array={ocupaciones}
            className="col md-4 "
          />

          <SelectComponent
            title="Actividad Física"
            onChange={(e) =>
              setActFisPrinc(physicalActyvity[e.target.value].text)
            }
            array={physicalActyvity}
            className="col md-4 "
          />
          <SelectComponent
            title="Frecuencia actividad física"
            onChange={(e) => setfrecActFis(wekeendFrec[e.target.value].text)}
            array={wekeendFrec}
            className="col md-4 "
          />
        </div>
        <div className="row mt-4">
          <Form.Group
            className="col-md-6 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Obra social</Form.Label>
            <Form.Control type="text" placeholder="Obra social" />
          </Form.Group>
          <Form.Group
            className="col-md-6 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Número de afiliado</Form.Label>
            <Form.Control type="text" placeholder="Número de afiliado" />
          </Form.Group>
        </div>
        {/* -------------------------------------- */}
        <h6 className="mt-5">Domicilio</h6>
        <div className="row mt-1">
          <Form.Group
            className="col-md-8 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Calle</Form.Label>
            <Form.Control type="text" placeholder="Obra social" />
          </Form.Group>
          <Form.Group
            className="col-md-2 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Número</Form.Label>
            <Form.Control type="text" placeholder="Número" />
          </Form.Group>
          <Form.Group
            className="col-md-2 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Departamento</Form.Label>
            <Form.Control type="text" placeholder="Departamento" />
          </Form.Group>
        </div>
        <div className="row mt-4">
          <Form.Group
            className="col-md-3 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Localidad</Form.Label>
            <Form.Control type="text" placeholder="Obra social" />
          </Form.Group>
          <Form.Group
            className="col-md-3 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Partido</Form.Label>
            <Form.Control type="text" placeholder="Número" />
          </Form.Group>
          <Form.Group
            className="col-md-3 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Provincia</Form.Label>
            <Form.Control type="text" placeholder="Departamento" />
          </Form.Group>
          <Form.Group
            className="col-md-3 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Codigo Postal</Form.Label>
            <Form.Control type="text" placeholder="Departamento" />
          </Form.Group>
        </div>
        {/* ----------------------------------------------- */}
        <h6 className="mt-5">Contacto</h6>
        <div className="row mt-1">
          <Form.Group
            className="col-md-4 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Teléfono Celular</Form.Label>
            <Form.Control type="text" placeholder="Obra social" />
          </Form.Group>
          <Form.Group
            className="col-md-4 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Teléfono particular</Form.Label>
            <Form.Control type="text" placeholder="Número" />
          </Form.Group>
          <Form.Group
            className="col-md-4 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Departamento" />
          </Form.Group>
        </div>
        <div className="row mt-4">
          <Form.Group
            className="col-md-8 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Profesional derivante</Form.Label>
            <Form.Control type="text" placeholder="nombre" />
          </Form.Group>
          <Form.Group
            className="col-md-4 "
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>matricula</Form.Label>
            <Form.Control type="text" placeholder="apellido" />
          </Form.Group>
        </div>
        {/* ----------------------------------------------- */}

        {/* ---------------------Antecedentes-------------------------- */}
        <h6 className="mt-5">Diagnóstico</h6>
        {diagnosticoVisible ? (
          <>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">N°</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Area</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Segmento</th>
                  <th scope="col">Lado</th>
                  <th scope="col">Lesion</th>
                  <th scope="col">Tratamiento</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{diagnostico.index}</td>
                  <td>{diagnostico.date}</td>
                  <td>{diagnostico.area}</td>
                  <td>{diagnostico.traumaType}</td>
                  <td>{diagnostico.segment}</td>
                  <td>{diagnostico.side}</td>
                  <td>{diagnostico.especific}</td>
                  <td>{diagnostico.treatament}</td>
                  <td>
                    <Button onClick={() => deleteDiagnóstico(antecedente)}>
                      x
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ) : null}
        {diagnosticoVisible ? (
          <h6 className="mt-5">Agregar antecedentes</h6>
        ) : null}
        {antecedentVisible ? (
          <>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">N°</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Area</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Segmento</th>
                  <th scope="col">Lado</th>
                  <th scope="col">Lesion</th>
                  <th scope="col">Tratamiento</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>

              {antecedentes.map((el, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{el.date}</td>
                    <td>{el.area}</td>
                    <td>{el.traumaType}</td>
                    <td>{el.segment}</td>
                    <td>{el.side}</td>
                    <td>{el.especific}</td>
                    <td>{el.treatament}</td>
                    <td>
                      <Button onClick={() => deleteAntecedent(el)}>x</Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </>
        ) : null}
        <div className=" container col border border-primary rounded-1">
          <div className="row">
            <div className="col-md-3">
              {toogleButtonAnt ? (
                <Button variant="primary" className="m-2 " onClick={saveAntec}>
                  Guardar
                </Button>
              ) : (
                <Button variant="primary" className="m-2 " onClick={agregar}>
                  Agregar
                </Button>
              )}
              <Button variant="primary" className="m-2 " onClick={resetAntec}>
                Resetear
              </Button>
            </div>

            {dateVisible ? (
              <Form.Group className="col-md-3 my-2">
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  onChange={handleDate}
                />
              </Form.Group>
            ) : null}
            {typeDisease ? (
              <Form.Group className="col-md-3 my-2">
                <Form.Label>Select Area</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => handleSelect(e)}
                >
                  <option>Open this select menu</option>
                  {diseases.map((el) => (
                    <option value={el.value} key={el.value}>
                      {el.text}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            ) : null}
            {trauma ? (
              <Form.Group className="col-md-3 my-2">
                <Form.Label>Select disease</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => handleTrauma(e)}
                >
                  <option>Open this select menu</option>
                  {traumatologica.map((el) => (
                    <option value={el.value} key={el.value}>
                      {el.text}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            ) : null}
            {cardio ? (
              <Form.Group className="col-md-3 my-2">
                <Form.Label>Select disease</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => handleCardio(e)}
                >
                  <option>Open this select menu</option>
                  {cardiaca.map((el) => (
                    <option value={el.value} key={el.value}>
                      {el.text}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            ) : null}
          </div>
          <div className="row container">
            {segment ? (
              <Form.Group className="col-md-3 my-2">
                <Form.Label>Select segment</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => handleSegment(e)}
                >
                  <option>Open this select menu</option>
                  {segmento.map((el) => (
                    <option value={el.value} key={el.value}>
                      {el.text}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            ) : null}
            {side ? (
              <Form.Group className="col-md-3 my-2">
                <Form.Label>Select side</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => handleSide(e)}
                >
                  <option>Open this select menu</option>
                  {lado.map((el) => (
                    <option value={el.value} key={el.value}>
                      {el.text}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            ) : null}
            {tx ? (
              <Form.Group className="col-md-3 my-2">
                <Form.Label>Specific process</Form.Label>

                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => handleTx(e)}
                >
                  <option>Open this select menu</option>
                  {fractura.map((el) => (
                    <option value={el.value} key={el.value}>
                      {el.text}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            ) : null}
            {treatment ? (
              <Form.Group className="col-md-3 my-2">
                <Form.Label>treatment</Form.Label>

                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => handleTreatement(e)}
                >
                  <option>Open this select menu</option>
                  {treatmentDisease.map((el) => (
                    <option value={el.value} key={el.value}>
                      {el.text}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            ) : null}
          </div>
        </div>

        {/* -------------finaliza antecedentes -----------*/}
        <h6 className="mt-5">Antecedentes Familiares</h6>
        <Form.Group className=" row mb-3" controlId="formBasicCheckbox">
          {antFamList.map((name, index) => (
            <Form.Check
              key={index}
              className=" col mb-2"
              type="checkbox"
              label={name}
              value={name}
              checked={checkedState[index]}
              onChange={() => handleAntFam(index)}
            />
          ))}
        </Form.Group>
        {antFam.length !== 0 ? antFam.map((el) => <h5>{el}</h5>) : null}
        <Form.Group>
          <Button variant="primary" type="submit" className="my-5">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ClientProfile;
