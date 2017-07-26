//AdminEvents gets props from AdminPage and passes props to AdminTable, SearchBar, AdminModal

import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {fetchEvents} from '../../actions/EventActions'
import eventStore from '../../stores/EventStore'
import SearchBar from './AdminSearchBar';
import AdminModal from './AdminModal';
import AdminTable from './AdminTable';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import PastEvent from '../../routes/PastEvent';
import Modal from 'react-modal';


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

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
    width             : '300px',
    height            : '500px'
  }
};

class AdminEvents extends Component {
  constructor(props){
    super(props)
    this.state = {events: [],
                  className: "closeModal",
                  selectedEventId: null,
                  modal: false}
    this.updateEvents = this.updateEvents.bind(this)
    this.openCalModal = this.openCalModal.bind(this)
    this.closeCalModal = this.closeCalModal.bind(this)
      fetchEvents();
    }

    componentWillMount(){
      eventStore.on('change', this.updateEvents)
    }

    componentWillUnmount(){
      eventStore.removeListener('change', this.updateEvents)
    }

  updateEvents(){
    let bevents = eventStore.getAllEvents()
    console.log('all events: ', bevents)
    let newEvents = bevents.map(function(bevent){
      let start = moment(bevent.date).toDate()
      let end = moment(bevent.date).add(1, 'hours').toDate()
      //where is place coming from?
      let placeName = bevent.place.name
      console.log('bevent', bevent)
      let id = bevent.id
      return {
        'title': placeName,
        'start': start,
        'end': end,
        'id': id,
      }
    })
    this.setState({
      events: newEvents
    })
  }

  openCalModal(event, e){
    this.setState({
      selectedEventId: event.id,
      modal: true
    })
  }

  closeCalModal(){
    this.setState({
      selectedEventId: null,
      modal: false
    })
  }

  openModal(){
    this.setState({className: "openModal"})}

  closeModal(){
    this.setState({className: "closeModal"})}

  closeModalOnSubmit(modal){
    this.setState(modal)}

  checkCalendar(){
    if(this.state.events.length > 0){
      return(
      <BigCalendar
        events={this.state.events}
        onSelectEvent={this.openCalModal}
      />
    )
  }else{
    return(<div>Loading...</div>)
    }
  }

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
            <span id='x' onClick={this.closeCalModal.bind(this)}>&times;</span>
              <AdminModal eventForm={true} startingState={this.eventParams()}  closeModal={this.closeModalOnSubmit.bind(this)}/>
          </div>
          <div className='polaroid'>
            {(this.state.selectedEventId && this.state.selectedEventId === this.props.event.event.id) &&
              <Redirect to='/current-event'/>
            }
            {(this.state.selectedEventId && this.state.selectedEventId !== this.props.event.event.id) &&
            <Modal
              isOpen={this.state.modal}
              onRequestClose={this.closeCalModal}
              style={customStyle}
              contentLabel="Modal"
            >
            <PastEvent eventId={this.state.selectedEventId}/>
          </Modal>
            }
            {/* <img className='frame' src='../Images/polaroid.png' /> */}
          </div>
        <div className="calendar-div admin-calendar">
        {this.checkCalendar()}
      </div>
    </div>
      );
    }
  }
export default AdminEvents;
