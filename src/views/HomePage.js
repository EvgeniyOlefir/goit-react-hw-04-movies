// import axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';
// import MovieList from '../../src/components/MovieList';
import routes from '../routes';
import movieAPI from '../services/movies-api';

// d0178a81bc9c7d287c5d7ffb12f23888
// axios.defaults.headers.common['Authorization'] =
//   'Bearer d0178a81bc9c7d287c5d7ffb12f23888';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    movieAPI
      .fetchTrendingMovies()
      .then(movieArray => this.setState({ movies: movieArray }));
    // axios
    //   .get(
    //     'https://api.themoviedb.org/3/trending/all/day?api_key=d0178a81bc9c7d287c5d7ffb12f23888',
    //   )
    //   .then(res => this.setState({ movies: res.data.results }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`${routes.movies}/${id}`}>{title || name}</Link>
          </li>
        ))}
      </div>
    );
  }
}

export default HomePage;
