import customAPI from '../api.js';

const API_URL = import.meta.env.VITE_API_URL + "/api/v1/submission";

export default class SubmissionsService {
    static async getAll(page = 0, size = 20) {
        const api = customAPI(API_URL);
        const response = await api.get('', {
            params : {
                page,
                size
            }
        });
        let result = response.data;
        return result;
    }

    static async getSubmissionsByStudentId(studentId, page =0, size = 20){
        const api = customAPI(API_URL);
        const response = await api.get(`/student`, {
            params:{
                page,
                size,
                id: studentId
            }});
        let data = await response.data;
        return data;
    }


    static async getSubmissionByHandle(handle) {
        const api = customAPI(API_URL);
        return api.get(`/handle/${handle}`);
    }

    static async createSubmission(data) {
        const api = customAPI(API_URL);
        return api.post('', data);
    }

}