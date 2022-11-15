import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  //bearer: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqdWxpb0B1bmljZXN1bWFyLmNvbSIsImV4cCI6MTY2ODU3NTI3MiwidXNlcklkIjoiNjdjYTFmM2UtMjM5OS00MmIyLWEyYmUtMjU4YjI3NDhiMzMyIiwiaWF0IjoxNjY4NDg4ODcyfQ.Mass012CfiKjyF7B31H01ePSlM8flyUB1ni53gHJdaivGrYvzk5t5zD0ZojhnCbKPDHA5x5fZq-EAhcj7mbUYQ`
});

export default api;
