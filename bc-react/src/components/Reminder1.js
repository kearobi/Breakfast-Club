//Reminder fetches data from EventStore and UserStore

import React, { Component } from 'react';
import eventStore from '../stores/EventStore';
import userStore from '../stores/UserStore';
import {Link} from 'react-router-dom'
import Moment from 'react-moment'

class Reminder1 extends Component {

render() {
    let greeting;
    let message1;
    let message2;
    let link;

    let currentEvent = this.props.event;
    let user = this.props.user;

    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let temp = currentEvent.event.date.split('T')
    let date = temp[0].split('-')
    let dayOfWeek = weekday[new Date(date).getDay()]
    let month = months[new Date(date).getMonth()]
    let day = new Date(date).getDate()
    let hourTime = new Date(temp).getHours()
    let minuteTime = new Date(temp).getMinutes()

    if (!currentEvent.event.vote_status){
      if (user.rsvp){
          message1 = `See you on `
          link = `${dayOfWeek}`
          //TODO = add time of event
          message2 = ` at ${currentEvent.event.winner === 1 ? currentEvent.places[0].name : currentEvent.places[1].name}!`
      }
      else {
          message1 = "No "
          link = 'breakfast'
          message2 = ' for you this week!'
      }
    }
    else {
      if (user.voted){
        let momentDate = this.props.event.event.date
        if (user.rsvp){
            greeting = `Hey ${user.firstName}, you're on the guest list!`
            message1 = 'The '
            link = 'details'
            //TODO = fix hardcorded "Thursday at 12 pm"
            message2 = function(){

              return(
              <Moment format='dddd'>
                {momentDate}
              </Moment>
            )}
        }
        else {
            message1 = "Are you in or are you in? "
            link = 'RSVP'
            message2 = ''
        }
      }
      else {
          //TODO = fix hardcorded "0 AM"
          greeting = `Hey, ${user.firstName}! This ${dayOfWeek} at ${hourTime}:${minuteTime}0 AM`
          message1 = `${currentEvent.places[0].name} or ${currentEvent.places[1].name}? `
          link = "Cast your vote!"
          message2 = ""
      }
    }

    return (
      <div>
        {greeting}
        <br />
        {message1}
        <Link to='/current-event'>{link}</Link>
        {message2()}
        {/* <Moment format='dddd'>
          {this.props.event.event.date}
        </Moment> */}
      </div>
    );
  }
}

export default Reminder1;
