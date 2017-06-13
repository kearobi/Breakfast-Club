import React, { Component } from 'react';
import Img from 'react-image'
import VoteButton from './VoteButton';
import RSVPButton from './RSVPButton';
import EventChoice from './EventChoice'

class EventDetail extends Component {
  render() {
    var mappedUsers;
    if (this.props.eventData.users.length == 0){
      mappedUsers = <p>No RSVPs yet</p>
    }
    else {
      mappedUsers = this.props.eventData.users.map(function(user, i){
        return (
          <div key={i}>
            <p>{user.firstName + " " + user.lastName}</p>
            <p>{user.email}</p>
          </div>
        )
      })
    }

    return (
      <div>
        <div>
          <h1>Next breakfast club</h1>
          <p>Date: {this.props.eventData.event.date}</p>
        </div>
        <div>
          {(this.props.winner == 1 || this.props.winner == null) && <EventChoice
            place={this.props.eventData.places[0]}
            choice={1}
            />}
          {(this.props.winner == 2 || this.props.winner == null) && <EventChoice
            place={this.props.eventData.places[1]}
            choice={2}
            />}
        {!this.props.voted && <VoteButton choice="1"/>}
        {!this.props.voted && <VoteButton choice="2"/>}
        {!this.props.rsvp && this.props.voted && <RSVPButton/>}
        </div>
        <div>
          <h4>Attendees</h4>
          {mappedUsers}
        </div>
      </div>
    );
  }
}

export default EventDetail;
