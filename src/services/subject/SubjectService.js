import customAPI from "../api";

const url = import.meta.env.VITE_API_URL + "/api/v1/subject";

export default class SubjectService{

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
}