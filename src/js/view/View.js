export default class View {
  // _parentElement;
  constructor() {}

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const spinner = `
      <tr>
        <td colspan="7" class="text-center">
          <div class="d-flex justify-content-center align-items-center" style="height: 200px">
            <div class="spinner-border text-success" style="width: 3rem; height: 3rem;" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </td>
      </tr> 
     `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", spinner);
  }
}