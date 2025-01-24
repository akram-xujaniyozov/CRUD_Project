import FormView from "./FormView";

export class AddFormView extends FormView {
  #actionsForm;
  constructor() {
    super();
    this.#actionsForm = this._forms[1];
  }

  createUserHandler(handler) {
    this.#actionsForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const date = new Date(this.date.value);
      const formattedDate = Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(date);

      const formData = new FormData();
      formData.append("fullname", this.fullname.value);
      formData.append("date", formattedDate);
      formData.append("status", this.status.value);
      formData.append("phone", this.phone.value);
      formData.append("mail", this.mail.value);
      formData.append("address", this.address.value);

      this.submit.setAttribute("data-bs-dismiss", "modal");
      this.submit.click();

      handler(formData);

      this.fullname.value = "";
      this.status.value = "Success";
      this.phone.value = "";
      this.date.value = "";
      this.mail.value = "";
      this.address.value = "";
    });
  }
}

export const addFormView = new AddFormView();
