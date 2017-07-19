//EventDetail gets props from CurrentEvent, TestEvent
//EventDetail passes props to VoteButton, EventChoice
//EventDetail imports RSVPButton

import React, { Component } from 'react';
import VoteButton from './VoteButton';
import RSVPButton from './RSVPButton';
import EventChoice from './EventChoice'
import {rsvp} from '../actions/EventActions';
import Moment from 'react-moment';
import 'moment-timezone';

class EventDetail extends Component {
//it seems like it would make the most sense to add/remove the user from the guestlist onClick
//this handleClick stuff here is a work in progress, feel free to take over!
  handleClick(e){
    if (e.target.value === 'yes'){

    }
    else if (e.target.value === 'no'){

    }
    else {return ""}
  }
  //
  // dateParser(){
  //   let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  //   let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  //   let temp = this.props.eventData.event.date.split('T')
  //   let date = temp[0].split('-')
  //   let dayOfWeek = weekday[new Date(date).getDay()]
  //   let month = months[new Date(date).getMonth()]
  //   let day = new Date(date).getDate()
  //   let hourTime = new Date(temp).getHours()
  //   let minuteTime = new Date(temp).getMinutes()
  //   console.log(dayOfWeek, "," , month, "", day, " @ ", hourTime,":", minuteTime)
  // }
  render() {
    // this.dateParser()
    var mappedUsers;
    if (this.props.eventData.users.length === 0){
      mappedUsers = <div className='flex-item'>No RSVPs yet</div>
    }
    else {
      mappedUsers = this.props.eventData.users.map(function(user, i){
        return (
          <div className='flex-item' key={i}>
            <div>{user.firstName + " " + user.lastName}</div>
            <div>{user.email}</div>
          </div>
        )
      })
    }

    return (
      <div className='events-page'>
        <div className='event-date'>
          <Moment format='dddd, MMMM DD @ h:mm A'>
            {this.props.eventData.event.date}
          </Moment>
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
              {!this.props.voted && <VoteButton user={this.props.user} event={this.props.eventData} choice="1"/>}
              {!this.props.voted && <VoteButton user={this.props.user} event={this.props.eventData} choice="2"/>}
              {!this.props.rsvp && this.props.voted && <RSVPButton user={this.props.user} event={this.props.eventData}/>}
          </div>
        <div className='event-details'> {/* this is a flex container */}
          <div className='flex-container-1'>{/* this is a flex container */}
            <div className='flex-item-header'>Where:</div>
            <div className='flex-item-header'>Guest Speaker:</div>
            <div className='flex-item-header'>RSVP:</div>
            <div className='flex-item-header'>Who's In:</div>
          </div>
          <div className='flex-container-2'>{/* this is a flex container */}
            <div className='flex-item'>TODO</div>
            <div className='flex-item'>TODO</div>
            <form className='flex-item'> TODO
              <input type="radio" name="rsvp" value="yes" onClick={this.handleClick.bind(this)} /> Yes
              <input type="radio" name="rsvp" value="no" onClick={this.handleClick.bind(this)} /> No
            </form>
            {mappedUsers}
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetail;
