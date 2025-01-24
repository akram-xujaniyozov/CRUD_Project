import * as bootstrap from "bootstrap";
import "../sass/styles.scss";
import { getAllUsers, createUser, deleteUser, usersData } from "./model";
import {
  tableView,
  addFormView,
  searchFormView,
  actionsView,
  paginationView,
} from "./view";

const paginationQuries = (number = 1) => {
  return { page: number, limit: 8 };
};

// Loading users
async function controllerLoadUsers(query) {
  tableView.renderSpinner();
  await getAllUsers(query);
  tableView.renderTable(usersData.users);
  paginationView.renderPagination(usersData.meta);
}

// Searching Users
function controllerSearchUser(value) {
  controllerLoadUsers({ fullname: value });
}

// Cancel search user
function controllerCancelSearchUser() {
  controllerLoadUsers(paginationQuries());
}

// Creating user
async function controllerCreateUser(newUser) {
  const response = await createUser(newUser);
  if (response.status === 201) {
    controllerLoadUsers(paginationQuries());
  }
}

// Deleting user by id
async function controllerDeleteUser(id) {
  const response = await deleteUser(id);
  if (response.status === 200) {
    controllerLoadUsers(paginationQuries());
  }
}

function controllerCurrentPagination(number) {
  if (!isNaN(number)) controllerLoadUsers(paginationQuries(number));
}

// Initial function
const INIT = function () {
  controllerLoadUsers(paginationQuries());
  actionsView.deleteUser(controllerDeleteUser);
  actionsView.addUser(addFormView.renderFormElements);
  addFormView.createUserHandler(controllerCreateUser);
  searchFormView.searchUserHandler(controllerSearchUser);
  searchFormView.cancelSearchUserHandler(controllerCancelSearchUser);
  paginationView.getCurrentPagination(controllerCurrentPagination);
  paginationView.nextPagination(controllerCurrentPagination);
  paginationView.prevPagination(controllerCurrentPagination);
};

INIT();
