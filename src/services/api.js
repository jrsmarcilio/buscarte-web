import axios from "axios";

const api = axios.create({
  baseURL: "https://buscarte-server.herokuapp.com/",
});

export default api;
