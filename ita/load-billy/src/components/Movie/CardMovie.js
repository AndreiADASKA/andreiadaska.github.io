import React from 'react';
import './CardMovie.scss';

const IMG = 'https://image.tmdb.org/t/p/w200/';

export default function CardMovie({
  title,
  vote_average,
  release_date,
  overview,
  id,
  backdropPath,
  poster_path,
}) {
  return (
    <div className="card-movie">
      <div className="card-movie__img">
        <img src={`${IMG}${poster_path}`} />
      </div>

      <h2>{title}</h2>
      <p>{release_date}</p>
      <p className="card-movie__average">{vote_average}</p>

      {/* <p>{overview}</p> */}
    </div>
  );
}
