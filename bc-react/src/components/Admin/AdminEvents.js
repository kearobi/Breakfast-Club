import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {fetchCurrentEvent} from '../../actions'
import AdminList from './AdminList';
import SearchBar from './AdminSearchBar';
import AdminModal from './AdminModal';
import adminStore from '../../stores/AdminStore';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class AdminEvents extends Component {
  constructor(props){
    super(props)
    this.state = {events: adminStore.adminGetEvents(),
                  displayModal: false}

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

  adminUpdateEvents(){
    this.setState({events: adminStore.adminGetEvents})}

  componentWillMount(){
    adminStore.on('change', this.adminUpdateEvents.bind(this))}

  showEventList(){value: this.state.value}

  displayModal(){
    this.setState({displayModal: true})}

  eventParams(){
    return(
      { event: {
              date: "",
              place: "",
              neighborhood: "",
              guestSpeaker: "",
              rsvp: ""
      }})
    }

  eventListParams(){
    return({events: adminStore.adminGetEvents()})}

  modalAdmin(){
    if(this.state.displayModal){
    return (<AdminModal eventForm={true} startingState={this.eventParams()} />)
    } else { return ("") }}

  render(){
    return(
      <div id="admin_container">
        <h3 className='center'>Events</h3>
          <div id="search_bar_wrapper">
            <button className="add_button" type="button"
            onClick={this.displayModal.bind(this)}>
            + event </button>
            <SearchBar events={this.state.events} eventSearchBar={true}/>
          </div>
          <br></br><br></br>
          <AdminList eventList={true} startingState={this.eventListParams()}/>
          {this.modalAdmin()}
        <div className="calendar-div admin-calendar">
        <BigCalendar events={this.events()}/>
      </div>
    </div>
      );
    }
  }
export default AdminEvents;
