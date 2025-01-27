const setPaginationStorage = function (pagination) {
  window.localStorage.setItem("pagination", pagination);
};

const getPaginationStorage = function () {
  return window.localStorage.getItem("pagination");
};

const clearPaginationStorage = function () {
  window.localStorage.clear();
};

export { setPaginationStorage, getPaginationStorage, clearPaginationStorage };
