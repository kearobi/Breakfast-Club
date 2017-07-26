//PastEventDetail gets props from PastEvent

import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class PastEventDetail extends Component {

  getFullName(item, index) {
      let fullname = [item.firstName,item.lastName.slice(0, 1)].join(" ")
      return (
        <span>{fullname}., </span>
      )
  }

  render() {

    let event = this.props.event.event;
    let place = this.props.event.event.winner === 1 ? this.props.event.places[0] : this.props.event.places[1];
    let users = this.props.event.users;
    let guestList;
    if (users.length === 0){
      guestList = <div>Canceled</div>
    }
    else {
      guestList = this.props.event.users.map(this.getFullName.bind(this))
    }
    return (
      <div className='polaroid-details'>
        <div className='polaroid-date'>
          <Moment format='dddd, MMMM DD'>{event.date}</Moment>
        </div>
        <div className='past-place-name'>
          <a  href={place.url}
              title='open in yelp'
              target='_blank'>
              {place.name}
          </a>
        </div>
        <div>
        <img  className='place-img'
              src={place.image_url}
              alt='restaurant' />
        </div>
        <span>
        <img  className='yelp-rating'
              src={`../Images/small_${place.yelp_rating}.png`}
              alt='rating' />
        </span>&nbsp;|&nbsp;
        <span>{place.address_street}</span>
        <div className='past-guests'>
          <span className='bold'>Guest Speaker:</span> {event.speaker}
          <br />
          <span className='bold'>Guestlist:</span> {guestList}
      </div>
      </div>

    );
  }
}

export default PastEventDetail;
