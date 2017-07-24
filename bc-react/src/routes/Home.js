import React, {Component} from 'react';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Reminder from '../components/Reminder';
import {fetchEvents, fetchCurrentEvent} from '../actions/EventActions';
import BigCalendar from 'react-big-calendar';
import eventStore from '../stores/EventStore';
import moment from 'moment';
import Header from '../components/Header';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import PastEvent from './PastEvent';
import Modal from 'react-modal';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

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

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: [],
      selectedEventId: null,
      modal: false
    }
    this.updateEvents = this.updateEvents.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
      fetchCurrentEvent()
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

  openModal(event, e){
    this.setState({
      selectedEventId: event.id,
      modal: true
    })
  }

  closeModal(){
    this.setState({
      selectedEventId: null,
      modal: false
    })
  }

  checkCalendar(){
    if(this.state.events.length > 0){
      return(
      <BigCalendar
        events={this.state.events}
        onSelectEvent={this.openModal}
      />
    )
  }else{
    return(<div>Loading...</div>)
    }
  }

  render(){
    return (
          <div className="wrapper">{/* //this is the flex container */}
              <SideBar/>{/* //this is a flex item  with a nested flex container */}
            <div className='home-page'>{/* //this is a flex item */}
              <div className='nested'>{/* //this is a nested flex container */}
                <SideBarMini/>
                <Header />
            <div className="welcome-message">
              <div className='reminder'><Reminder user={this.props.user} event={this.props.event}/></div>
            </div>
            <div className='polaroid'>
              {(this.state.selectedEventId && this.state.selectedEventId === this.props.event.event.id) &&
                <Redirect to='/current-event'/>
              }
              {(this.state.selectedEventId && this.state.selectedEventId !== this.props.event.event.id) &&
              <Modal
                isOpen={this.state.modal}
                onRequestClose={this.closeModal}
                style={customStyle}
                contentLabel="Modal"
              >
              <PastEvent eventId={this.state.selectedEventId}/>
            </Modal>
              }
              {/* <img className='frame' src='../Images/polaroid.png' /> */}
            </div>
            <div className="calendar-div">{this.checkCalendar()}</div>
        </div>
        </div>
        <img className='fruit-border' src='../Images/fruit-border.jpg' alt='fruit'></img>
      </div>
    );
  }
}

export default Home;
