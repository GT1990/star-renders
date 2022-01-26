import React, { Component } from "react";
import Star from "./Star";

class StarRating extends Component {
  // Initialize a 'rating' state
  state = {
    rating: 0,
  };

  // Write a function that returns 5 Star components

  starGiver = () => {
    let fiveStars = [];
    for (let i = 0; i < 5; i++) {
      fiveStars.push(
        <Star
          key={i}
          id={i + 1}
          rating={this.state.rating}
          ratingChange={this.handleRatingUpdate}
        />
      );
    }
    return fiveStars;
  };
  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props
  handleRatingUpdate = (rating) => {
    this.setState((prevState) => {
      // if the last selected star is clicked it becomes unselected
      if (prevState.rating === rating) {
        return { rating: prevState.rating - 1 };
      }
      return { rating };
    });
  };

  render() {
    return <ul className="course--stars">{this.starGiver()}</ul>;
  }
}

export default StarRating;
