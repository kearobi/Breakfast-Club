import React, { Component } from 'react';

class PastEventDetail extends Component {

  render() {
    let event = this.props.event.event;
    let place = this.props.event.winner === 1 ? this.props.event.places[0] : this.props.event.places[1];
    let users = this.props.event.users;
    let guestList;
    if (users.length === 0){
      guestList = <div>Canceled</div>
    }
    else {
      let guestlist = this.props.event.users.map(function(user, i){
        return (
          <div className='flex-item' key={i}>
            {user.firstName} {user.lastName.slice(0, 1)}.,
          </div>
        )
      })
    }
    return (
      <div>
        <div>
          Date: {event.date}
        </div>
        <div>
          Speaker: {event.speaker}
        </div>
        <a  href={place.url}
            title='open in yelp'
            target='_blank'>
          {place.name}
        </a>
        <img  className='place-img'
              src={place.image_url}
              alt='restaurant' />
        <img  className='yelp-rating'
              src={`../Images/small_${place.yelp_rating}.png`}
              alt='rating' />
        <div className='place-details'>
          {place.review_count} Reviews&nbsp;|&nbsp;
          {place.price}
          &nbsp;|&nbsp;
          {place.categories}
        </div>
        <div className='place-details'>
          {place.address_street}, {place.address_city}
          &nbsp;{place.address_zip}
        </div>
        {guestList}
      </div>

    );
  }
}

export default PastEventDetail;
