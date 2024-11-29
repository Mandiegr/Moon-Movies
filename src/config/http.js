import axios from "axios";

const API_TOKEN = process.env.REACT_APP_MOVIE_API_TOKEN;

export const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
