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
            let students = await response.data;
            students = students.map(student => {
                student.registerDate = this.formatDate(student.registerDate);
                return student;
            });
            return students;
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
    static async edit(student){
        const api = customAPI(API_URL);
        student.registerDate = this.reverseFormattedDate(student.registerDate)
        try {
            await api.put('', student, {
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    }
            });
        }catch(e){
            console.log("Error adding student: ", e);
        }
    }

    static async add(student){
        const api = customAPI(API_URL);
        student.registerDate = this.reverseFormattedDate(student.registerDate)
        try {
            await api.post('', student, {
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    }
            });
        }catch(e){
            console.log("Error updating student: ", e);
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
            return null;
        }
    }
    
    static async uploadNewStudent(student){
        const api = customAPI(API_URL); 
        try {
            const response = await api.post("",student,{
                headers:{
                    'Access-Control-Allow-Origin': '*',
                }
            });
            const result = await response.data;
            return result;
        }catch(e){
            console.log("Error getting student: ", e);
            return null;
        }
    }
    
    static formatDate(date){
        return new Date(date).toISOString().split('T')[0];
    }
    static reverseFormattedDate(isoDateString) {
        return new Date(`${isoDateString}T00:00:00Z`);
      }

}