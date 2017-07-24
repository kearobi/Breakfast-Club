import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class PastEventDetail extends Component {

  render() {
    let event = this.props.event.event;
    let place = this.props.event.winner === 1 ? this.props.event.places[1] : this.props.event.places[0];
    let users = this.props.event.users;
    let guestList;
    if (users.length === 0){
      guestList = <div>Canceled</div>
    }
    else {
      let guestlist = this.props.event.users.map(function(user, i){
        return (
          <span key={i}>
            {user.firstName} {user.lastName.slice(0, 1)}.,
          </span>
        )
      })
    }
    return (
      <div className='polaroid-details'>
        <div className='polaroid-date'>
          <Moment format='ddd, MMMM DD'>{event.date}</Moment>
        </div>
        <a    href={place.url}
          title='open in yelp'
          target='_blank'>
          {place.name}
        </a>
        <div>
        <img  className='place-img'
              src={place.image_url}
              alt='restaurant' />
        </div>
        <span>
        <img  className='yelp-rating'
              src={`../Images/small_${place.yelp_rating}.png`}
              alt='rating' />
        </span>
        <div className='guests'>
          Guest Speaker: {event.speaker}
          <br />
          RSVP: {guestList}
      </div>
      </div>

    );
  }
}

export default PastEventDetail;
