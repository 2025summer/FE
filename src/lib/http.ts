import axios from "axios";
import { API_BASE_URL } from "./env";

export const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    const msg =
      err.response?.data?.message ||
      err.response?.data?.error ||
      "요청에 실패했습니다.";
    return Promise.reject({ ...err, message: msg });
  },
);
