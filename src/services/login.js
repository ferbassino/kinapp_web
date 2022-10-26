import axios from "axios";
// https://kinapp22.herokuapp.com
// http://localhost:3001
const baseUrl = "https://kinapp22.herokuapp.com/api/login";
//la funcion login hace la peticion post al servidor, recibe dos parametros, la url y las credenciales, las credenciales vienen como username y password que se envia para validarlo en el servidor con la base de datos y crear un token. en la respuesta viene el username y el token
const login = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);

  return data;
};

export default login;
