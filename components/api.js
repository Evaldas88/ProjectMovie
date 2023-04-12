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
export const fetchMovieDetails = (movieId) => {
    const API_URL_MOVIE = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
    return fetch(API_URL_MOVIE)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };
  
  export const fetchMovieVideo = (movieId) => {
    const API_URL_VIDEO = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
    return fetch(API_URL_VIDEO)
    .then((response) => response.json())
    .catch((error) => console.error(error));
  };
  
  export const fetchRelatedMovies = (movieId) => {
    const API_URL_SIMILAR = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    return fetch(API_URL_SIMILAR)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };
  