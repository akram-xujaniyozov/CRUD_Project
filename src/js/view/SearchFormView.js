import FormView from "./FormView";

class SearchFormView extends FormView {
  #searchForm;
  #searchCancel;
  constructor() {
    super();
    this.#searchForm = this._forms[0];
    this.#searchCancel = this.#searchForm.querySelector("#search-cancel");
  }

  searchUserHandler(handler) {
    this.#searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const searchValue = this.search.value;
      if (searchValue !== "" && isNaN(searchValue)) {
        handler(searchValue);
      }
    });
  }

  cancelSearchUserHandler(handler) {
    const formInput = this.#searchForm.search;
    this.#searchCancel.addEventListener("click", function () {
      if (formInput.value !== "") {
        handler();
        formInput.value = "";
      }
    });
  }
}

export const searchFormView = new SearchFormView();
