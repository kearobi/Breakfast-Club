import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MessageBoard from '../components/MessageBoard';
import userStore from '../stores/UserStore';
import eventStore from '../stores/EventStore';
import SideBar from '../components/SideBar';
import Reminder from '../components/Reminder';
import {fetchMessages, fetchEvents} from '../actions';
import {checkLoginRedir} from '../actions'
import BigCalendar from 'react-big-calendar';
import {fetchCurrentEvent} from '../actions'
import moment from 'moment';
import placeStore from '../stores/PlaceStore'
import ('../style/Home.css');

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: userStore.getUser(),
      events: []
    }
    fetchCurrentEvent();
    fetchMessages();
    fetchEvents();
  }

  componentWillMount(){
    userStore.on('logged-in',this.handleLogin.bind(this))
    userStore.on('logged-out', this.handleLogOut.bind(this))
    eventStore.on('events fetched', this.events.bind(this))
    checkLoginRedir(this.props)
  }

 //  componentWillUpdate(){
 //   checkLoginRedir(this.props)
 // }

  handleLogin(){
    this.setState({
      user: userStore.getUser()
    })
  }

  handleLogOut(){
    this.setState({
      user: userStore.getUser()
    })
  }

  events(){
    debugger
    let bevents = eventStore.getAllEvents()
    let events = bevents.map(function(bevent){
      let start = bevent.date
      let end = bevent.date
      debugger
      return {
        title: 'TODO Place names?',
        start: start,
        end: end
      }
    })
    this.setState = {
      events: events
    }
  }

//{userStore.getUser.firstName()}
  render(){
    return (
      <div id="home-body">
        <SideBar />
        <div className="home-page">
          <div className="col-xs-6 welcome-message">
            <h1>Welcome, {userStore.getUser().firstName}</h1>
            <Reminder />
            <Link to='/current-event'>Current Event</Link>
          </div>
          <div className="container container-home">

            <div className="row">
              <div className="calendar-div col-xs-8">
                <BigCalendar
                  events={this.state.events}
                  />
              </div>
              <div className="col-xs-4">
                <MessageBoard />
              </div>
            </div>
          </div>
        </div>
        <iframe src="https://giphy.com/embed/3oaPtHC37Vx0Q" frameBorder="0" allowFullScreen></iframe>
      </div>
      );
  }
}

export default Home;
