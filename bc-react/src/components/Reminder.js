//Reminder fetches data from EventStore and UserStore

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Moment from 'react-moment'

class Reminder extends Component {

render() {
    let greeting;
    let message1;
    let message2;
    let link;
    let currentEvent = this.props.event;
    let date = currentEvent.event.date
    let user = this.props.user;

    let dayBefore = function(){
      return(<Moment format='dddd'>{new Date(date).getTime() - 72000000}</Moment>)
    }

    let revealWinner = function(){
      return(<Moment format='h:mm a'>{new Date(date).getTime() - 39600000}</Moment>)
    }

    //TODO! AFTER DEMO, CHANGE 39600000 (11 HOURS) BACK TO 72000000 (20 HOURS)

    let weekday = function(){
      return(<Moment format='dddd'>{date}</Moment>)
    }
    let time = function(){
      return(<Moment format='h:mm a'>{date}</Moment>)}

    if (!currentEvent.event.vote_status){
      if (user.rsvp){
          greeting = ()=>{return(<span>Hey {user.firstName}, a winner has been chosen!</span>)}
          message1 = ()=>{return(<span>See you at </span>)}
          link = ()=>{return(<span>{currentEvent.event.winner === 1 ? currentEvent.places[0].name : currentEvent.places[1].name}</span>)}
          message2 = ()=>{return(<span> on {weekday()} at {time()}</span>)}
      }
      else {
        greeting = ()=>{return(<span>Hey {user.firstName}, last chance to RSVP!</span>)}
        message1 = ()=>{return(<span>We'll be at </span>)}
        link = ()=>{return(<span>{currentEvent.event.winner === 1 ? currentEvent.places[0].name : currentEvent.places[1].name}</span>)}
        message2 = ()=>{return(<span> on {weekday()} at {time()}</span>)}
      }
    }
    else {
      if (user.voted){
        if (user.rsvp){
            greeting = ()=>{return(<span>Hey {user.firstName}, you're on the guest list!</span>)}
            message1 = ()=>{return(<span>The </span>)}
            link = ()=>{return(<span>details</span>)}
            message2 = ()=>{return(<span> will be revealed {dayBefore()} at {revealWinner()}</span>)}
          }

        else {
            greeting = ()=>{return(<span>Hey {user.firstName}, this {weekday()} at {time()}</span>)}
            message1 = ()=>{return(<span>Are you in or are you in? </span>)}
            link = ()=>{return(<span>RSVP</span>)}
            message2 = ()=>{return(<span></span>)}
        }
      }
      else {
          greeting = ()=>{return(<span>Hey, {user.firstName}! This {weekday()} at {time()}</span>)}
          message1 = ()=>{return(<span>{currentEvent.places[0].name} or {currentEvent.places[1].name}? </span>)}
          link = ()=>{return(<span>Cast your vote!</span>)}
          message2 = ()=>{return(<span></span>)}
      }
    }

    return (
      <div>
        {greeting()}
        <br />
        {message1()}
        <Link to='/current-event'>{link()}</Link>
        {message2()}
      </div>
    );
  }
}

export default Reminder;
