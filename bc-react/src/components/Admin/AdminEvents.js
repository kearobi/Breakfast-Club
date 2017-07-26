//AdminEvents gets props from AdminPage and passes props to AdminTable, SearchBar, AdminModal

import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import SearchBar from './AdminSearchBar';
import AdminModal from './AdminModal';
import AdminTable from './AdminTable';
import Calendar from '../Calendar'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class AdminEvents extends Component {
  constructor(props){
    super(props)
    this.state = {events: [],
                  className: "closeModal"}
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
              speaker: "",
              place_1_id: null,
              place_2_id: 1,
              winner: 1
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
          <Calendar event={this.props.event}/>
      </div>
      );
    }
  }
export default AdminEvents;
