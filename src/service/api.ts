import axios from "axios";
import { Storage } from "../utils";

const token = localStorage.getItem('token')

const authToken:any = token != null ? `Bearer ${token}` : null;

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: { Authorization: authToken }
});

export default api;
