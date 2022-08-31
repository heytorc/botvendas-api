require('dotenv').config()

import axios from "axios";

const api = axios.create({
  baseURL: process.env.VIACEP_API_URL
});

export default api;