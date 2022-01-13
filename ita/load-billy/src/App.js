import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import React, { Component } from 'react';

import Footer from './components/Footer/Footer';

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoding: false,
  //     movies: [],
  //   };
  // }

  // getMovies = async () => {
  //   const movies = await axios.get(
  //     'https://api.themoviedb.org/3/movie/popular?api_key=137ae6e9c8732b7ea556dcfb16a57a90'
  //   );

  //   console.log(movies.data.results);
  //   this.setState({ isLoding: true, movies: movies.data.results });
  // };

  // componentDidMount() {
  //   this.getMovies();
  // }

  render() {
    // const { isLoding, movies } = this.state;

    return (
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
