import RegressionUtils from '../ai/RegressionUtils.js';
import customAPI from '../api.js';
import ContestData from '../ai/models/contestData.js';

const API_URL = import.meta.env.VITE_API_URL + "/api/v1/";

export default class ContestService {

    static async getStudentSubmissions(student){
        if(!student || student.studentId == null || student.studentId < 0 || !student.siiauCode){
            console.warn("Invalid student ID or SiiauCode in getStudentSubmissions");
            return [];
        }
        try{
            const api = customAPI(API_URL);
            const response = await api.get(`/contest/student/${student.studentId}`,{
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    }
            });
            let data = await response.data;
            const result = new Map();
            data.forEach((submission)=>{
                if(!result.has(submission.contestId)){
                    result.set(submission.contestId, new ContestData(submission.contesId,submission.totalProblems,0,submission.difficulty));
                }
                if(submission.verdict === "AC" || submission.verdict === "OK"){
                    result.get(submission.contestId).correct++;
                }
            });
            return result;
        }catch(e){
            console.log("Error getting student submissions: ", e);
        }
        return [];
    }
}