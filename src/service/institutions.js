import api from "./api";

class InstService {
  getAll = async () => await api.get("/institutions");
}

export const instService = new InstService();
