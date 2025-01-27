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
    if (error.response.status === 400) {
      window.alert("Something went wrong!!!");
    }
  }
);
