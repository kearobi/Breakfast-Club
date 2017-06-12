import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import MessageBoard from '../components/MessageBoard';
import userStore from '../stores/UserStore';
import SideBar from '../components/SideBar';
import {fetchMessages} from '../actions';
import {checkLoginRedir} from '../actions'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import placeStore from '../stores/PlaceStore'


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Home extends Component {
  constructor(props){
  super(props)
  this.state = {
    user: userStore.getUser(),
    }
    fetchMessages();
    // fetchEvents();
  }

  componentWillMount(){
    userStore.on('logged-in',this.handleLogin.bind(this))
    checkLoginRedir(this.props)
  }

  handleLogin(){
  this.setState({
    user: userStore.getUser()
  })
}


  // componentWillUpdate(){
  //   checkLoginRedir(this.props)
  // }

  events(){
    return [
      {
      'title': 'B-Fast',
      'start': new Date(2017,5, 16, 8,0,0),
      'end': new Date(2017,5, 16, 9,0,0)
      }
    ]
  }
//{userStore.getUser.firstName()}
  render(){
    return (
      <div id="home-body">
      <SideBar />
        <div className="home-page">

          <h1>Welcome, {userStore.getUser().firstName}</h1>

          <div className="container container-home">

          <div className="row">
            <div className="calendar-div col-xs-8">
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
