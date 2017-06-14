import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MessageBoard from '../components/MessageBoard';
import SideBar from '../components/SideBar';
import Reminder from '../components/Reminder';
import {fetchMessages, fetchEvents, checkIfVotingOver, fetchCurrentEvent, checkEventOver} from '../actions';
import {checkLoginRedir} from '../actions'
import BigCalendar from 'react-big-calendar';
import userStore from '../stores/UserStore';
import eventStore from '../stores/EventStore';
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
      event: eventStore.getCurrentEvent(),
      events: []
    }
    fetchCurrentEvent();
    fetchMessages();
    fetchEvents();
    this.onlogin = this.handleLogin.bind(this)
    this.onlogout = this.handleLogOut.bind(this)
    this.oncurrent = this.updateCurrentEvent.bind(this)
    this.onevents = this.events.bind(this)
  }

  componentWillMount(){
    userStore.on('logged-in', this.onlogin)
    userStore.on('logged-out', this.onlogout)
    eventStore.on('current event fetched', this.oncurrent)
    eventStore.on('event created',this.oncurrent)
    eventStore.on('events fetched', this.onevents)
    checkLoginRedir(this.props)
  }

  componentWillUnmount(){
    userStore.removeListener('logged-in', this.onlogin)
    userStore.removeListener('logged-out', this.onlogout)
    eventStore.removeListener('current event fetched', this.oncurrent)
    eventStore.removeListener('event created',this.oncurrent)
    eventStore.removeListener('events fetched', this.onevents)
  }

 //  componentWillUpdate(){
 //   checkLoginRedir(this.props)
 // }

  handleLogin(){
    this.setState({
      user: userStore.getUser(),
    })
  }

  handleLogOut(){
    this.setState({
      user: userStore.getUser() // TODO wha?
    })
  }

  updateCurrentEvent(){
    checkIfVotingOver(eventStore.getCurrentEvent())
    checkEventOver(eventStore.getCurrentEvent())
    this.setState({
      event: eventStore.getCurrentEvent()
    })
  }

  events(){
    let bevents = eventStore.getAllEvents()
    let newEvents = bevents.map(function(bevent){
      let start = moment(bevent.date).toDate()
      let end = moment(bevent.date).add(1, 'hours').toDate()
      return {
        'title': 'TODO Place names?',
        'start': start,
        'end': end
      }
    })
    this.setState({
      events: newEvents
    })
  }

  checkCalendar(){
    if(this.state.events.length > 0){
      return(
      <BigCalendar
        events={this.state.events}
      />
    )
  }else{
    return(<div>Loading...</div>)
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
                {this.checkCalendar()}
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
