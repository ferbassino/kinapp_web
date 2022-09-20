import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchEvaluation = () => {
  const [allEvaluations, setAllEvaluations] = useState([]);
  const [emailEvaluation, setEmailEvaluation] = useState("");
  const [busquedaVisible, setBusquedaVisible] = useState(false);
  const [evaluationsArray, setEvaluationsArray] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/evaluations").then((res) => {
      setAllEvaluations(res.data);
    });
  }, []);

  const handleChangeEvaluation = (e) => {
    setEmailEvaluation(e.target.value);
  };

  const handleSubmitEvaluation = (e) => {
    e.preventDefault();
    let newArray = [];
    allEvaluations.map((el) => {
      if (el.email === emailEvaluation) {
        newArray.push(el);
      }
    });
    setBusquedaVisible(true);
    setEvaluationsArray(newArray);
  };

  const deleteEvaluation = (e) => {
    const deleteEmailConfirmation = prompt(
      "¿Está seguro de realizar esta eliminación? Para hacerlo escriba el email de este recurso"
    );
    if (deleteEmailConfirmation === emailEvaluation) {
      alert("se va a borrar estas seguro?");
      //aca hay que llamar a la funcion para eliminar este recurso
    } else {
      alert("el email no corresponde");
    }
  };

  const goToEvaluation = () => {
    console.log("ruta hacia la evaluacion");
  };
  return (
    <div>
      <h3>Aca buscamos </h3>
      <form onSubmit={handleSubmitEvaluation}>
        <input type="email" onChange={handleChangeEvaluation} />
      </form>

      {busquedaVisible ? (
        <ol>
          {evaluationsArray.map((el) => (
            <li key={el.id}>
              {el.email}, Evaluation: {el.evaluation}, Segment: {el.segment}
              <button onClick={goToEvaluation}>
                <Link to={`/renderuser/${el.id}`} className="nav-link">
                  ver evaluacion
                </Link>
              </button>
              <button onClick={deleteEvaluation} value={el.id}>
                Eliminar
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <h3>Esperando resultados</h3>
      )}
    </div>
  );
};

export default SearchEvaluation;
