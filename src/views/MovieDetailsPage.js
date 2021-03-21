import { Component } from 'react';
import axios from 'axios';
// import MovieCard from '../components/MovieCard';

class MovieDetailsPage extends Component {
  state = {
    backdrop_path: null,
    overview: null,
    title: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=d0178a81bc9c7d287c5d7ffb12f23888`,
    );

    this.setState({ ...response.data });

    // console.log(response.data);
  }

  render() {
    const { backdrop_path, title, overview } = this.state;
    return (
      <>
        <h1>
          страница с детальной информацией о кинофильме
          {this.props.match.params.movieId}
        </h1>
        <img src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} alt="" />
        <h2>{title}</h2>
        <p>{overview}</p>
      </>
    );
  }
}

export default MovieDetailsPage;
