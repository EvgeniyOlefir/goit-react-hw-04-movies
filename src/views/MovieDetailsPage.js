import { Component } from 'react';
import Axios from 'axios';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  async componentDidMount() {
    const response = await Axios.get(
      'https://developers.themoviedb.org/3/trending/get-trending',
    );
    console.log(response);
  }

  render() {
    return <h1>страница с детальной информацией о кинофильме</h1>;
  }
}

export default MovieDetailsPage;
