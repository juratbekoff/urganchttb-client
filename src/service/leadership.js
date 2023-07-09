import api from "./api";

class LsService {
  create = async (data) => {
    await api.post("/leadership", data);
  };
  getAll = async () => {
    return await api.get("/leadership");
  };
}

export const lsService = new LsService();
