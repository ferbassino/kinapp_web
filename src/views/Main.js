import React, { useEffect, useState } from "react";
import login from "../services/login";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import Home from "./Home";
import Error from "./Error";
import Client from "./bronze/Client";
import Introduction from "./general/Introduction";
import Admin from "./admin/Admin";
import client from "../api/client";
//use history nos permite decirle donde queremos que comience a navegar el cliente
import { Routes, Route, useNavigate } from "react-router-dom";
import Kinapp from "./Kinapp";
import Landing from "./landing/Landing";
import Reader from "./reader/Reader";
import Editor from "./editor/Editor";
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
import { Navigate } from "react-router-dom";
import ReaderMotions from "./reader/ReaderMotions";
import BronzeProfile from "./bronze/BronzeProfile";
import Aside from "../components/Aside";
import useScreenSize from "../auxiliaries/sizeScreen";
import DropdownComp from "../components/DropDown";
import Footer from "../components/Footer";
import JornadasVistaMov from "../components/JornadasVistaMov";
import Loading from "../components/Loading";
import { useNav } from "../navZustand";
import Jornadas from "../components/Jornadas";
import DeviceUse from "./general/DeviceUse";
import Statistics from "./general/Statistics";
import Documentation from "./general/Documentation";
import EditorClients from "./editor/EditorClients";
import EditorClient from "./editor/EditorClient";
import EditorMotion from "./editor/EditorMotion";
import EditorMotions from "./editor/EditorMotions";
import EditorStatistics from "./editor/EditorStatistics";
import DeviceUseJump from "./general/DeviceUseJump";

const Main = () => {
  const { navOption } = useNav();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [webCode, setWebCode] = useState("");
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
  const [selectView, setSelectView] = useState("");
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(true);

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
    const oldDay = localStorage.getItem("session_date");
    const newDay = Date.now();

    if (newDay - oldDay > 86400000) {
      handleLogout();
    }

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
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("session_date");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await login({
        email,
        password,
      });

      if (data.mobCode === webCode) {
        try {
          const result = await client.put(
            `user/${data.id}`,
            {
              mobCode: "0000",
            },
            { new: true }
          );

          result.json({ updatedUser: result });
        } catch (error) {
          console.log(error);
        }
      } else {
        alert(
          "el codigo de verificacion no es válido, obtenga uno válido de la aplicación movil"
        );
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("session_date");
        return;
      }

      setLoading(true);

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
      setWebCode("");
      setPassword("");
      navigate("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage("wrong credentials");
      alert("wrong username or password");

      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
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
                      <Aside userName={userName} roles={roles} />
                    </div>
                    <div className="col-md-3"></div>
                  </>
                ) : null}

                <div className="col-md-9">
                  {colapseVisible ? (
                    <DropdownComp userName={userName} roles={roles} />
                  ) : null}
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Home
                          selectedView={selectView}
                          userName={userName}
                          roles={roles}
                        />
                      }
                      exact
                    ></Route>
                    <Route
                      path="/introduction"
                      element={<Introduction />}
                      exact
                    ></Route>
                    <Route
                      path="/deviceuse"
                      element={<DeviceUse />}
                      exact
                    ></Route>
                    <Route
                      path="/deviceuse/jump"
                      element={<DeviceUseJump />}
                      exact
                    ></Route>
                    <Route
                      path="/statistics"
                      element={<Statistics />}
                      exact
                    ></Route>
                    <Route
                      path="/documentation"
                      element={<Documentation />}
                      exact
                    ></Route>
                    <Route path="/kinapp" element={<Kinapp />} exact></Route>
                    <Route
                      path="/jornadas"
                      element={<Jornadas />}
                      exact
                    ></Route>
                    {/* --------- ADMIN ----------- */}
                    <Route element={<AdminRoutes admin={admin} />}>
                      <Route path="/admin" element={<Admin />} exact></Route>
                      <Route
                        path="/admin/overview"
                        element={<OverView />}
                        exact
                      ></Route>
                      <Route
                        path="/admin/users"
                        element={<Users />}
                        exact
                      ></Route>
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
                    {/* --------- CLIENT BRONZE ----------- */}
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
                    {/* --------- Reader ----------- */}
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
                    </Route>
                    {/* --------- Reader ----------- */}
                    <Route element={<EditorRoutes editor={editor} />}>
                      <Route path="/editor" element={<Editor />} exact></Route>
                      {/* <Route
                        path="/editor/overview"
                        element={<EditorOverView />}
                        exact
                      ></Route> */}
                      {/* <Route
                        path="/editor/navigation"
                        element={<EditorNavigation />}
                        exact
                      ></Route> */}
                      <Route
                        path="/editor/clients"
                        element={<EditorClients />}
                        exact
                      ></Route>
                      <Route
                        path="/editor/client"
                        element={<EditorClient />}
                        exact
                      ></Route>
                      <Route
                        path="/editor/motion"
                        element={<EditorMotion />}
                        exact
                      ></Route>
                      <Route
                        path="/editor/motions"
                        element={<EditorMotions user={user} />}
                        exact
                      ></Route>
                      <Route
                        path="/editor/statistics"
                        element={<EditorStatistics user={user} />}
                        exact
                      ></Route>
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
                  webCode={webCode}
                  handleLogin={handleLogin}
                  handleEmail={(e) => setEmail(e.target.value)}
                  handlePassword={(e) => setPassword(e.target.value)}
                  handleWebCode={(e) => setWebCode(e.target.value)}
                />
              </div>
              <Landing />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Main;
