import api from "./api";

class ApplicationService {
  create = async (data) => {
    console.log(data);
    await api.post("/application", data);
  };
}

export const appService = new ApplicationService();
