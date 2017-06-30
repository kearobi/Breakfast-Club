import React, { Component } from 'react';
import eventStore from '../stores/EventStore';
import userStore from '../stores/UserStore';

class Reminder extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: 'Reminder',
      event: {},
      userUpdated: false,
      eventUpdated: true
    }
    this.onUpdateMessage = this.updateMessage.bind(this)
    this.onUpdateUser = this.updateUser.bind(this)
    this.onUpdateEvent = this.updateEvent.bind(this)
  }
  componentWillMount(){
    eventStore.on('current event fetched', this.onUpdateMessage);
    eventStore.on('votes counted', this.onUpdateMessage);
    userStore.on('voted set to false', this.onUpdateUser);
    eventStore.on('new event created', this.onUpdateEvent);
  }

  componentWillUnmount(){
    eventStore.removeListener('current event fetched', this.onUpdateMessage);
    eventStore.removeListener('votes counted', this.onUpdateMessage);
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
    let user = userStore.getUser();
    if (!currentEvent.event.vote_status){
      if (this.checkIfAttending(user.id, currentEvent.guestLists)){
        this.setState({
          event: currentEvent,
          message: `See you on ${currentEvent.event.date} at ${currentEvent.event.winner === 1 ? currentEvent.places[0].name : currentEvent.places[1].name}!`
        })
      }
      else {
        this.setState({
          event: eventStore.getCurrentEvent(),
          message: "No breakfast for you this week!"
        })
      }
    }
    else {
      if (user.voted){
        if (this.checkIfAttending(user.id, currentEvent.guestLists)){
          this.setState({
            event: eventStore.getCurrentEvent(),
            message: "Not all votes are in, check back later for final details"
          })
        }
        else {
          this.setState({
            event: eventStore.getCurrentEvent(),
            message: "Are you in or are you in?"
          })
        }
      }
      else {
        this.setState({
          event: eventStore.getCurrentEvent(),
          message: "Cast your vote!"
        })
      }
    }
  }

  render() {
    return (
      <div> {this.state.message} </div>
    );
  }
}

export default Reminder;
