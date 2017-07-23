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
    fetchPastEvent(this.props.match.params.eventId);
  }

  componentWillMount(){
    eventStore.on('change', this.updatePastEvent)
  }

  componentWillUnmount(){
    eventStore.removeListener('change', this.updatePastEvent)
  }

  updatePastEvent(){
    let pastEvent = eventStore.getPastEvent();
    this.setState({
      pastEvent: pastEvent
    })
  }

  checkPastEvent(){
    if(this.state.pastEvent){
      return (
        <PastEventDetail event={this.state.pastEvent}/>
      )
    }else{
      return(<div>Loading...</div>)
      }
    }

  render() {
    return (

      <div className="wrapper">{/* //this is the flex container */}
        <SideBar />{/* //this is a flex item  with a nested flex container */}
        <div className='event-page'>{/* //this is a flex item */}
          <div className='nested'>{/* //this is a nested flex container */}
            <Header />
            <SideBarMini />
            {this.checkPastEvent()}
          </div>
        </div>
      </div>
    );
  }
}

export default PastEvent;
