import AJAX_CALL from "./api";

const usersData = {
  meta: {},
  users: [],
};

export const getAllUsers = async () => {
  const response = await AJAX_CALL().get();
  console.log(response);
};

// export const createUser = async (user) => {
//   await axios.post();
// };
