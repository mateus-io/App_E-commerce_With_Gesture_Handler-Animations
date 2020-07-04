import axios from 'axios';

const api = axios.create({
    baseURL : 'https://e-commerce-tests.herokuapp.com'
});

export default api;