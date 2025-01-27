import * as bootstrap from "bootstrap";
import "../sass/styles.scss";
import {
  getAllUsers,
  getUser,
  createUser,
  editUser,
  deleteUser,
  usersData,
} from "./model";
import {
  tableView,
  addFormView,
  searchFormView,
  actionsView,
  paginationView,
  editFormView,
} from "./view";
import { paginationQuries } from "./utils/helpers";
import {
  setPaginationStorage,
  getPaginationStorage,
  clearPaginationStorage,
} from "./utils/dataStorage";

// Loading users
async function controllerLoadUsers(query) {
  tableView.renderSpinner();
  await getAllUsers(query);
  tableView.renderTable(usersData.users);
  paginationView.renderPagination(usersData.meta);
}

async function controllerLoadOneUser(id) {
  return await getUser(id);
}

// Searching Users
function controllerSearchUser(value) {
  controllerLoadUsers({ fullname: value });
}

// Cancel search user
function controllerCancelSearchUser() {
  controllerLoadUsers(paginationQuries(getPaginationStorage()));
}

// Creating user
async function controllerCreateUser(newUser) {
  const response = await createUser(newUser);
  if (response.status === 201) {
    controllerLoadUsers(paginationQuries(getPaginationStorage()));
  }
}

// Editing user
async function controllerEditUser(user, id) {
  const response = await editUser(user, id);
  if (response.status === 200) {
    controllerLoadUsers(paginationQuries(getPaginationStorage()));
  }
}

// Deleting user by id
async function controllerDeleteUser(id) {
  const response = await deleteUser(id);
  if (response.status === 200) {
    controllerLoadUsers(paginationQuries(getPaginationStorage()));
  }
}

function controllerCurrentPagination(number) {
  if (!isNaN(number)) {
    setPaginationStorage(number);
    controllerLoadUsers(paginationQuries(number));
  }
}

// Initial function
const INIT = function () {
  controllerLoadUsers(paginationQuries(getPaginationStorage()));
  actionsView.addUserHandler();
  actionsView.updateUserHanler(controllerLoadOneUser);
  actionsView.deleteUserHandler(controllerDeleteUser);
  addFormView.createUserHandler(controllerCreateUser);
  editFormView.editUserHandler(controllerEditUser);
  searchFormView.searchUserHandler(controllerSearchUser);
  searchFormView.cancelSearchUserHandler(controllerCancelSearchUser);
  paginationView.findCurrentPaginationHandler(controllerCurrentPagination);
  paginationView.nextPaginationHandler(controllerCurrentPagination);
  paginationView.prevPaginationHandler(controllerCurrentPagination);
};

INIT();
