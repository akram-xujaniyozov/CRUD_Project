import FormView from "./FormView";
class ActionsView extends FormView {
  #tableBody;
  #addBtn;
  #modalCreateForm;
  #modalEditForm;
  constructor() {
    super();
    this.#tableBody = document.querySelector("#table-body");
    this.#addBtn = document.querySelector("#add-btn");
    this.#modalCreateForm = document.querySelector("#form-create");
    this.#modalEditForm = document.querySelector("#form-edit");
  }

  addUserHandler() {
    const formCreateModal = this.#modalCreateForm;
    const formUpdateModal = this.#modalEditForm;
    const htmlFormElements = this._renderFormElements;
    const clear = this._clearFormElements;
    this.#addBtn.addEventListener("click", function () {
      clear(formCreateModal, formUpdateModal);
      formCreateModal.insertAdjacentHTML("beforeend", htmlFormElements());
    });
  }

  updateUserHanler(handler) {
    const formUpdateModal = this.#modalEditForm;
    const formCreateModal = this.#modalCreateForm;
    const htmlFormElements = this._renderFormElements;
    const clear = this._clearFormElements;
    this.#tableBody.addEventListener("click", async function (event) {
      const updateBtn = event.target.closest("#edit-btn");
      if (!updateBtn) return;
      const userId = updateBtn.dataset.userId;
      const response = await handler(userId);
      if (response) {
        clear(formCreateModal, formUpdateModal);
        formUpdateModal.insertAdjacentHTML(
          "beforeend",
          htmlFormElements(response)
        );
      }
    });
  }

  deleteUserHandler(handler) {
    this.#tableBody.addEventListener("click", function (event) {
      const deleteBtn = event.target.closest("#delete-btn");
      if (!deleteBtn) return;
      if (
        window.confirm(`Haqiqatdan foydalanuvchini o'chirishdan xohlaysizmi!`)
      ) {
        const userId = deleteBtn.getAttribute("data-user-id");
        if (userId) {
          handler(userId);
        }
      }
    });
  }
}

export const actionsView = new ActionsView();
