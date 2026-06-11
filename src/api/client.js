import axios from "axios";

const api = axios.create({
  baseURL: "https://api-domain-desa.com/api",
  timeout: 10000,
});

export default api;
