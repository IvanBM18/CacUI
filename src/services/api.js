import axios from 'axios';

const createAPI = (url) => axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
});

const customAPI = (url)  => createAPI(url);

export default customAPI;