import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import eventStore from '../stores/EventStore';
import userStore from '../stores/UserStore';
import EventDetail from '../components/EventDetail';

class CurrentEvent extends Component {
  constructor(props){
    super(props)
    this.state= {
      event: eventStore.getCurrentEvent(),
      user: userStore.getUser(),
      rsvp: this.checkIfAttending(userStore.getUser().id, eventStore.getCurrentEvent().guestLists),
      message: 'welcome'
    }
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

  componentWillMount(){
    eventStore.on('current event fetched', this.displayEvent.bind(this));
    eventStore.on('vote registered', this.voteRegistered.bind(this));
    userStore.on('rsvp', this.rsvpRegistered.bind(this));
  }

  voteRegistered(){
    console.log("vote registered: ", eventStore.getCurrentEvent())
    console.log("vote registered: ", userStore.getUser())
    this.setState({
      event: eventStore.getCurrentEvent(),
      user: userStore.getUser(),
      message: "Vote Registered",
      rsvp: false
    })
  }

  rsvpRegistered(){
    this.setState({
      event: eventStore.getCurrentEvent(),
      user: userStore.getUser(),
      message: "RSVP'd",
      rsvp: true
    })
  }

  displayEvent(){
    this.setState({
      event: eventStore.getCurrentEvent()
    })
  }

  render(){
      return (
        <div>
          <p>{this.state.message}</p>
          <EventDetail voted={this.state.user.voted} rsvp={this.state.rsvp} user={this.state.user} eventData={this.state.event} />
          <Link to="/home">
            <div className="align-button">
              <input
                className='take-me-back'
                type='button'
                value='Take Me Back!!'>
              </input>
            </div>
          </Link>
        </div>
        );
      }
  }
export default CurrentEvent;
