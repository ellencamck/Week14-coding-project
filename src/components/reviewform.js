import React, { Component } from "react"; 

export default class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewText: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({ reviewText: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addReview(this.state.reviewText);
        this.setState({ reviewText: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea 
                    value={this.state.reviewText}
                    onChange={this.handleInputChange}
                    placeholder="Write a review..."
                    rows="4"
                />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            
        );
    }
}