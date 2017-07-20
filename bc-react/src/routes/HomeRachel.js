import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import ReminderRachel from '../components/ReminderRachel';
import {fetchRachel, rachelVote} from '../actions/UserActions';
import {fetchEvents, checkIfVotingOver, fetchCurrentEvent, checkEventOver, fetchEvent} from '../actions/EventActions';
import BigCalendar from 'react-big-calendar';
import userStore from '../stores/UserStore';
import eventStore from '../stores/EventStore';
import moment from 'moment';
import Header from '../components/Header';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class HomeRachel extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: userStore.getUser(),
      event: eventStore.getCurrentEvent(),
    }
    this.updateUser = this.updateUser.bind(this)
    this.updateEvent = this.updateEvent.bind(this)
      fetchEvent()
  }

  componentWillMount(){
    userStore.on('change', this.updateUser)
    eventStore.on('change', this.updateEvent)
  }

  componentWillUnmount(){
    userStore.removeListener('change', this.updateUser)
    eventStore.removeListener('change', this.updateEvent)
  }

  updateEvent(){
    this.setState({
      event: eventStore.getEvent()
    })
  }
  updateUser(){
    this.setState({
      user: userStore.getUser()
    })
  }

  render(){
    return (
        <div className="wrapper">{/* //this is the flex container */}
            <SideBar/>{/* //this is a flex item  with a nested flex container */}
          <div className='home-page'>{/* //this is a flex item */}
            <div className='nested'>{/* //this is a nested flex container */}
              <SideBarMini/>
              <Header />
          <div className="welcome-message">
            <div className='reminder'><ReminderRachel
             user={this.state.user} event={this.state.event}/></div>
          </div>
        {/* <iframe src="https://giphy.com/embed/3oaPtHC37Vx0Q" frameBorder="0" allowFullScreen></iframe> */}
      </div>
      </div>
    </div>
    );
  }
}

export default HomeRachel;
