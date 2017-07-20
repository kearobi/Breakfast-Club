//CurrentEvent fetches data from EventStore,userStore
//CurrentEvent passes props to EventDetail

import React, {Component} from 'react';
import eventStore from '../stores/EventStore';
import userStore from '../stores/UserStore';
import EventDetail from '../components/EventDetail';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Header from '../components/Header';

class CurrentEvent extends Component {
  constructor(props){
    super(props)
    this.state= {
      event: eventStore.getCurrentEvent(),
      user: userStore.getUser(),
      rsvp: userStore.getUser().rsvp,
      message: ''
    }
    this.updateCurrentEvent = this.updateCurrentEvent.bind(this)
    this.voteRegistered = this.voteRegistered.bind(this)
    this.rsvpRegistered = this.rsvpRegistered.bind(this)
    this.votesCounted = this.votesCounted.bind(This)
  }

  componentWillMount(){
    eventStore.on('change', this.updateCurrentEvent)
    eventStore.on('vote registered', this.voteRegistered);
    eventStore.on('rsvp', this.rsvpRegistered);
    eventStore.on('votes counted', this.votesCounted);
  }

  componentWillUnmount(){
    eventStore.on('change', this.updateCurrentEvent)
    eventStore.removeListener('vote registered', this.updateCurrentEvent)
    eventStore.removeListener('rsvp',this.rsvpRegistered)
    eventStore.removeListener('votes counted', this.votesCounted)
  }

  voteRegistered(){
    this.setState({
      event: eventStore.getCurrentEvent(),
      user: userStore.getUser(),
      message: "Vote Registered",
    })
  }

  votesCounted(){
    this.setState({
      event: eventStore.getCurrentEvent()
    })
  }

  rsvpRegistered(){
    this.setState({
      event: eventStore.getCurrentEvent(),
      user: userStore.getUser(),
      message: "RSVP'd",
    })
  }

  render(){
      return (
        <div className="wrapper">{/* //this is the flex container */}
            <SideBar />{/* //this is a flex item  with a nested flex container */}
          <div className='event-page'>{/* //this is a flex item */}
            <div className='nested'>{/* //this is a nested flex container */}
            <Header />
            <SideBarMini />
          <p>{this.state.message}</p>
          <EventDetail
            user={this.state.user}
            eventData={this.state.event}
          />
            </div>
          </div>
        </div>
        );
      }
  }
export default CurrentEvent;
