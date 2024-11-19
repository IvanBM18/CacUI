import customAPI from "../api";

const url = import.meta.env.VITE_API_URL + "/api/v1/subject";

export default class SubjectService{

    constructor() {}

    static async getSubject(id){
        const api = customAPI(url);
        try {
            const response = await api.get(`/${id}`,{
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    }
            });
            return await response.data;
        }catch(e){
            console.log("Error getting students: ", e);
        }
    }

    static async getAll(){
        const api = customAPI(url);
        try {
            const response = await api.get('',{
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    }
            });
            //TODO: Format date
            let subjects = await response.data;
            subjects = subjects.map(subject => {
                subject.classDate = this.formatDate(subject.classDate);
                return subject;
            });
            return subjects;
        }catch(e){
            console.log("Error getting subjects: ", e);
        }
    }

    static async edit(subject){
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

    static async add(subject){
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

    static formatDate(date){
        return new Date(date).toISOString().split('T')[0];
    }
    static reverseFormattedDate(isoDateString) {
        return new Date(`${isoDateString}T00:00:00Z`);
      }
}