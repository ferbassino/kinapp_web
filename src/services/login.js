import axios from "axios";
import client from "../api/client";

export const login = async (email, password) => {
  try {
    const signInRes = await client.post("/sign-in", {
      email,
      password,
    });

    if (signInRes.data.success) {
      const token = signInRes.data.user.token;
      localStorage.setItem("token", token);
    }

    return signInRes;
  } catch (error) {
    if (error?.response?.data) {
      return error.response.data;
    }
    console.log(`signIn method error: ${error}`);
    return { success: false, error: error.message };
  }
};

// const login = async (credentials) => {
//   try {
//     const { email, password } = credentials;

//     const { data } = await client.post("/sign-in", {
//       email,
//       password,
//     });

//     if (data.success) {
//       return data.user;
//     } else {
//       const res = await client.post("/api/client", {
//         email,
//         password,
//       });

//       if (res.data.success) {
//         const obj = res.data.client;
//         return obj;
//       } else {
//         return data.messagge;
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   //
// };

// export default login;
