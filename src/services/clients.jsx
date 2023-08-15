import client from "../api/client";

export async function getClients() {
  try {
    const res = await client.get("/api/clients");
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
