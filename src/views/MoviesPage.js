import { Component } from 'react';
import MovieList from '../components/MovieList';
import movieAPI from '../services/movies-api';
import { ToastContainer, toast } from 'react-toastify';
import SearchForm from '../components/SearchForm';

export default class MoviePage extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = this.props.location.search;

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps) {
    const { query: prevQuery } = prevProps.location.search;
    const { query: nextQuery } = this.props.location.search;

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = query => {
    this.setState({ loading: true });

    movieAPI
      .fetchMoviesWithQuery(query)
      .then(movies => {
        if (movies.length === 0) {
          toast.error('Ничего не найдено...');
        }
        this.setState({ movies });
      })
      .catch(error => {
        toast.error(error.message);
        this.setState({ error: error.message });
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="MainContainer">
        <SearchForm onSubmit={this.handleChangeQuery} />

        <MovieList movies={movies} />

        <ToastContainer />
      </div>
    );
  }
}
