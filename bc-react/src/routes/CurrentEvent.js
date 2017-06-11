import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import eventStore from '../stores/EventStore';
import userStore from '../stores/UserStore';
import EventDetail from '../components/EventDetail';

class CurrentEvent extends Component {
  constructor(props){
    super(props)
    this.state= {
      formId: '',
      event: null,
      voted: userStore.getUser().voted,
      rsvp: this.checkIfAttending(userStore.getUser().id, eventStore.getCurrentEvent().guestLists),
      message: 'welcome'
    }
  }

  checkIfAttending(user_id, guestLists){
    let toReturn = false;
    for (var i = 0; i < guestLists.length; i++){
      if (user_id == guestLists[i].user_id){
        userStore.user.attending = true;
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
    this.setState({
      message: "Vote Registered"
    })
  }

  rsvpRegistered(){
    this.setState({
      message: "RSVP'd"
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
          <EventDetail voted={this.state.voted} rsvped={this.state.rsvped} user={userStore.getUser()} eventData={eventStore.getCurrentEvent()} />
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
