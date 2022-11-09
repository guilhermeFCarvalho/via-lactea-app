import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJleHAiOjE2NjgxMTg3MTMsInVzZXJJZCI6IjdhNmExNjYxLTE0MmQtNDNmYS1hNGQzLWUwYzVlYzdhYTk5MiIsImlhdCI6MTY2ODAzMjMxM30.yNchzzK9iCioZnptS0Bg4WVtVfbd-DKhGJWXVo5pJhtZGphQQzus699eu0Cttu2KkZ-zzI9r6yvOjca1iEwynw`,
  },
});

export default api;
