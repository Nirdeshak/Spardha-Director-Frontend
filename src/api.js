import axios from "axios";

const API = axios.create({
  baseURL: "http://3.110.131.225:8080/api/v1",
});


API.interceptors.request.use((req) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;