import customAPI from "../api";

const url = import.meta.env.VITE_API_URL + "/api/v1/attendance";

export default class AttendanceService{

    constructor() {}

    static async getAll(){
        const api = customAPI(url);
        try {
            const response = await api.get('',{
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    }
            });
            //TODO: Format date
            let attendances = await response.data;
            attendances = attendances.map(attendance => {
                return attendance;
            });
            return attendances;
        }catch(e){
            console.log("Error getting attendances: ", e);
        }
    }

    static async registerAttendance(attendance){
        const api = customAPI(url);
        await api.post('',attendance,{
            headers:{
                'Access-Control-Allow-Origin': '*',
                }
        });
    }
}