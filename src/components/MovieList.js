import React from 'react';
import { Link } from 'react-router-dom';
// import routes from '../../routes';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title || name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
