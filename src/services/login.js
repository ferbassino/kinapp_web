import axios from "axios";
// https://kinapp22.herokuapp.com
// http://localhost:3001
const baseUrl = "https://kinapp22.herokuapp.com/api/login";

const login = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);
  console.log(data);
  return data;
};

export default login;
