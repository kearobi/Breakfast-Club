//EventDetail gets props from CurrentEvent, TestEvent
//EventDetail passes props to VoteButton, EventChoice
//EventDetail imports RSVPButton

import React, { Component } from 'react';
import VoteButton from './VoteButton';
import RSVPButton from './RSVPButton';
import EventChoice from './EventChoice'

class EventDetail extends Component {
  dateParser(){
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let temp = this.props.eventData.event.date.split('T')
    let date = temp[0].split('-')
    let dayOfWeek = weekday[new Date(date).getDay()]
    let month = months[new Date(date).getMonth()]
    let day = new Date(date).getDate()
    let hourTime = new Date(temp).getHours()
    let minuteTime = new Date(temp).getMinutes()
    console.log(dayOfWeek, "," , month, "", day, " @ ", hourTime,":", minuteTime)
  }
  render() {
    this.dateParser()
    var mappedUsers;
    if (this.props.eventData.users.length === 0){
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
      <div className='events-page'>
        <div>
          <p className='FontAmatic'>{this.props.eventData.event.date}</p>
        </div>
        <div>
          {(this.props.winner === 1 || this.props.winner === null) && <EventChoice
            place={this.props.eventData.places[0]}
            choice={1}


            />}
          {(this.props.winner === 2 || this.props.winner === null) && <EventChoice
            place={this.props.eventData.places[1]}
            choice={2}
            />}
        {!this.props.voted && <VoteButton choice="1"/>}
        {!this.props.voted && <VoteButton choice="2"/>}
        {!this.props.rsvp && this.props.voted && <RSVPButton/>}
        </div>
        <div>
          <h4 className='FontAmatic'>Who's In:</h4>
          {mappedUsers}
        </div>
      </div>
    );
  }
}

export default EventDetail;
