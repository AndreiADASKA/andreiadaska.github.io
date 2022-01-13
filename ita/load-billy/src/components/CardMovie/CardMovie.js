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
  bg,
}) {
  return (
    <div className="card-movie">
      <div className="card-movie__img">
        <img src={`${IMG}${poster_path}`} />
      </div>
      <h2>{title.length > 20 ? <>{title.slice(0, 23)}...</> : title} </h2>
      <p className={vote_average > 7 ? 'green' : 'red'}>{vote_average}</p>
      <p className="release-date">{release_date.slice(0, 4)}</p>
    </div>
  );
}


import React, { Component } from 'react'

export default class CardMovie extends Component {


	constructor(props) {
    super(props);
    this.state = {
      isLoding: false,
      movies: [],
    };
  }

  getMovies = async () => {
    const movies = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=137ae6e9c8732b7ea556dcfb16a57a90'
    );

    console.log(movies.data.results);
    this.setState({ isLoding: true, movies: movies.data.results });
  };

  componentDidMount() {
    this.getMovies();
  }




	render() {
		return (
			<div>
				
			</div>
		)
	}
}

