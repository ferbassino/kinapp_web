import React, { useEffect, useState } from "react";
import login from "../services/login";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import Home from "./Home";
import DataForm from "../components/form/DataForm";
import RenderUser from "./RenderUser";
import RenderAllEvaluation from "./RenderAllEvaluation";
import SearchEvaluation from "./SearchEvaluation";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(
      "loggedEvaluationAppUser"
    );
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("loggedEvaluationAppUser");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login({
        username,
        password,
      });
      console.log(user);
      setUser(user);
      //guardamos el token en el local storage

      window.localStorage.setItem(
        "loggedEvaluationAppUser",
        JSON.stringify(user)
      );
      setUsername("");
      setPassword("");
    } catch (error) {
      setErrorMessage("wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  return (
    <div>
      {user ? (
        <>
          <NavBar handleLogout={handleLogout} />
          <Routes>
            {/* en Route definimos el path que es la url, el elemento que se el componente y la palabnra "exact" */}
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/dataform" element={<DataForm />} exact></Route>
            <Route
              path="/renderuser/:id"
              element={<RenderUser />}
              exact
            ></Route>
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
        </>
      ) : (
        <LoginForm
          username={username}
          password={password}
          handleLogin={handleLogin}
          handleUsername={(e) => setUsername(e.target.value)}
          handlePassword={(e) => setPassword(e.target.value)}
        />
      )}
    </div>
  );
};

export default Main;
