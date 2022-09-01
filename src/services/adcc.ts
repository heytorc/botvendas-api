require('dotenv').config()

import axios from "axios";

const adccApi = axios.create({
  baseURL: process.env.ADCC_API_URL,
});

adccApi.defaults.headers.common['Authorization'] = `${process.env.ADCC_TOKEN}`;

export default adccApi;