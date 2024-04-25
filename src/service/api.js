import axios from "axios";

const api = axios.create({
  baseURL: "https://api.urganch-ttb.uz/api",
  headers: {
    "Access-Control-Allow-Origin": "https://api.urganch-ttb.uz/",
    "Content-Type": "application/json",
  },
});

export default api;
