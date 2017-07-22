//EventChoice gets props from EventDetail

import React, { Component } from 'react';
import {registerVote} from '../actions/EventActions';

class EventChoice extends Component {

  handleClick(){
    registerVote(this.props.user, this.props.event, this.props.choice)
  }

  render() {
    return (
      <div>
        <div className='place-name'>
          <a  href={this.props.place.url}
              title='open in yelp'
              target='_blank'>
            {this.props.place.name}
          </a>
        </div>
        <div className='place' onClick={this.handleClick.bind(this)}>
          <img  className='place-img'
                src={this.props.place.image_url}
                alt='restaurant' />
          <div className='after'>VOTE</div>
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
