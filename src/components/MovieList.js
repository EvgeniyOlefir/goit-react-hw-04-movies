import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import routes from '../../routes';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id}>{title || name}</li>
      ))}
    </ul>
  );
};

export default MovieList;
