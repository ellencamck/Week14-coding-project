import React, { Component } from "react";
import Review from './reviews'; 

export default class ReviewList extends Component {
    render() {
        const { reviews } = this.props;

      return (
        <div>
            <h3>Reviews:</h3>
            <ol>
                {reviews.map((review, index) => (
                    <Review key={index} text={review} />
                ))}
            </ol>
        </div>
      );
    }
}