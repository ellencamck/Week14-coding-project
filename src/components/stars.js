import React, { Component } from "react";

export default class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
        };
    }

    setRating = (star) => {
        this.setState({ rating: star });
    };

    render() {
        return (
            <div>
                <div>
                    {[1, 2, 3, 4, 5].map((star, index) => (
                        <span key={index} onClick={() => this.setRating(star)}>
                            {star <= this.state.rating ? '★' : '☆'}
                        </span>
                    ))}
                </div>
            </div>
        );
    }
}