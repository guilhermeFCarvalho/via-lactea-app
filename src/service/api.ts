import axios from 'axios';

const api = axios.create({
  baseURL: 'https://via-lactea-api.herokuapp.com',
});

export default api;
