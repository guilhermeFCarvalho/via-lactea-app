import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: { Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2NzI0OTU2MiwiaWF0IjoxNjY3MTYzMTYyfQ.6BT1FFtkdohHyuXE6euCwQQ_InlI0GOQfVfIK0Qhah9TOiDLLRjjG8KrUBqEogNjvmzNYXCEmhc6cgusLoZymA` }
});

export default api;
