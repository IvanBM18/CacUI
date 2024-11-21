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

    static async getSubjectsWithoutClass(){
        const api = customAPI(url);
        try {
            const response = await api.get('/no-attendance');
            let data = await response.data;
            return data;
        }catch(e){
            console.log("Error getting students: ", e);
            return null;
        }
    }

    static async edit(subject){
        const api = customAPI(url);
        subject.classDate = this.reverseFormattedDate(subject.classDate)
        try {
            await api.put('', subject, {
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    }
            });
        }catch(e){
            console.log("Error updating subject: ", e);
        }
    }

    static async add(subject){
        const api = customAPI(url);
        subject.classDate = this.reverseFormattedDate(subject.classDate)
        
        try {
            await api.post('', subject, {
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    }
            });
        }catch(e){
            console.log("Error adding subject: ", e);
        }
    }


    static formatDate(date){
        return new Date(date).toISOString().split('T')[0];
    }
    static reverseFormattedDate(isoDateString) {
        return new Date(`${isoDateString}T00:00:00Z`);
      }
}