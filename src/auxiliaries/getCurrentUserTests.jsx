import client from "../api/client";

const getCurrentUserTests = async (user = []) => {
  try {
    const allTests = await client.get("/api/motion/motionTests");
    if (allTests.data.success) {
      const allCurrentUserTests = allTests.data.motionTests.filter(
        (el) => el.userId[0] === user.id
      );

      return allCurrentUserTests;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getCurrentUserTests;
