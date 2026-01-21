// src/constants/api.js
import axios from "axios";

const API = axios.create({
  baseURL: 'https://federal-nerti-absco-1d644746.koyeb.app/api/v1', // same as your admin dashboard backend
});

export default API;
