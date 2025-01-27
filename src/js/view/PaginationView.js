import View from "./View";

class PaginationView extends View {
  constructor() {
    super();
    this._parentElement = document.getElementById("pagination");
  }

  prevPaginationHandler(handler) {
    this._parentElement.addEventListener("click", function (event) {
      const backPagination = event.target.closest("#pagination-back");
      if (!backPagination) return;
      const decrementPagination = +backPagination.dataset.page - 1;
      if (decrementPagination) handler(decrementPagination);
    });
  }

  nextPaginationHandler(handler) {
    this._parentElement.addEventListener("click", function (event) {
      const nextPagination = event.target.closest("#pagination-go");
      if (!nextPagination) return;
      const incrementPagination = +nextPagination.dataset.page + 1;
      if (incrementPagination) handler(incrementPagination);
    });
  }

  findCurrentPaginationHandler(handler) {
    this._parentElement.addEventListener("click", function (event) {
      const paginationNumber = event.target.closest(".page-link");
      if (!paginationNumber) return;
      handler(+paginationNumber.innerText);
    });
  }

  renderPagination(meta) {
    if (Object.keys(meta).length >= 1) {
      this._clear();

      // destruction of meta object
      const { total_items, per_page, current_page, total_pages } = meta;

      // find last user and first user
      const maxUsersAmount = current_page * per_page;
      const lastUserPerPage =
        maxUsersAmount < total_items ? maxUsersAmount : total_items;
      const firstUserPerPage = maxUsersAmount - per_page + 1;

      // find pagination length
      const pageNumbers = [];
      for (let i = 1; i <= total_pages; i++) {
        pageNumbers.push(i);
      }

      const paginationItem = pageNumbers
        .map(
          (pagination) =>
            ` <li class="page-item">
              <button class="page-link text-secondary ${
                current_page === pagination &&
                "text-black text-decoration-underline"
              }">${pagination}</button>
          </li> 
         `
        )
        .join("");

      const paginationHtml = `
      <div id="pagination-showing">
        <p class="fs-6 fw-lighter">
          Showing <span class="fw-bolder"> ${firstUserPerPage} to ${lastUserPerPage}  of ${total_items} </span> users
        </p>
      </div>
      <div id="pagination-amount">
        ${
          total_items > 8
            ? `
        <ul class="pagination pagination-sm">
        <li class="page-item">
          <button  id="pagination-back" class="page-link text-secondary ${
            current_page === 1 ? "text-secondary" : "text-black"
          }" data-page=${current_page} ${
                current_page === 1 ? "disabled" : ""
              }>&lt;</button>
        </li>
        ${paginationItem}
        <li class="page-item">
          <button id="pagination-go" class="page-link ${
            current_page === total_pages ? "text-secondary" : "text-black"
          }" data-page=${current_page} ${
                current_page === total_pages ? "disabled" : ""
              }>&gt;</button>
        </li>
      </ul>
        `
            : ``
        }      
      </div>
    `;
      this._parentElement.insertAdjacentHTML("beforeend", paginationHtml);
    } else {
      this._clear();
    }
  }
}

export const paginationView = new PaginationView();
