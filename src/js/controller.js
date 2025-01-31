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
  toastView,
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
  controllerLoadUsers(paginationQuries());
}

// Creating user
async function controllerCreateUser(newUser) {
  await createUser(newUser);
  await controllerLoadUsers(paginationQuries());
}

// Editing user
async function controllerEditUser(user, id) {
  await editUser(user, id);
  await controllerLoadUsers(paginationQuries());
}

// Deleting user by id
async function controllerDeleteUser(id) {
  await deleteUser(id);
  await controllerLoadUsers(paginationQuries());
}

function controllerCurrentPagination(number) {
  if (!isNaN(number)) {
    setPaginationStorage(number);
    controllerLoadUsers(paginationQuries(number));
  }
}

// Initial function
const INIT = function () {
  controllerLoadUsers(paginationQuries());
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
