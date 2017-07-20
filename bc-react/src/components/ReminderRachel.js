//Reminder fetches data from EventStore and UserStore

import React, { Component } from 'react';
import eventStore from '../stores/EventStore';
import userStore from '../stores/UserStore';
import {Link} from 'react-router-dom'
import Moment from 'react-moment'

class ReminderRachel extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: '',
      message1: '',
      link: '',
      message2: '',
      user: this.props.user,
      event: this.props.event
    }
  }


  render() {
    let greeting
    let message1
    let message2
    let link
      greeting = `Hey ${this.props.user.firstName}! `
      debugger

      // let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      // let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      // let temp = this.props.event.date.split('T')
      // let date = temp[0].split('-')
      // let dayOfWeek = weekday[new Date(date).getDay()]
      // let month = months[new Date(date).getMonth()]
      // let day = new Date(date).getDate()
      // let hourTime = new Date(temp).getHours()
      // let minuteTime = new Date(temp).getMinutes()

      if (!this.props.event.vote_status){
        if (this.props.user.rsvp){
            message1 = `See you on `
            // link = `${dayOfWeek}`,
            //TODO: add time of event
            message2 = ` at winner`
        }
        else {
            message1 = "No breakfast for you this week!"
            link = ''
            message2 = ''
        }
      }
      else {
        if (this.props.user.voted){
          if (this.props.user.rsvp){
              greeting = `Hey ${this.props.user.firstName}, you're on the guest list!`
              message1 = 'The '
              link = 'details'
              //TODO: fix hardcorded "Thursday at 12 pm"
              message2 = " will be revealed this Thursday at 12 pm"
          }
          else {
              message1 = "Are you in or are you in? "
              link = 'RSVP'
              message2 = ''
          }
        }
        else {
            //TODO: fix hardcorded "0 AM"
            // greeting = `Hey, ${this.props.user.firstName}! This ${dayOfWeek} at ${hourTime}:${minuteTime}0 AM`
            // message1 = `${currentEvent.places[0].name} or ${currentEvent.places[1].name}? `,
            link = "Cast your vote!"
            message2 = ""
        }
      }

    return (
      <div>
        {this.greeting}
        <br />
        {this.message1}
        <Link to='/current-event'>{this.link}</Link>
        {this.message2}
      </div>
    );
  }
}

export default ReminderRachel;
