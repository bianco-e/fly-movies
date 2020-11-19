const API_KEY = "2aac6ce4178d2373de780caffdee0fd7";

export const getInitialMovies = () =>
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&year=2020`
  ).then((res) => res.json());

export const getMovieById = (id) =>
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  ).then((res) => res.json());

export const searchForMovie = (keyword) =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1`
  ).then((res) => res.json());
