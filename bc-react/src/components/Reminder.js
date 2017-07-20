//Reminder fetches data from EventStore and UserStore

import React, { Component } from 'react';
import eventStore from '../stores/EventStore';
import userStore from '../stores/UserStore';
import {Link} from 'react-router-dom'
import Moment from 'react-moment'

class Reminder extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: '',
      message1: '',
      link: '',
      message2: '',
      event: {},
      userUpdated: false,
      eventUpdated: true,
    }
    this.onUpdateMessage = this.updateMessage.bind(this)
    this.onUpdateUser = this.updateUser.bind(this)
    this.onUpdateEvent = this.updateEvent.bind(this)
  }
  componentWillMount(){
    eventStore.on('current event fetched', this.onUpdateMessage);
    userStore.on('voted set to false', this.onUpdateUser);
    eventStore.on('new event created', this.onUpdateEvent);
  }

  componentWillUnmount(){
    eventStore.removeListener('current event fetched', this.onUpdateMessage);
    userStore.removeListener('voted set to false', this.onUpdateUser);
    eventStore.removeListener('new event created', this.onUpdateEvent);
  }

  updateUser(){
    this.setState({
      userUpdated: true
    })
    if (this.state.eventUpdated){
      this.updateMessage()
    }
  }

  updateEvent(){
    this.setState({
      eventUpdated: true
    })
    if (this.state.userUpdated){
      this.updateMessage()
    }
  }

  checkIfAttending(user_id, guestLists){
    let toReturn = false;
    for (var i = 0; i < guestLists.length; i++){
      if (user_id === guestLists[i].user_id){
        return true;
      }
    }
    return toReturn;
  }

  updateMessage(){
    let currentEvent = eventStore.getCurrentEvent();
    let user = this.props.user;
    this.setState({
      greeting: `Hey ${user.firstName}! `
    })

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
      if (this.checkIfAttending(user.id, currentEvent.guestLists)){
        this.setState({
          event: currentEvent,
          message1: `See you on `,
          link: `${dayOfWeek}`,
          //TODO: add time of event
          message2: ` at ${currentEvent.event.winner === 1 ? currentEvent.places[0].name : currentEvent.places[1].name}!`
        })
      }
      else {
        this.setState({
          event: currentEvent,
          message1: "No breakfast for you this week!",
          link: '',
          message2: ''
        })
      }
    }
    else {
      if (user.voted){
        if (this.checkIfAttending(user.id, currentEvent.guestLists)){
          this.setState({
            event: currentEvent,
            greeting: `Hey ${user.firstName}, you're on the guest list!`,
            message1: 'The ',
            link: 'details',
            //TODO: fix hardcorded "Thursday at 12 pm"
            message2: " will be revealed this Thursday at 12 pm"
          })
        }
        else {
          this.setState({
            event: currentEvent,
            message1: "Are you in or are you in? ",
            link: 'RSVP',
            message2: ''
          })
        }
      }
      else {
        this.setState({
          event: currentEvent,
          //TODO: fix hardcorded "0 AM"
          greeting: `Hey, ${user.firstName}! This ${dayOfWeek} at ${hourTime}:${minuteTime}0 AM`,
          message1: `${currentEvent.places[0].name} or ${currentEvent.places[1].name}? `,
          link: "Cast your vote!",
          message2: ""
        })
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.greeting}
        <br />
        {this.state.message1}
        <Link to='/current-event'>{this.state.link}</Link>
        {this.state.message2}
      </div>
    );
  }
}

export default Reminder;
