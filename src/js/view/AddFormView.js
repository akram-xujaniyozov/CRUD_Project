import FormView from "./FormView";

export class AddFormView extends FormView {
  #createForm;
  constructor() {
    super();
    this.#createForm = this._forms[1];
  }

  createUserHandler(handler) {
    const getFormDatas = this._getFormDatas;
    const clearInputs = this._clearInputs;
    this.#createForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = getFormDatas(this);
      handler(formData);
      clearInputs(this);
    });
  }
}

export const addFormView = new AddFormView();
