import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {fetchCurrentEvent} from '../../actions'

//const api
//only the most parent component should be responsible for fetching data

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class AdminEvents extends Component {
  constructor(props){
    super(props)
    this.state = {}
  fetchCurrentEvent()
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

  render(){
    return(
      <div id="admin_container">
        <h3 className='center'>Events</h3>
        <div className="calendar-div admin-calendar">
        <BigCalendar events={this.events()}/>
      </div></div>
      );
    }
  }
export default AdminEvents;
