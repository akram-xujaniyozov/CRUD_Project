class ActionsView {
  #tableBody;
  #addBtn;
  #editBtn;
  #modalCreateForm;
  constructor() {
    this.#tableBody = document.querySelector("#table-body");
    this.#addBtn = document.querySelector("#add-btn");
    this.#modalCreateForm = document.querySelector("#form-create");
  }

  addUser(handler) {
    const formModalEl = this.#modalCreateForm;
    this.#addBtn.addEventListener("click", function () {
      formModalEl.innerHTML = "";
      const htmlFormElements = handler();
      formModalEl.insertAdjacentHTML("beforeend", htmlFormElements);
    });
  }

  editUser() {}

  deleteUser(handler) {
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
