import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import eventStore from '../stores/EventStore';
import EventDetail from '../components/EventDetail';

class CurrentEvent extends Component {
  constructor(props){
    super(props)
    this.state= {
      formId: '',
      event: null,
      message: 'welcome'
    }
  }

  componentWillMount(){
    eventStore.on('current event fetched', this.displayEvent.bind(this));
    eventStore.on('vote registered', this.voteRegistered.bind(this));
  }

  voteRegistered(){
    this.setState({
      message: "Vote Registered"
    })
  }

  displayEvent(){
    this.setState({
      event: eventStore.getCurrentEvent()
    })
  }

  render(){
    console.log("getevent", eventStore.getCurrentEvent())
      return (
        <div>
          <p>{this.state.message}</p>
          <EventDetail data={eventStore.getCurrentEvent()} />
        </div>
        );
      }
  }
export default CurrentEvent;
