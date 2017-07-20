import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Reminder from '../components/Reminder';
import {fetchEvents, checkIfVotingOver, fetchCurrentEvent, checkEventOver, setEventsFromLocal} from '../actions/EventActions';
import BigCalendar from 'react-big-calendar';
import userStore from '../stores/UserStore';
import eventStore from '../stores/EventStore';
import moment from 'moment';
import Header from '../components/Header';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: []
    }
    this.updateEvents = this.updateEvents.bind(this)
      // fetchCurrentEvent()
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
    let newEvents = bevents.map(function(bevent){
      let start = moment(bevent.date).toDate()
      let end = moment(bevent.date).add(1, 'hours').toDate()
      let placeName = bevent.place.name
      return {
        'title': placeName,
        'start': start,
        'end': end
      }
    })
    this.setState({
      events: newEvents
    })
  }

  checkCalendar(){
    if(this.state.events.length > 0){
      return(
      <BigCalendar
        events={this.state.events}
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
          <div className="calendar-div">{this.checkCalendar()}</div>
        {/* <iframe src="https://giphy.com/embed/3oaPtHC37Vx0Q" frameBorder="0" allowFullScreen></iframe> */}
      </div>
      </div>
      <img className='fruit-border' src='../Images/fruit-border.jpg' alt='fruit'></img>
    </div>
    );
  }
}

export default Home;
