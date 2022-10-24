import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: { Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2NjM5NjQxOCwiaWF0IjoxNjY2MzEwMDE4fQ.Hcw6_zVrNWG9MqDHDSg74rnGWduxK35nuwNNOTs7vMXvzCforHDCm1_EvVcQYlS6Avj9_RwCMEmvSWPegxmcAQ` }
});

export default api;
