import customAPI from "../api";

const API_URL = import.meta.env.VITE_API_URL + "/api/v1";

export default class StatsService {

  static async getGeneralStats(stat) {
    const api = customAPI(API_URL);
    const response = api.get(`/stats/${stat}`,{
      headers:{
          'Access-Control-Allow-Origin': '*',
          }
    });
    const data = (await response).data;
    return data;
  }
}