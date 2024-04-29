import api from "./api";

class DocumentService {
    getAll = async () => await api.get("/open-documents");
}

export const documentService = new DocumentService();
