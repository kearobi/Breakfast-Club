import React, { Component } from 'react';

class EventChoice extends Component {

  render() {
    return (
      <div>
        <p>Choice {this.props.choice}</p>
        <h4>{this.props.place.name}</h4>
        <img src={this.props.place.image_url} />
        <img className="yelp-rating" src={`../Images/small_${this.props.place.yelp_rating}.png`} />
      </div>
    );
  }
}

export default EventChoice;
