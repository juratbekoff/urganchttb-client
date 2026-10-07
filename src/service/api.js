import axios from "axios";
import { api_url } from "../constants/index.js";

const api = axios.create({
  baseURL: api_url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
