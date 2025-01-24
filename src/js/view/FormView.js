export default class FormView {
  _forms;
  constructor() {
    this._forms = document.forms;
  }
  renderFormElements(user) {
    return `
      <div class="modal-body">
        <div class="mb-3">
          <label for="fullname" class="form-label">User Name</label>
          <input
            type="text"
            class="form-control"
            id="fullname"
            required
          />
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">Date</label>
          <input type="date" class="form-control" id="date" required />
        </div>
        <div class="mb-3">
          <label for="status" class="form-label">Status</label>
          <select
            id="status"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option value="Success">Success</option>
            <option value="Failed">Failed</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input type="text" class="form-control" id="phone" required />
        </div>
        <div class="mb-3">
          <label for="mail" class="form-label">Email</label>
          <input type="email" class="form-control" id="mail" required />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <input type="text" class="form-control" id="address" required />
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

// export const formView = new FormView();
// formView.renderFormElements();
