import axios from 'axios';

const api = axios.create({
    baseURL: 'http://lucas-ferreira.com/API'
});

export default api;