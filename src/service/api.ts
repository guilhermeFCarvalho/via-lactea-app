import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: { Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2NzAwMDYyNiwiaWF0IjoxNjY2OTE0MjI2fQ.RBNHkatOdHW7Hh9DE5bOCUntQD6NxvJSB2_TcM8lGGs5AGqn97zVazjJB9jhN3-qeCfobYlg_FyGfGBfmzf2hg` }
});

export default api;
