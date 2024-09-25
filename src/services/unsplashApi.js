import axios from "axios";

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const BASE_URL = import.meta.env.VITE_UNSPLASH_BASE_URL;

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
