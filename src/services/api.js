import axios from 'axios';

const api = axios.create({
    baseURL: 'https://lucas-ferreira.com/API'
});

export default api;