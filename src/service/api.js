import axios from "axios";

const api = axios.create({
  baseURL: "https://api.urganchttb.uz/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
