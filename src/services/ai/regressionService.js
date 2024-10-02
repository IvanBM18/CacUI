import customAPI from '../api.js';
import RegressionResult from './models/regressionResult.js';

const aiURL = import.meta.env.VITE_AI_URL;

export default class RegressionService {

  static async getPredictionFromContests(data) {
    const api = customAPI(aiURL);
    console.log("Getting prediction for data: ", data);
    try {
      const response = await api.post('/predict/contest', data,{
        headers:{
          'Access-Control-Allow-Origin': '*',
        }
      });
      const result = await response.data;
      return new RegressionResult(result.input, result.output, result.malla);
    }catch(e){
      console.log("Error getting prediction: ", e);
    }
  }

  static async getPrediction(data){
    const api = customAPI(aiURL);
    try {
      const response = await api.post('/predict/data', data,{
        headers:{
          'Access-Control-Allow-Origin': '*',
        }
      });
      const result = await response.data;
      return new RegressionResult(result.input, result.output, result.malla);
    }catch(e){
      console.log("Error getting prediction: ", e);
    }
  }
}
