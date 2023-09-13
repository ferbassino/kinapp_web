import React, { createContext, useContext, useEffect, useState } from "react";
import client from "../api/client";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [loginPending, setLoginPending] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const fetchUser = async () => {
    setLoginPending(true);
    const token = localStorage.getItem("token");

    if (token !== null) {
      const res = await client.get("/profile", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      if (!res.data.verified) {
        setIsVerified(res.data.verified);
        setLoginPending(false);
        return;
      }

      if (res.data.success) {
        setProfile(res.data);
        setIsLoggedIn(true);
      } else {
        setProfile({});
        setIsLoggedIn(false);
      }
      setLoginPending(false);
    } else {
      setProfile({});
      setIsLoggedIn(false);
      setLoginPending(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        profile,
        setProfile,
        loginPending,
        setLoginPending,
        isVerified,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
