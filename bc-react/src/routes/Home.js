import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import MessageBoard from '../components/MessageBoard';
import userStore from '../stores/UserStore';
import SideBar from '../components/SideBar';
import {fetchMessages} from '../actions';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Home extends Component {
  constructor(props){
    super(props);
    fetchMessages();
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

            <div className="col-xs-12">
              <h1>Welcome, </h1>
            </div>

            <hr></hr>

            <div className="calendar-div col-xs-12">
              <BigCalendar
                events={this.events()}
              />
            </div>
            <div className="col-xs-12">
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
