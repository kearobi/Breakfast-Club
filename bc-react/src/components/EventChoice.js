//EventChoice gets props from EventDetail

import React, { Component } from 'react';

class EventChoice extends Component {

  render() {
    return (
      <div>
        <div className='place-name'>{this.props.place.name}</div>
        <div>
          <img  className='place-img'
                src={this.props.place.image_url}
                alt='restaurant' />
        </div>
        <div className='place-details'>
          <img  className='yelp-rating'
                src={`../Images/small_${this.props.place.yelp_rating}.png`}
                alt='rating' />
          {this.props.place.review_count} Reviews
        </div>
        <div className='place-details'>
          {this.props.place.price} {this.props.place.categories}
        </div>
        <div className='place-details'>
          {this.props.place.address_street}, {this.props.place.address_city}
          &nbsp;{this.props.place.address_zip}
        </div>
      </div>
    );
  }
}

export default EventChoice;
