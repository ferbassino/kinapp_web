import client from "../api/client";

export async function getUsers() {
  try {
    const res = await client.get("/users");
    const data = res.data;

    return data;
  } catch (error) {
    console.log(error);
  }
}
