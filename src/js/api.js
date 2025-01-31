import axios from "axios";
import { API_URL } from "./utils/config";

export const API = axios.create({
  baseURL: API_URL,
});

API.interceptors.request.use(
  function (config) {
    config.timeout = 3000;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
      const status = error.response.status;
      if (status === 403 || status === 404) {
        window.alert("Something went wrong!!!");
      } else if (status === 500) {
        window.alert("Internal server error!!!");
      }
    }
    return Promise.reject(error);
  }
);
