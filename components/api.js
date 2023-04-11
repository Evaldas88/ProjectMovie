const API_KEY = "484eecec06bfa588a660f7daeb26a3de";

export const API_URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
export const API_URL_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
export const API_URL_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

export const fetchPopularMovies = () => {
  return fetch(API_URL_POPULAR)
    .then((response) => response.json())
    .then((json) => json.results)
    .catch((error) => console.error(error));
};

export const fetchUpcomingMovies = () => {
  return fetch(API_URL_UPCOMING)
    .then((response) => response.json())
    .then((json) => json.results)
    .catch((error) => console.error(error));
};

export const fetchTopRatedMovies = () => {
  return fetch(API_URL_TOP_RATED)
    .then((response) => response.json())
    .then((json) => json.results)
    .catch((error) => console.error(error));
};
