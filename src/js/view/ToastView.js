import * as bootstrap from "bootstrap";
class ToastView {
  #toastContainer;
  constructor() {
    this.#toastContainer = document.getElementById("toast-container");
  }

  renderToast() {
    const toastHtml = `
      <div
        id="toast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        >
        <div class="toast-header">
          <strong class="me-auto">Notification</strong>
          <small class="text-muted">just now</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">This is your toast message!</div>
      </div>
    `;

    this.#toastContainer.insertAdjacentHTML("beforeend", toastHtml);
    const toast = new bootstrap.Toast(toastHtml);
    toast.show();

    // toastElement.addEventListener("hidden.bs.toast", () => {
    //   toastElement.remove();
    // });
  }
}

export const toastView = new ToastView();
