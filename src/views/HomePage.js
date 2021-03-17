import axios from 'axios';
import { Component } from 'react';
// import MovieList from '../../src/components/MovieList';

// d0178a81bc9c7d287c5d7ffb12f23888
// axios.defaults.headers.common['Authorization'] =
//   'Bearer d0178a81bc9c7d287c5d7ffb12f23888';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=d0178a81bc9c7d287c5d7ffb12f23888',
      )
      .then(res => this.setState({ movies: res.data.results }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {movies.map(({ id, title, name }) => (
            <li key={id}>{title || name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
