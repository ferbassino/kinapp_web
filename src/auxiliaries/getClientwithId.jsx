import client from "../api/client";

const getClientWithId = async (id = "") => {
  try {
    const res = await client.get(`/api/client/${id}`);
    const clientData = res.data.client;
    return clientData;
  } catch (error) {
    console.log(error);
  }
};

export default getClientWithId;
