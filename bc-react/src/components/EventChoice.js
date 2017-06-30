//EventChoice gets props from EventDetail

import React, { Component } from 'react';

class EventChoice extends Component {

  render() {
    return (
      <tbody>
        <tr className='place-name'>{this.props.place.name}</tr>
        <tr><img className='place-img' src={this.props.place.image_url} alt='restaurant' /></tr>
        <tr><img className='yelp-rating' src={`../Images/small_${this.props.place.yelp_rating}.png`} alt='rating' /></tr>
      </tbody>
    );
  }
}

export default EventChoice;
