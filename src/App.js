import "./App.css";
import { useState, useEffect } from "react";

import Home from "./components/Home";
import DataForm from "./components/form/DataForm";
import RenderUser from "./components/RenderUser";
//importacion para las rutas, hay que instalarlo con npm
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      {/* definimos las rutas con browserRouter */}
      <BrowserRouter>
        {/* como hijo tiene a Routes, dentro del cual definimos las rutas con la sintaxis que se ve */}
        <Routes>
          {/* en Route definimos el path que es la url, el elemento que se el componente y la palabnra "exact" */}
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/dataform" element={<DataForm />} exact></Route>
          <Route path="/renderuser" element={<RenderUser />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
