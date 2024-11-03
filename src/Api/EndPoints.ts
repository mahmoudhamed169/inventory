import axios from "axios";
const baseURL = "https://apis004-001-site1.etempurl.com/api";
export const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const newToken = `Bearer ${token}`;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const AUTHENTICATION_URLS = {
  regitser: `${baseURL}/users/register`,
  login: `${baseURL}/users/login`,
  forgetPassword: `${baseURL}/users/forgetpassword`,
  changePassword: `/users/change-password`,
  resetPassword: `${baseURL}/users/resetpassword`,
};

export const PRODUCTS_URLS = {
  GetAllProducts: `${baseURL}/products`,
  AddNewProduct: `${baseURL}/products`,
  delete: (id: number) => `${baseURL}/products/${id}`,
};
