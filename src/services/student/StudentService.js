import customAPI from '../api.js';

const API_URL = import.meta.env.VITE_API_URL + "/api/v1/student";

export default class StudentService {
    constructor() {}

    static async getAll(){
        const api = customAPI(API_URL);
        try {
            const response = await api.get('');
            return await response.data;
        }catch(e){
            console.log("Error getting students: ", e);
        }
    }

}