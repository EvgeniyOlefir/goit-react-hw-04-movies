import React from 'react';
import movieAPI from '../services/movies-api';

const MovieCard = ({ movie }) => {
  const {
    backdrop_path,
    genres,
    overview,
    release_date,
    title,
    name,
    vote_average,
  } = movie;

  return (
    <div>
      <div>
        <img
          src={
            backdrop_path
              ? `${movieAPI.IMG_URL}${backdrop_path}`
              : `Здесь должна быть картинка`
          }
          alt="{title||name}"
        />
        <div>
          <h1>{title || name}</h1>
          {vote_average > 0 && (
            <p>
              <span>User Score:</span>
              {vote_average * 10}%
            </p>
          )}
          {release_date && (
            <p>
              <span>Release date:</span>
              {release_date}
            </p>
          )}
          {overview && (
            <>
              <h2>Overview</h2>
              <p>{overview}</p>
            </>
          )}
          {genres.length > 0 && (
            <>
              <h2>Genres</h2>
              <ul>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
