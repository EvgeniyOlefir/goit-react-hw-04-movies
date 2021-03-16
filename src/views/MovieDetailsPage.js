import { Component } from 'react';

import axios from 'axios';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    axios
      .get(
        'https://developers.themoviedb.org/3/trending/all/day?api_key=d0178a81bc9c7d287c5d7ffb12f23888',
      )
      .then(response => {
        console.log(response);
      });
    // const response = await Axios.get(
    //   'https://developers.themoviedb.org/3/trending/get-trending',
    // );
    // console.log(response);
  }

  render() {
    return <h1>страница с детальной информацией о кинофильме</h1>;
  }
}

export default MovieDetailsPage;
