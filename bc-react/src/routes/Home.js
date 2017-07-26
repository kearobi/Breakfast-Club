import React, {Component} from 'react';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Reminder from '../components/Reminder';
import {fetchEvents, fetchCurrentEvent} from '../actions/EventActions';
import BigCalendar from 'react-big-calendar';
import eventStore from '../stores/EventStore';
import moment from 'moment';
import Header from '../components/Header';
import {Redirect} from 'react-router-dom';
import PastEvent from './PastEvent';
import Modal from 'react-modal';
import Calendar from '../components/Calendar'
//
// BigCalendar.setLocalizer(
//   BigCalendar.momentLocalizer(moment)
// );
//
// const customStyle = {
//   overlay : {
//     position          : 'fixed',
//     top               : 0,
//     left              : 0,
//     right             : 0,
//     bottom            : 0,
//     backgroundColor   : 'rgba(255, 255, 255, 0.5)',
//     zIndex            : 5
//   },
//   content : {
//     top               : '50%',
//     left              : '50%',
//     right             : 'auto',
//     bottom            : 'auto',
//     marginRight       : '-50%',
//     transform         : 'translate(-50%, -50%)',
//     width             : '310px',
//     height            : '475px'
//   }
// };

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      // events: [],
    }
    // this.updateEvents = this.updateEvents.bind(this)
      fetchCurrentEvent()
      // fetchEvents();
  }
  //
  // componentWillMount(){
  //   eventStore.on('change', this.updateEvents)
  // }
  //
  // componentWillUnmount(){
  //   eventStore.removeListener('change', this.updateEvents)
  // }
  //


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
            <Calendar event={this.props.event} />
        </div>
        </div>
        <img className='fruit-border' src='../Images/fruit-border.jpg' alt='fruit'></img>
      </div>
    );
  }
}

export default Home;
