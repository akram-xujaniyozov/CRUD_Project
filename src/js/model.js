import AJAX_CALL from "./api";

export const usersData = {
  meta: {},
  users: [],
};

export const getAllUsers = async () => {
  const { data } = await AJAX_CALL().get("/users");
  // usersData.meta = data[0].meta;
  // usersData.users = data[0].users;
  usersData.users = data;
};

export const createUser = async (user) => {
  return await AJAX_CALL().post("/users", user);
};
