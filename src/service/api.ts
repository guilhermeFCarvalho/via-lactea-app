import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: { Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2Nzg2MDg4MSwiaWF0IjoxNjY3Nzc0NDgxfQ.bo3zfJgwhcKfexLXBDZ0Xjz3lasYxVmUC-9EYCSXAbmjR8VaFKijRM3q8wb08eQQV9Ep3OSuxVOKxf6HomjUOQ` }
});

export default api;
