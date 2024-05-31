import axios from 'axios';

const API_KEY = '33a34b9f234c3f76ed1330212619df99';

export const fetchTrends = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';
  const { data } = await axios({
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
};

export const fetchMovie = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};
export const fetchMovies = async query => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
  const { data } = await axios({
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return data;
};

export const fetchCast = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};
export const fetchReviews = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};
