export default class FormView {
  _forms;
  constructor() {
    this._forms = document.forms;
  }

  _getFormDatas(form) {
    const date = new Date(form.date.value);
    const formattedDate = Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);

    const formData = new FormData();
    formData.append("fullname", form.fullname.value);
    formData.append("date", formattedDate);
    formData.append("status", form.status.value);
    formData.append("phone", form.phone.value);
    formData.append("mail", form.mail.value);
    formData.append("address", form.address.value);

    form.submit.setAttribute("data-bs-dismiss", "modal");
    form.submit.click();

    return formData;
  }

  _clearFormElements(firstForm, secondForm) {
    firstForm.innerHTML = "";
    secondForm.innerHTML = "";
  }

  _clearInputs(form) {
    form.fullname.value = "";
    form.status.value = "Success";
    form.phone.value = "";
    form.date.value = "";
    form.mail.value = "";
    form.address.value = "";
  }

  _renderFormElements(user = {}) {
    let formattedDate;
    if (Object.keys(user).length > 0) {
      const date = new Date(user.date);
      formattedDate = Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
        .format(date)
        .split(".")
        .reverse()
        .join("-");
    }

    return `
      <div class="modal-body" data-user-id=${user.id}>
        <div class="mb-3">
          <label class="form-label">User Name</label>
          <input
            type="text"
            class="form-control"
            name="fullname"
            value="${user.fullname || ""}"
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Date</label>
          <input 
            type="date" 
            class="form-control" 
            name="date" 
            value="${formattedDate || ""}"
            required 
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Status</label>
          <select
            name="status"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option value="Success" ${
              user.status === "Success" ? "selected" : ""
            }>Success</option>
            <option value="Failed" ${
              user.status === "Failed" ? "selected" : ""
            }>Failed</option>
            <option value="In Progress" ${
              user.status === "In Progress" ? "selected" : ""
            }>In Progress</option>
          </select>
        </div>
        <div class="mb-3">
          <label  class="form-label">Phone</label>
          <input type="text" class="form-control" name="phone" required value="${
            user.phone || ""
          }" />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" name="mail" required value="${
            user.mail || ""
          }" />
        </div>
        <div class="mb-3">
          <label class="form-label">Address</label>
          <input type="text" class="form-control" name="address" required value="${
            user.address || ""
          }" />
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary text-white"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button
          id="submit"
          type="submit"
          class="btn btn-success text-white"
        >
          Submit
        </button>
      </div>
    `;
  }
}
