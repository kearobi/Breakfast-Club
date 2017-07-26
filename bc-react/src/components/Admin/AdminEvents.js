//AdminEvents gets props from AdminPage and passes props to AdminTable, SearchBar, AdminModal

import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import eventStore from '../../stores/EventStore'
import SearchBar from './AdminSearchBar';
import AdminModal from './AdminModal';
import AdminTable from './AdminTable';
import {Redirect} from 'react-router-dom';
import Modal from 'react-modal';
import Calendar from '../Calendar'


const customStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.5)',
    zIndex            : 5
  },
  content : {
    top               : '50%',
    left              : '50%',
    right             : 'auto',
    bottom            : 'auto',
    marginRight       : '-50%',
    transform         : 'translate(-50%, -50%)',
    width             : '170px',
    height            : '120px',
    fontFamily        : 'Abel',
    display           : 'flex',
    flexDirection     : 'column',
    alignSelf         : 'center',
    justifyContent    : 'center'
  }
};

class AdminEvents extends Component {
  constructor(props){
    super(props)
    this.state = {events: [],
                  modal: false}

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.closeModalOnSubmit = this.closeModalOnSubmit.bind(this)
  }

openModal(){
  this.setState({modal: true})
}

closeModal(){
  this.setState({modal: false})
}

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
            onClick={this.openModal}>
            + event </button>
            <SearchBar events={this.props.events} eventSearchBar={true}/>
          </div>
          <br></br><br></br>
          <AdminTable eventList={true} />
          <div className='admin-modal'>
            <Modal
              isOpen={this.state.modal}
              onRequestClose={this.closeModal}
              style={customStyle}
              contentLabel="Modal"
            >
              <AdminModal
                eventForm={true}
                startingState={this.eventParams()}
                closeModal={this.closeModalOnSubmit}
              />
          </Modal>
          </div>
          <Calendar event={this.props.event}/>
      </div>
      );
    }
  }
export default AdminEvents;
