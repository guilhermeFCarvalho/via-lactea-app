import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqdWxpb0B1bmljZXN1bWFyLmNvbSIsImV4cCI6MTY2ODEyMjg4MSwidXNlcklkIjoiNjdjYTFmM2UtMjM5OS00MmIyLWEyYmUtMjU4YjI3NDhiMzMyIiwiaWF0IjoxNjY4MDM2NDgxfQ.uRM9KjtU2pTInvuWGRwflC3nEU_A1a9GzBQq_HqiTtIYf3YYWv91eGAX97GbG2PGXYJ0NtNe8wEsNWwWv8rlRw`,
  },
});

export default api;
