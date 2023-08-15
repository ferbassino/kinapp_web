const getLocalStorageUser = () => {
  const userString = window.localStorage.getItem("loggedEvaluationAppUser");
  const user = JSON.parse(userString);
  return user;
};

export default getLocalStorageUser;
