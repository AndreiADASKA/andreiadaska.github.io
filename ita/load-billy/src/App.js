import './App.scss';

import Header from './components/Header/Header';
import React, { Component } from 'react';

import axios from 'axios';
import CardMovie from './components/Movie/CardMovie';

export default class App extends Component {
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
    const { isLoding, movies } = this.state;

    return (
      <div className="wrapper">
        <Header />

        <div className="movies-cards container">
          {isLoding
            ? movies.map((e) => {
                console.log(e);
                return (
                  <CardMovie
                    key={e.id}
                    title={e.title}
                    overview={e.overview}
                    release_date={e.release_date}
                    vote_average={e.vote_average}
                    poster_path={e.poster_path}
                  />
                );
              })
            : 'Идет Загркззззззззззкааааааааа'}
        </div>
      </div>
    );
  }
}
