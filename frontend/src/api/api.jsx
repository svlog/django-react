import axios from "axios";

const api = () => {
  const client = axios.create({
    baseURL: "http://localhost:8000",
  });

  return client;
};

export default api;
