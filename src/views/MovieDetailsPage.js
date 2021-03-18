import { Component } from 'react';
import axios from 'axios';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=d0178a81bc9c7d287c5d7ffb12f23888`,
    );
    console.log(response.data);
  }

  render() {
    return (
      <h1>
        страница с детальной информацией о кинофильме
        {this.props.match.params.movieId}
      </h1>
    );
  }
}

export default MovieDetailsPage;
