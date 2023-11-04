import React, { Component } from 'react';
import MovieList from './components/movielist';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const apiKey = 'e64fbaf0';

    axios
      .get(`http://www.omdbapi.com/?s=movie&type=movie&r=json&apikey=${apiKey}`)
      .then((response) => {
        console.log(response.data); // Log the response data
        const movies = response.data.Search;
        this.setState({ movies });
      })
      .catch((error) => {
        console.error('Error fetching data from OMDB API:', error);
      });
  }

  render() {
    return (
      <div className='App'>
        <h1>MOVIES RATES&REVIEWS</h1>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
