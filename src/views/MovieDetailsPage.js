import { Component } from 'react';
// import axios from 'axios';
// import MovieCard from '../components/MovieCard';
import movieAPI from '../services/movies-api';
import MovieCard from '../components/MovieCard';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    movieAPI.fetchMovieDetails(movieId).then(movie => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;
    return (
      <>
        <div>{this.state.movie && <MovieCard movie={movie} />}</div>
      </>
    );
  }
}

export default MovieDetailsPage;
