import React, { Component } from "react"; 

export default class Review extends Component {
    render() {
        const { text } = this.props;

      return (
        <li>{text}</li>
      );
    }
}