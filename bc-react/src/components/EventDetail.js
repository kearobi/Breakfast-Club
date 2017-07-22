//EventDetail gets props from CurrentEvent
//EventDetail passes props to VoteButton, EventChoice, RSVPButton

import React, { Component } from 'react';
import VoteButton from './VoteButton';
import RSVPButton from './RSVPButton';
import EventChoice from './EventChoice'

class EventDetail extends Component {

  render() {
    let guestlist;
    //if no users have RSVPd yet, return "No RSVPs yet"
    if (this.props.guestlist.length === 0){
      guestlist = <div className='RSVP-item'>No RSVPs yet</div>
    } else {
    //if one or more users have RSVPd, return the user's first name and first initial of the last name
      guestlist = this.props.guestlist.map(function(user, i){
        return (
          <div className='RSVP-item' key={i}>
            {user.firstName} {user.lastName.slice(0, 1)}.,
          </div>
        )
      })
    }

    return (
      <div className='events-page'>
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
          </div>
          {/*this says: if voting is closed or if the user has already voted, show the event details and the RSVP button */}
          {(!this.props.event.event.vote_status || this.props.user.voted) &&
        <div className='event-details'> {/* this is a flex container */} {/*these are the event details */}
          <div className='flex-container-1'>{/* this is a flex container */}
            <div className='flex-item-header'>Where:</div>
            <div className='flex-item-header'>Guest Speaker:</div>
              <div className='flex-item-header'>RSVP:</div>
            <div className='flex-item-header'>Who's In:</div>
          </div>
          <div className='flex-container-2'>{/* this is a flex container */}
            {/*this says: if there is a winner (aka the votes have been counted) show the winner, otherwise show "still voting" */}
            <div className='flex-item'>{this.props.event.event.winner || `Still voting...`}</div>
            {/*this says: if there is a speaker show the speaker, otherwise show "Nobody lined up yet" */}
            <div className='flex-item'>{this.props.event.event.speaker || `Nobody lined up yet...`}</div>
            {/*RSVP button. A user can rsvp to the current event at any time */}
            <RSVPButton user={this.props.user}/>
          </div>
          <div className='RSVP'>
            {/* list of users who RSVP'd yes */}
            {guestlist}
          </div>
        </div>
        }
      </div>
    );
  }
}

export default EventDetail;
