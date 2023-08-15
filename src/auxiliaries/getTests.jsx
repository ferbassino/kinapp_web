import client from "../api/client";

const getTest = async () => {
  try {
    const allTests = await client.get("/api/motion/motionTests");
    return allTests;
  } catch (error) {
    console.log(error);
  }
};

export default getTest;
