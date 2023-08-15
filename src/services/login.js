import axios from "axios";
import client from "../api/client";

const login = async (credentials) => {
  try {
    const { email, password } = credentials;

    const { data } = await client.post("/sign-in", {
      email,
      password,
    });
    if (data.success) {
      return data.user;
    } else {
      const res = await client.post("/api/client", {
        email,
        password,
      });

      if (res.data.success) {
        const obj = res.data.client;
        return obj;
      } else {
        return data.messagge;
      }
    }
  } catch (error) {
    console.log(error);
  }

  //
};

export default login;
