//AdminEvents gets props from AdminPage and passes props to AdminTable, SearchBar, AdminModal

import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {fetchCurrentEvent} from '../../actions/EventActions'
import SearchBar from './AdminSearchBar';
import AdminModal from './AdminModal';
import AdminTable from './AdminTable';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class AdminEvents extends Component {
  constructor(props){
    super(props)
    this.state = {events: this.props.events,
                  className: "closeModal"}
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

  openModal(){
    this.setState({className: "openModal"})}

  closeModal(){
    this.setState({className: "closeModal"})}

  closeModalOnSubmit(modal){
    this.setState(modal)}

  eventParams(){
    return(
      { event: {
              date: "",
      }})}

  render(){
    return(
      <div className='admin-page'>
        <p>Events</p>
          <div className="search_bar_wrapper">
            <button className="add_button" type="button"
            onClick={this.openModal.bind(this)}>
            + event </button>
            <SearchBar events={this.props.events} eventSearchBar={true}/>
          </div>
          <br></br><br></br>
          <AdminTable eventList={true} />
          <div className={this.state.className}>
            <span id='x' onClick={this.closeModal.bind(this)}>&times;</span>
              <AdminModal eventForm={true} startingState={this.eventParams()}  closeModal={this.closeModalOnSubmit.bind(this)}/>
          </div>
        <div className="calendar-div admin-calendar">
        <BigCalendar events={this.events()}/>
      </div>
    </div>
      );
    }
  }
export default AdminEvents;
