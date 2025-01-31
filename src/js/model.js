import { API } from "./api";

const usersData = {
  meta: {},
  users: [],
};

// Get All users
const getAllUsers = async (query) => {
  try {
    const { data, status } = await API.get("", { params: query });
    if (status === 200) {
      if (!data) return;
      if (data.meta && data.items) {
        usersData.users = data.items;
        usersData.meta = data.meta;
      } else {
        usersData.users = data;
        usersData.meta = {};
      }
    }
  } catch (error) {
    console.error("Error getting user list:", error.message);
  }
};

// Get one user
const getUser = async (id) => {
  try {
    const { data, status } = await API.get(`/${id}`);
    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.error("Error getting single user:", error.message);
  }
};

// Create new user
const createUser = async (user) => {
  try {
    const response = await API.post("", user);
    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    console.error("Error creating new user:", error.message);
  }
};

// Edit user
const editUser = async (user, id) => {
  try {
    const response = await API.patch(`/${id}`, user);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error("Error editing user:", error.message);
  }
};

// Delete user
const deleteUser = async (id) => {
  try {
    const response = await API.delete(`/${id}`);
    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error("Error deleting user:", error.message);
  }
};

export { getAllUsers, getUser, createUser, editUser, deleteUser, usersData };
