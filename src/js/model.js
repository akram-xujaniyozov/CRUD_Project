import { API } from "./api";

const usersData = {
  meta: {},
  users: [],
};

// Get All users
const getAllUsers = async (query) => {
  const { data } = await API.get("", { params: query });
  if (!data) return;
  if (data.meta && data.items) {
    usersData.users = data.items;
    usersData.meta = data.meta;
  } else {
    usersData.users = data;
    usersData.meta = {};
  }
};

// Get one user
const getUser = async (id) => {
  const { data } = await API.get(`/${id}`);
  return data;
};

// Create new user
const createUser = async (user) => {
  return await API.post("", user);
};

// Edit user
const editUser = async (user, id) => {
  return await API.patch(`/${id}`, user);
};

// Delete user
const deleteUser = async (id) => {
  return await API.delete(`/${id}`);
};

export { getAllUsers, getUser, createUser, editUser, deleteUser, usersData };
