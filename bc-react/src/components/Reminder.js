import React, { Component } from 'react';
import eventStore from '../stores/EventStore';
import userStore from '../stores/UserStore';

class Reminder extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: 'Reminder',
      event: {}
    }
  }
  componentWillMount(){
    eventStore.on('current event fetched', this.updateMessage.bind(this));
    eventStore.on('votes counted', this.updateMessage.bind(this));
    eventStore.on('event created', this.updateMessage.bind(this));
  }

  checkIfAttending(user_id, guestLists){
    let toReturn = false;
    for (var i = 0; i < guestLists.length; i++){
      if (user_id == guestLists[i].user_id){
        return true;
      }
    }
    return toReturn;
  }

  updateMessage(){
    let currentEvent = eventStore.getCurrentEvent();
    let user = userStore.getUser();
    if (!currentEvent.event.vote_status){
      console.log("vote_status is false")
      if (this.checkIfAttending(user.id, currentEvent.guestLists)){
        this.setState({
          event: currentEvent,
          message: `You have a breakfast to attend! Breakfast on ${currentEvent.event.date} at ${currentEvent.event.winner == 1 ? currentEvent.places[0].name : currentEvent.places[1].name}`
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
            message: "Time to RSVP!"
          })
        }
      }
      else {
        this.setState({
          event: eventStore.getCurrentEvent(),
          message: "Time to vote!"
        })
      }
    }
  }

  render() {
    return (
      <h4>{this.state.message}</h4>
    );
  }
}

export default Reminder;
