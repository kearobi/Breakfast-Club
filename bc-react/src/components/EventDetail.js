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
import eventStore from '../stores/EventStore';
import userStore from '../stores/UserStore';
import {fetchCurrentEvent, setEventsFromLocal} from '../actions/EventActions';
import {fetchGuestlist} from '../actions/UserActions';

class EventDetail extends Component {

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

  render() {
    let guestlist;
    if (this.props.guestlist.length === 0){
      guestlist = <div className='flex-item'>No RSVPs yet</div>
    }
    else {
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
        <div className='event-date'>
          <Moment format='dddd, MMMM DD @ h:mm A'>
            {this.props.event.event.date}
          </Moment>
        </div>
          <div>
              {(this.props.event.event.winner === 1 || this.props.event.event.winner === null) && <EventChoice
                place={this.props.event.places[0]}
                choice={1}
                />}
              {(this.props.event.event.winner === 2 || this.props.event.event.winner === null) && <EventChoice
                place={this.props.event.places[1]}
                choice={2}
                />}
              {/* //put vote page mockup here// */}
              {!this.props.user.voted && <VoteButton user={this.props.user} event={this.props.event} choice="1"/>}
              {!this.props.user.voted && <VoteButton user={this.props.user} event={this.props.event} choice="2"/>}
              {/* {!this.props.rsvp && this.props.voted && <RSVPButton user={this.props.user} event={this.props.eventData}/>} */}
          </div>
          {this.props.voted &&
        <div className='event-details'> {/* this is a flex container */}
          <div className='flex-container-1'>{/* this is a flex container */}
            <div className='flex-item-header'>Where:</div>
            <div className='flex-item-header'>Guest Speaker:</div>
              <div className='flex-item-header'>RSVP:</div>
            <div className='flex-item-header'>Who's In:</div>
          </div>
          <div className='flex-container-2'>{/* this is a flex container */}
            <div className='flex-item'>{this.props.event.event.winner || `Still voting...`}</div>
            <div className='flex-item'>{this.props.event.event.speaker || `Nobody lined up yet...`}</div>
                <RSVPButton user={this.props.user} event={this.props.event}/>
          </div>
        </div>
        }
        <div className='RSVP'>
          {guestlist}
        </div>
        <RSVPButton user={this.props.user} event={this.props.event}/>
      </div>
    );
  }
}

export default EventDetail;
