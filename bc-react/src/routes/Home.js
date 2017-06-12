import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import MessageBoard from '../components/MessageBoard';
import userStore from '../stores/UserStore';
import SideBar from '../components/SideBar';
import Reminder from '../components/Reminder';
import {fetchMessages} from '../actions';
import {checkLoginRedir} from '../actions'
import BigCalendar from 'react-big-calendar';
import {fetchCurrentEvent} from '../actions'
import moment from 'moment';
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Home extends Component {
  constructor(props){
  super(props)
  this.state = {
    user: userStore.getUser(),
    }
  }

  componentWillMount(){
    userStore.on('logged-in',this.handleLogin.bind(this))
    userStore.on('logged-out', this.handleLogOut.bind(this))
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
    return [
      {
      'title': 'Long Event',
      'start': new Date(2015, 3, 7),
      'end': new Date(2015, 3, 10)
      }
    ]
  }
//{userStore.getUser.firstName()}
  render(){
    return (
      <div>
      <SideBar />
      <div className="home-page">
        <div className="container">

          <div className="row">
            <div className="col-xs-3"></div>

            <div className="col-xs-6">
              <h1>Welcome, {userStore.getUser().firstName}</h1>
              <Reminder />
              <Link to='current-event'>Current Event</Link>
            </div>
            <div className="col-xs-3"></div>
          </div>

          <hr className="hr-home"></hr>

          <div className="row">
            <div className="col-xs-1"></div>

            <div className="calendar-div col-xs-7">
              <BigCalendar
                events={this.events()}
              />
            </div>
            <div className="col-xs-4">
              <MessageBoard />
            </div>
          </div>
        </div>
      </div>
      </div>
      );
  }
}

export default Home;
