import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const RenderAllEvaluation = () => {
  const [allEvaluations, setAllEvaluations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/evaluations").then((res) => {
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
