import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// https://kinapp22.herokuapp.com
// http://localhost:3001
const SearchEvaluation = () => {
  const [allEvaluations, setAllEvaluations] = useState([]);
  const [emailEvaluation, setEmailEvaluation] = useState("");
  const [busquedaVisible, setBusquedaVisible] = useState(false);
  const [evaluationsArray, setEvaluationsArray] = useState([]);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios.get("https://kinapp22.herokuapp.com/api/evaluations").then((res) => {
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
        setId(el.id);
        setEmail(el.email);
      }
    });
    setBusquedaVisible(true);
    setEvaluationsArray(newArray);
  };
  // https://kinapp22.herokuapp.com
  // http://localhost:3001
  const deleteEvaluation = (e) => {
    const deleteConfirm = window.confirm(
      "¿Esta seguro que desea eliminar esta evaluación?"
    );
    if (deleteConfirm) {
      axios
        .delete(`https://kinapp22.herokuapp.com/api/evaluations/${id}`)
        .then((res) => {
          alert(`la evaluación de ${email} ha sido eliminada`);
        });
    } else {
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
              {" "}
              {new Date(el.date).toLocaleDateString()}
              {"  "}
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
