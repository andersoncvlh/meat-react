const Axios = require("axios");

const api = Axios.create({
  baseURL: process.env.REACT_APP_BASE_API_SIMULATOR,
  headers: {
    Accept: "Application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default api;
