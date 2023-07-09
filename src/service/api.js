import axios from "axios";

// https://api.urganchttb.uz/api

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:8080/api",
    "Content-Type": "application/json",
  },
});

export default api;
