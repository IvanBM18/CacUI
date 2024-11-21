import customAPI from '../api.js';

const API_URL = import.meta.env.VITE_API_URL + "/api/v1/file";

export default class ExcelService {
    constructor(){}

    static async uploadFile(file){
    const api = customAPI(API_URL);
        try {
            const response = await api.post("/import", file, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            });
            alert("Archivo subido exitosamente: " + response.data);
        } catch (error) {
            console.error("Error al subir el archivo", error);
            alert("Error al subir el archivo");
        }
    }
    
}