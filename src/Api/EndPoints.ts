import axios from "axios";
const baseURL = "https://apis004-001-site1.etempurl.com";
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
  regitser: `${baseURL}/RegisterUserEndPoint`,
  login: `${baseURL}/LoginUserEndPoint`,
  forgetPassword: `${baseURL}/ForgetPasswordEndPoint`,
  changePassword: `/change-password`,
  resetPassword: `${baseURL}/ResetPasswordEndPoint`,
};
