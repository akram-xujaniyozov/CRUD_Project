import FormView from "./FormView";
class EditFormView extends FormView {
  #editForm;
  constructor() {
    super();
    this.#editForm = this._forms[2];
  }

  editUserHandler(handler) {
    const getFormDatas = this._getFormDatas;
    const clearInputs = this._clearInputs;
    this.#editForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const userId = this.querySelector(".modal-body").dataset.userId;
      const formData = getFormDatas(this);
      handler(formData, userId);
      clearInputs(this);
    });
  }
}

export const editFormView = new EditFormView();
