import client from "../api/client";

const getCurrentUserClient = async (user = []) => {
  try {
    const allClients = await client.get("/api/clients");

    if (allClients.data.success) {
      const allCurrentUserClients = allClients.data.clients.filter(
        (el) => el.user[0] === user.id
      );

      return allCurrentUserClients;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getCurrentUserClient;
