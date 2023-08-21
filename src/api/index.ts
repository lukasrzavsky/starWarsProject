import axios from "axios";

const BASE_API_URL = "https://swapi.dev/api";

export const api = () => {
  const instance = axios.create({
    baseURL: BASE_API_URL,
  });

  return instance;
};
