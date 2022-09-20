import "./App.css";

import Home from "./components/Home";
import DataForm from "./components/form/DataForm";
import RenderUser from "./components/RenderUser";
//importacion para las rutas, hay que instalarlo con npm
import { Routes, Route } from "react-router-dom";
import RenderAllEvaluation from "./components/RenderAllEvaluation";
import SearchEvaluation from "./components/SearchEvaluation";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      {/* browserrouter como hijo tiene a Routes, dentro del cual definimos las rutas con la sintaxis que se ve */}
      <Routes>
        {/* en Route definimos el path que es la url, el elemento que se el componente y la palabnra "exact" */}
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/dataform" element={<DataForm />} exact></Route>
        <Route path="/renderuser/:id" element={<RenderUser />} exact></Route>
        <Route
          path="/renderall"
          element={<RenderAllEvaluation />}
          exact
        ></Route>
        <Route
          path="/searchevaluation"
          element={<SearchEvaluation />}
          exact
        ></Route>
        {/* las rutas se pueden anidar, o sea que dentro de una ruta se pone otra ruta, en el path de la ruta anidada es lo que se agrega a la ruta madre, atencion va si la "/" pero tambien hay que usar un hook que se llama outlet, y se coloca dabajo del lo que se renderiza en el return en el componente */}
      </Routes>
    </div>
  );
}

export default App;
