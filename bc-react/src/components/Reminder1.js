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
    let message3;
    let message4;
    let link;
    let currentEvent = this.props.event;
    let date = currentEvent.event.date
    let user = this.props.user;

    let dayBefore = function(){
      return(<Moment format='dddd'>{new Date(date).getTime() - 86400000}</Moment>)
    }

    let weekday = function(){
      return(<Moment format='dddd'>{date}</Moment>)
    }
    let time = function(){
      return(<Moment format='h:mm A'>{date}</Moment>)}

    if (!currentEvent.event.vote_status){
      if (user.rsvp){
          message1 = `See you on `
          link = weekday()
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
        if (user.rsvp){
            greeting = ()=>{
              return(<span>Hey {user.firstName}, you're on the guest list!</span>)}
            message1 = ()=>{return(<span>the </span>)}
            link = ()=>{return(<span>details</span>)}
            //TODO = fix hardcorded "Thursday at 12 pm"
            message2 = ()=>{return(<span>will be revealed {dayBefore()} at </span>)}
            // message3 = weekday()
            // message4 = 'at 12 pm'
          }
        else {
            message1 = "Are you in or are you in? "
            link = 'RSVP'
            message2 = ''
        }
      }
      else {
          //TODO = fix hardcorded "0 AM"
          greeting = function(){
            return(<span>Hey, ${user.firstName}! This at ${time()}</span>)}
          message1 = `${currentEvent.places[0].name} or ${currentEvent.places[1].name}? `
          link = "Cast your vote!"
          message2 = ""
      }
    }

    return (
      <div>
        {greeting()}
        <br />
        {message1()}
        <Link to='/current-event'>{link()}</Link>&nbsp;
        {message2()}
        {/* {message3}&nbsp;
        {message4} */}
      </div>
    );
  }
}

export default Reminder1;
