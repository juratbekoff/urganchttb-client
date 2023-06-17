import api from "./api";

class CatalogService {
  getAll = async () => await api.get("/catalogs");
}

export const catalogService = new CatalogService();
