import { LIMIT_USERS } from "./config";

export const paginationQuries = (number = 1) => {
  return { page: number, limit: LIMIT_USERS };
};
