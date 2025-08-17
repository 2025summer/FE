// lib/http.ts
import axios from "axios";
import { API_BASE_URL } from "./env";

export const ACCESS_TOKEN_KEY = "accessToken";
export const USER_INFO_KEY = "authUser"; // username/email/role 저장
export const USER_TYPE_KEY = "authType"; // "ADMIN" | "USER" 등

export const http = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// 요청에 토큰 자동 첨부
http.interceptors.request.use((config) => {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem(ACCESS_TOKEN_KEY)
      : null;
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    const msg =
      err?.response?.data?.message ||
      err?.response?.data?.error ||
      err?.message ||
      "요청에 실패했습니다.";
    return Promise.reject({ ...err, message: msg });
  },
);

export const tokenStorage = {
  set(token?: string | null) {
    if (typeof window === "undefined") return;
    if (token) localStorage.setItem(ACCESS_TOKEN_KEY, token);
  },
  clear() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(USER_INFO_KEY);
  },
};
