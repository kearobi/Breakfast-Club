import React, { Component } from 'react';
import {fetchPastEvent} from '../actions/EventActions';
import eventStore from '../stores/EventStore';
import PastEventDetail from '../components/PastEventDetail';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Header from '../components/Header';
import Moment from 'react-moment';
import 'moment-timezone';

class PastEvent extends Component {
  constructor(props){
    super(props)
    this.state = {
      pastEvent: null,
    }
    this.updatePastEvent = this.updatePastEvent.bind(this)
    fetchPastEvent(this.props.eventId);
  }

  componentWillMount(){
    eventStore.on('change', this.updatePastEvent)
  }

  componentWillUnmount(){
    eventStore.removeListener('change', this.updatePastEvent)
  }

  updatePastEvent(){
    this.setState({
      pastEvent: eventStore.getPastEvent()
    })
  }

  render() {
    return (
      <div>

      {this.state.pastEvent &&
        <PastEventDetail event={this.state.pastEvent}/>}

      {!this.state.pastEvent &&
        <div></div>}

      </div>
    );
  }
}

export default PastEvent;
