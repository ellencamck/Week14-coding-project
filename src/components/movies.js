import React, { Component } from "react";
import Stars from './stars';
import ReviewList from './reviewlist';
import ReviewForm from './reviewform';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
        };
    }

    addReview = (review) => {
        this.setState({ reviews: [...this.state.reviews, review] });
    };

    render() {
        const { movie } = this.props;

        if (!movie) {
            return null; // or some fallback UI for missing data
        }

        return (
            <div className="movie">
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <Stars /> {/* Pass necessary props to Stars component */}
                <ReviewList reviews={this.state.reviews} /> {/* Pass reviews prop */}
                <ReviewForm addReview={this.addReview} /> {/* Pass addReview method */}
            </div>
        );
    }
}