import React, { useEffect, useState } from "react";
import login from "../services/login";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import Home from "./Home";
import Error from "./Error";
import Client from "./bronze/Client";

import Admin from "./admin/Admin";
//use history nos permite decirle donde queremos que comience a navegar el cliente
import { Routes, Route, useNavigate } from "react-router-dom";
import Kinapp from "./Kinapp";
import Landing from "./landing/Landing";
import Reader from "./reader/Reader";
import Editor from "./Editor";
import OverView from "./admin/Overview";
import Users from "./admin/Users";
import Clients from "./admin/Clients";
import Motion from "./admin/Motion";
import AdminRoutes from "../components/utils/AdminRoutes";
import ReaderRoutes from "../components/utils/ReaderRoutes";
import EditorRoutes from "../components/utils/EditorRoutes";
import ClientRoutes from "../components/utils/ClientRoutes";
import ReaderOverView from "./reader/ReaderOverview";
import ReaderNavigation from "./reader/ReaderNavigation";
import ReaderClients from "./reader/ReaderClients";
import ReaderMotion from "./reader/ReaderMotion";
import ClientView from "../components/ClientView";
import ReaderClient from "./reader/ReaderClient";
import ReaderMotions from "./reader/ReaderMotions";
import BronzeProfile from "./bronze/BronzeProfile";
import Aside from "../components/Aside";
import useScreenSize from "../auxiliaries/sizeScreen";
import DropdownComp from "../components/DropDown";
import Footer from "../components/Footer";
import JornadasVistaMov from "../components/JornadasVistaMov";

const Main = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [roles, setRoles] = useState("");
  const [admin, setAdmin] = useState(false);
  const [reader, setReader] = useState(false);
  const [editor, setEditor] = useState(false);
  const [bronze, setBronze] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [colapseVisible, setColapseVisible] = useState(false);
  const [asideVisible, setAsideVisible] = useState(false);
  const [selectMovement, setSelectMovement] = useState("");

  const navigate = useNavigate();

  const { width } = useScreenSize();

  useEffect(() => {
    if (width > 768) {
      setAsideVisible(true);
      setColapseVisible(false);
    }
    if (width < 768) {
      setAsideVisible(false);
      setColapseVisible(true);
    }
  }, [width]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(
      "loggedEvaluationAppUser"
    );
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      setRoles(user.roles);
      setUserName(user.userName);

      if (user.roles === "admin") setAdmin(true);
      if (user.roles === "reader") setReader(true);
      if (user.roles === "editor") setEditor(true);
      if (user.roles === "bronze") setBronze(true);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    setAdmin(false);
    setReader(false);
    setEditor(false);
    setBronze(false);
    setRoles("");

    window.localStorage.removeItem("loggedEvaluationAppUser");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await login({
        email,
        password,
      });

      setRoles(data.roles);
      setUser(data);
      setUserName(data.userName);
      if (data.roles === "admin") setAdmin(true);
      if (data.roles === "reader") setReader(true);
      if (data.roles === "editor") setEditor(true);
      if (data.roles === "bronze") setBronze(true);

      if (!data) {
        setErrorMessage("wrong credentials");
        alert("wrong username or password");
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        return;
      }

      window.localStorage.setItem(
        "loggedEvaluationAppUser",
        JSON.stringify(data)
      );

      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setErrorMessage("wrong credentials");
      alert("wrong username or password");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleSearch = (e) => {
    setSelectMovement(e);
  };

  return (
    <>
      {user ? (
        <div className="column">
          <div>
            <NavBar
              handleLogout={handleLogout}
              userName={userName}
              roles={roles}
            />
          </div>
          <div style={{ height: 57, backgroundColor: "#fff" }}></div>
          <div className="row">
            {asideVisible ? (
              <>
                <div className="col-md-3 position-fixed">
                  <Aside handleSearch={handleSearch} />
                </div>
                <div className="col-md-3"></div>
              </>
            ) : null}

            <div className="col-md-9">
              {colapseVisible ? <DropdownComp /> : null}
              <Routes>
                <Route
                  path="/"
                  element={<Home selectMov={selectMovement} />}
                  exact
                ></Route>
                <Route path="/kinapp" element={<Kinapp />} exact></Route>
                <Route
                  path="/jorn/movement"
                  element={<JornadasVistaMov />}
                  exact
                ></Route>

                <Route element={<AdminRoutes admin={admin} />}>
                  <Route path="/admin" element={<Admin />} exact></Route>
                  <Route
                    path="/admin/overview"
                    element={<OverView />}
                    exact
                  ></Route>
                  <Route path="/admin/users" element={<Users />} exact></Route>
                  <Route
                    path="/admin/clients"
                    element={<Clients />}
                    exact
                  ></Route>
                  <Route
                    path="/admin/motion"
                    element={<Motion />}
                    exact
                  ></Route>
                </Route>
                <Route element={<ReaderRoutes reader={reader} />}>
                  <Route path="/reader" element={<Reader />} exact></Route>
                  <Route
                    path="/reader/overview"
                    element={<ReaderOverView />}
                    exact
                  ></Route>
                  <Route
                    path="/reader/navigation"
                    element={<ReaderNavigation />}
                    exact
                  ></Route>
                  <Route
                    path="/reader/clients"
                    element={<ReaderClients />}
                    exact
                  ></Route>
                  <Route
                    path="/reader/motion"
                    element={<ReaderMotion />}
                    exact
                  ></Route>
                  <Route
                    path="/reader/motions"
                    element={<ReaderMotions />}
                    exact
                  ></Route>
                  <Route
                    path="/reader/client"
                    element={<ReaderClient />}
                    exact
                  ></Route>
                </Route>
                <Route element={<ClientRoutes bronze={bronze} />}>
                  <Route path="/client" element={<Client />} exact></Route>
                  <Route
                    path="/bronze/profile"
                    element={<BronzeProfile />}
                    exact
                  ></Route>
                </Route>
                <Route path="*" element={<Error />}></Route>

                {/* acá definimos una ruta dinamica para decirle que le vamos a pasar un parametro por la url */}
                {/* <Route
                  path="/renderuser/:id"
                  element={<RenderUser />}
                  exact
                ></Route> */}
                <Route element={<EditorRoutes editor={editor} />}>
                  <Route path="/editor" element={<Editor />} exact></Route>
                </Route>
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="container  text-center">
            <LoginForm
              email={email}
              password={password}
              handleLogin={handleLogin}
              handleEmail={(e) => setEmail(e.target.value)}
              handlePassword={(e) => setPassword(e.target.value)}
            />
          </div>
          <Landing />
        </>
      )}
    </>
  );
};

export default Main;
