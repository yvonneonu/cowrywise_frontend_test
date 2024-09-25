// src/services/unsplashApi.js
import axios from "axios";

const API_KEY = "N3LTlu_yvMtw0XbpCaPDJMPmv88_tkfszOQjkn13HgI";
const BASE_URL = "https://api.unsplash.com/";

export const fetchPhotos = async (query = "african", perPage = 8) => {
  const response = await axios.get(`${BASE_URL}search/photos`, {
    params: {
      query,
      per_page: perPage,
      client_id: API_KEY,
    },
  });
  return response.data.results;
};
