import React, { Component } from "react";
import Movie from './movies';
import axios from 'axios';

export default class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        const apiKey = 'e64fbaf0';

        axios
            .get(`https://www.omdbapi.com/?s=movie&type=movie&r=json&apikey=${apiKey}`)
            .then((response) => {
                const fetchedMovies = response.data.Search;
                this.setState({ movies: fetchedMovies, loading: false });
            })
            .catch((err) => {
                this.setState({ error: err, loading: false });
            });
    }

    render() {
        const { movies, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        return (
            <div className="movie-list">
                {movies &&
                    movies.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))}
            </div>
        );
    }


}

