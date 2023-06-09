import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://localhost:3000/api/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err)
);
axiosClient.interceptors.response.use(
  (response) => response,
  (err) => Promise.reject(err)
);
export default axiosClient;
