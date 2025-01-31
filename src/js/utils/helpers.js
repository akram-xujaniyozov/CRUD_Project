import { LIMIT_USERS } from "./config";
import { getPaginationStorage } from "./dataStorage";

export const paginationQuries = (number = getPaginationStorage()) => {
  return { page: number, limit: LIMIT_USERS };
};
