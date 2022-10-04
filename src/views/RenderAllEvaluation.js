import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import date from "../auxiliaries/date";
// https://kinapp22.herokuapp.com
// http://localhost:3001
const RenderAllEvaluation = () => {
  const [allEvaluations, setAllEvaluations] = useState([]);

  useEffect(() => {
    axios.get("https://kinapp22.herokuapp.com/api/evaluations").then((res) => {
      //axios devuelve un objeto con mucha informacion, a nosotros nos interesa el data donde tenemos la respuesta de la api
      setAllEvaluations(res.data);
    });
  }, []);

  const goToEvaluation = (e) => {};

  return (
    <div>
      <h3>estas son las evaluaciones de la base de datos</h3>
      <ul>
        {allEvaluations.map((el) => (
          <li key={el.id}>
            {" "}
            {new Date(el.date).toLocaleDateString()}
            {"  "}
            {el.email}, Evaluacion: {el.evaluation}, Segmento: {el.segment}
            <button onClick={goToEvaluation}>
              <Link to={`/renderuser/${el.id}`} className="nav-link">
                ver evaluacion
              </Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderAllEvaluation;
