import React, { useEffect, useState } from "react";
import login from "../services/login";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import Home from "./Home";
import Error from "./Error";
import Modulo1 from "./Modulo1";
import RenderUser from "./RenderUser";
import Modulo3 from "./Modulo3";
import Modulo2 from "./Modulo2";
//use history nos permite decirle donde queremos que comience a navegar el cliente
import { Routes, Route, useNavigate } from "react-router-dom";
import Test from "./Test";

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  //vamos a usar usenavigate para redireccionar programaticamente
  const navigate = useNavigate();

  //utilizamos un efecto para leer el local storage, lo guardamos en loggedUserJson, y si este existe, o sea si hay algo guardado con ese nombre en el local storage, guardamos ese objeto en user y cambiamos el estado de user con setUser(user). el local storage tiene el objeto loggedEvaluationAppUser si lo habiamos seteado cuando llamamos a la funcion login y el usuario existia, esa funcion nos devuelve el username y el token
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

  //funcion del logeo

  const handleLogin = async (e) => {
    e.preventDefault();
    //enviamos a la funcion login como parametros, el username y el password, que es la funcion que hace la peticion al servidor y guardamos lo que retorna en user
    try {
      const user = await login({
        username,
        password,
      });
      //login retorna el user y el token que se generaron en el servidor una vez que se validó que el usuario existe en la base de datos
      setUser(user);

      //guardamos el user en el local storage para mantener la sesion, a setItem le damos dos parametros, el nombre de lo que vamos a guardar, y el objeto que gardamos pasado a string, en este caso el objeto user que trae el username y el token

      window.localStorage.setItem(
        "loggedEvaluationAppUser",
        JSON.stringify(user)
      );
      //seteamos username y password para que se limpie el formulario
      setUsername("");
      setPassword("");
      //hacemos que navegue al home luego de autenticarse
      navigate("/");
    } catch (error) {
      setErrorMessage("wrong credentials");
      alert("nombre de usurio o contraseña incorrectos");
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
            {/* vamos a manejar el error de la ruta que tiene react router dom */}
            <Route path="*" element={<Error />}></Route>
            <Route path="/modulo1" element={<Modulo1 />} exact></Route>
            {/* acá definimos una ruta dinamica para decirle que le vamos a pasar un parametro por la url */}
            <Route
              path="/renderuser/:id"
              element={<RenderUser />}
              exact
            ></Route>
            <Route path="/modulo3" element={<Modulo3 />} exact></Route>
            <Route path="/modulo2" element={<Modulo2 />} exact></Route>
            <Route path="/test" element={<Test />} exact></Route>
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
