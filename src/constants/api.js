// src/constants/api.js
import axios from "axios";

const API = axios.create({
  baseURL: 'https://pretty-fanya-absco-9609aad3.koyeb.app/api/v1', // same as your admin dashboard backend
});

export default API;
