import axios from "axios";

const api = axios.create({ baseURL: "http://62.217.176.186:8080/api" });

export default api;
