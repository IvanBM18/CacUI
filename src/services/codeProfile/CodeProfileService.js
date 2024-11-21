import customAPI from '../api.js';

const API_URL = import.meta.env.VITE_API_URL + "/api/v1/codeProfile";

export default class CodeProfileService{
    constructor(){}

    static async getAll(page = 0, size = 20){
        const api = customAPI(API_URL);
        const response = await api.get('', {
            params : {
                page,
                size
            }
        });
        let result = await response.data;
        return result;
    }
}