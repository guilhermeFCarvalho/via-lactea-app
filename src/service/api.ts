import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: { Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2NTQzODg1MiwiaWF0IjoxNjY1MzUyNDUyfQ.WZFob7UHma2oNS89ZEitwne7Y1Anf01NDGI17iG9cQyoBbtV8UeSjeJJsxHcZoMl8QjYy2gnku-4a4Qi7Apnhg` }
});

export default api;
