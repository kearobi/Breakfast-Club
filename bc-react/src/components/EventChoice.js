//EventChoice gets props from EventDetail

import React, { Component } from 'react';

class EventChoice extends Component {

  render() {
    return (
      <div>
        <div className='place-name'>{this.props.place.name}</div>
        <div><img className='place-img' src={this.props.place.image_url} alt='restaurant' /></div>
        <div><img className='yelp-rating' src={`../Images/small_${this.props.place.yelp_rating}.png`} alt='rating' /></div>
      </div>
    );
  }
}

export default EventChoice;
