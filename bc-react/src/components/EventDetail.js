//EventDetail gets props from CurrentEvent
//EventDetail passes props to VoteButton, EventChoice, RSVPButton

import React, { Component } from 'react';
import RSVPButton from './RSVPButton';
import EventChoice from './EventChoice'

class EventDetail extends Component {

  render() {
    let winner;
    if(this.props.event.event.winner){
      if (this.props.event.event.winner === 1) {
        winner = this.props.event.places[0].name
      }else{
        winner = this.props.event.places[1].name
      }
    }
    let guestlist;
    //if no users have RSVPd yet, return "No RSVPs yet"
    if (this.props.guestlist.length === 0){
      guestlist = <div className='flex-item'>No RSVPs yet</div>
    } else {
    //if one or more users have RSVPd, return the user's first name and first initial of the last name
      guestlist = this.props.guestlist.map(function(user, i){
        return (
          <span className='flex-item' key={i}>
            {user.firstName}&nbsp;{user.lastName.slice(0, 1)}.,
          </span>
        )
      })
    }

    return (
      <div className='events-page'>
        {(this.props.event.event.vote_status && !this.props.user.voted) &&
          <div className='voting'>
            {/*this says: if the winner is null, show the place option along with the vote button. If the winner is not null, show the place option that won */}
                {/* option 1 */}
              <div className='option'>
                {(this.props.event.event.winner === 1 || this.props.event.event.winner === null) &&
                <EventChoice
                  user={this.props.user}
                  event={this.props.event}
                  place={this.props.event.places[0]}
                  choice='1' />}
              </div>
              <div className='vs'>VS</div>
                {/* option 2 */}
              <div className='option'>
              {(this.props.event.event.winner === 2 || this.props.event.event.winner === null) &&
                <EventChoice
                  user={this.props.user}
                  event={this.props.event}
                  place={this.props.event.places[1]}
                  choice='2' />}
              </div>
          </div>}
          {/*this says: if voting is closed or if the user has already voted, show the event details and the RSVP button */}
          {(!this.props.event.event.vote_status || this.props.user.voted) &&
        <div className='event-details'> {/* this is a flex container */} {/*these are the event details */}
            <div className='flex-item-header'>
              <div className='detail'>Where:</div>
              <div className='flex-item'>
                {winner || `Still voting...`}
              </div>
            </div>
            <div className='flex-item-header'>
              <div className='detail'>Guest Speaker:</div>
              <div className='flex-item'>
                {this.props.event.event.speaker || `Nobody lined up yet...`}
              </div>
            </div>
            <div className='flex-item-header'>
              <div className='detail'>RSVP:</div>
              <RSVPButton user={this.props.user}
                          event={this.props.event.event}/>
            </div>
            <div className='flex-item-header'>
              <div className='detail'>Who's In:</div>
              <div className='RSVP'>
                {/* list of users who RSVP'd yes */}
                {guestlist}
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default EventDetail;
