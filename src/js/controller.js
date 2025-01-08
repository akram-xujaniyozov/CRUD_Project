import "../sass/styles.scss";
import * as bootstrap from "bootstrap";
import { getAllUsers, createUser, usersData } from "./model";
import { TableView } from "./view/";

// Getting all forms
const forms = document.forms;

// Loading users
async function controllerLoadUsers() {
  await getAllUsers();
  const tableView = new TableView();
  tableView.renderTable(usersData.users);
}

controllerLoadUsers();

// get form element to send data
const sendForm = forms[1];
sendForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const date = new Date(sendForm.date.value);
  const formattedDate = Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);

  const formData = new FormData();
  formData.append("fullname", sendForm.fullname.value);
  formData.append("date", formattedDate);
  formData.append("status", sendForm.status.value);
  formData.append("phone", sendForm.phone.value);
  formData.append("mail", sendForm.mail.value);
  formData.append("address", sendForm.address.value);

  const response = await createUser(formData);
  if (response.status === 201) {
    controllerLoadUsers();
  }
});
