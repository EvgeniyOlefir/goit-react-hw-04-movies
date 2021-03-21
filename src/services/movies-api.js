const KEY = 'd0178a81bc9c7d287c5d7ffb12f23888';
const BASE_URL = 'https://api.themoviedb.org/3/';
const imgSize = 'w500';
const IMG_URL = `https://image.tmdb.org/t/p/${imgSize}/`;
// const defaultImage = `${IMG_URL}wwemzKWzjKYJFfCeiB57q3r4Bcm.png`;

function fetchTrendingMovies() {
  return fetch(`${BASE_URL}trending/all/day?api_key=${KEY}`)
    .then(res => res.json())
    .then(data => data.results)
    .then(results =>
      results.filter(movieArray => movieArray.media_type === 'movie'),
    );
}

// axios
//   .get(
//     'https://api.themoviedb.org/3/trending/all/day?api_key=d0178a81bc9c7d287c5d7ffb12f23888',
//   )
//   .then(res => this.setState({ movies: res.data.results }));

function fetchMoviesWithQuery(query) {
  return fetch(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  )
    .then(res => res.json())
    .then(data => data.results);
}

function fetchMovieDetails(movieId) {
  return fetch(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`,
  ).then(res => res.json());
}

function fetchMovieCast(movieId) {
  return fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  ).then(res => res.json());
}

function fetchMovieReviews(movieId) {
  return fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
  )
    .then(res => res.json())
    .then(data => data.results);
}

const themoviedbAPI = {
  IMG_URL,
  //   defaultImage,
  fetchTrendingMovies,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};

export default themoviedbAPI;
