import customAPI from "../api";

const url = import.meta.env.VITE_API_URL + "/api/v1/user";

export default class AttendanceService{

    constructor() {}

    static async get(email,password) {
        const api = customAPI(url);
        const response = await api.get('', {
            params : {
                email,
                password
            }
        });
        let result = await response.data;
        return result;
    }
}