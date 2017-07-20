//CurrentEvent fetches data from EventStore,userStore
//CurrentEvent passes props to EventDetail

import React, {Component} from 'react';
import eventStore from '../stores/EventStore';
import userStore from '../stores/UserStore';
import EventDetail from '../components/EventDetail';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Header from '../components/Header';
import {fetchEvents, checkIfVotingOver, fetchCurrentEvent, checkEventOver, setEventsFromLocal} from '../actions/EventActions';

class CurrentEvent extends Component {
  constructor(props){
    super(props)
    this.state= {
      event: eventStore.getCurrentEvent(),
      user: userStore.getUser(),
      message: ''
    }
    this.updateCurrentEvent = this.updateCurrentEvent.bind(this)
    this.updateUser = this.updateUser.bind(this)
      fetchCurrentEvent()
      setEventsFromLocal()
  }

  componentWillMount(){
    userStore.on('change', this.updateUser)
    eventStore.on('change', this.updateCurrentEvent)
  }

  componentWillUnmount(){
    userStore.removeListener('change', this.updateUser)
    eventStore.removeListener('change', this.updateCurrentEvent)
  }

  updateUser(){
    this.setState({
      user: userStore.getUser()
    })
  }

  updateCurrentEvent(){
    this.setState({
      event: eventStore.getCurrentEvent()
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
