import axios from "axios";
const baseURL = "https://upskilling-egypt.com:3005/api";
export const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const AUTHENTICATION_URLS = {
  regitser: `${baseURL}/register`,
  login: `${baseURL}/login`,
  forgetPassword: `${baseURL}/forgot-password`,
  changePassword: `/change-password`,
  resetPassword: `${baseURL}/reset-password`,
};
