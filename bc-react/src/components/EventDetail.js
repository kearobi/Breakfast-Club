import React, { Component } from 'react';
import VoteButton from '../components/VoteButton';
import RSVPButton from '../components/RSVPButton';

class EventDetail extends Component {
  render() {
    var mappedUsers = this.props.eventData.users.map(function(user, i){
      return (
        <div key={i}>
          <p>{user.firstName + " " + user.lastName}</p>
          <p>{user.email}</p>
        </div>
      )
    })

    return (
      <div>
        <div>
          <h1>Next breakfast club</h1>
          <p>Date: {this.props.eventData.event.date}</p>
        </div>
        <div>
          <p>Choice 1</p>
          <h4>{this.props.eventData.places[0].name}</h4>
          <p>Choice 2</p>
          <h4>{this.props.eventData.places[1].name}</h4>
        {!this.props.voted && <VoteButton choice="1"/>}
        {!this.props.voted && <VoteButton choice="2"/>}
        {!this.props.rsvped && this.props.voted && <RSVPButton/>}
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
