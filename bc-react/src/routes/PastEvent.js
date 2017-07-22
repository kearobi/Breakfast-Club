import React, { Component } from 'react';
import {fetchPastEvent} from '../actions/EventActions';
import eventStore from '../stores/EventStore';

class PastEvent extends Component {
  constructor(props){
    super(props)
    this.state = {
      pastEvent: null
    }
    this.updatePastEvent = this.updatePastEvent.bind(this)
    fetchPastEvent(this.props.match.params.eventId);
  }

  componentWillMount(){
    eventStore.on('change', this.updatePastEvent)
  }

  updatePastEvent(){
    let pastEvent = eventStore.getPastEvent();
    this.setState({
      pastEvent: pastEvent
    })
  }

  checkPastEvent(){
    if(this.state.pastEvent){
      console.log(this.state.pastEvent)
      return(
      <div>
        <div>Success!!</div>
        <div>{this.state.pastEvent.event.speaker}</div>
      </div>
    )
  }else{
    return(<div>Loading...</div>)
    }
  }

  render() {
    return (
      <div>{this.checkPastEvent()}</div>
    );
  }
}

export default PastEvent;
