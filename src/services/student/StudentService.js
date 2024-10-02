import customAPI from '../api.js';

const API_URL = import.meta.env.VITE_API_URL + "/api/v1/student";

export default class StudentService {
    constructor() {}

    static async getAll(){
        const api = customAPI(API_URL);
        try {
            const response = await api.get('',{
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    }
            });
            //TODO: Format date
            return await response.data;
        }catch(e){
            console.log("Error getting students: ", e);
        }
    }

    static async get(id){
        const api = customAPI(API_URL);
        try {
            const response = await api.get(`/${id}`,{
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    }
            });
            const student = await response.data;
            student.registerDate = this.formatDate(student.registerDate);
            return student
        }catch(e){
            console.log("Error getting student: ", e);
        }
    }

    static async getByCode(siiauCode){
        const api = customAPI(API_URL);
        try {
            const response = await api.get(`/code/${siiauCode}`,{
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    }
            });
            const student = await response.data;
            student.registerDate = this.formatDate(student.registerDate);
            return student
        }catch(e){
            console.log("Error getting student: ", e);
        }
    }

    static formatDate(date){
        return new Date(date).toISOString().split('T')[0];
    }

}