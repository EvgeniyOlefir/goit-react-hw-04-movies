import React from 'react';

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
        <img src="" alt="" />
        <div>
          <h1>title</h1>
          <p>
            <span>User Score</span>
          </p>
          <p>
            <span>Release date</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
