import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: { Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2NzU5OTMzNCwiaWF0IjoxNjY3NTEyOTM0fQ.D_giKiEYUrKoTSW_qeaRd6AbQKffrR2kz-i1j49f0HiDs5wloVDTpAiGYvElszmH7y7mqQfTJ8Wm8udkGCJuCg` }
});

export default api;
