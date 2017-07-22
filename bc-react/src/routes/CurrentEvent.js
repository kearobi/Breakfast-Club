//CurrentEvent fetches data from EventStore,userStore
//CurrentEvent passes props to EventDetail

import React, {Component} from 'react';
import EventDetail from '../components/EventDetail';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Header from '../components/Header';
import Moment from 'react-moment';
import 'moment-timezone';

class CurrentEvent extends Component {
  constructor(props){
    super(props)
    this.state= {
      event: this.props.event,
      user: this.props.user,
      guestlist: this.props.guestlist
    }
  }

  render(){
      return (
        <div className="wrapper">{/* //this is the flex container */}
            <SideBar />{/* //this is a flex item  with a nested flex container */}
          <div className='event-page'>{/* //this is a flex item */}
            <div className='nested'>{/* //this is a nested flex container */}
            <Header />
            <SideBarMini />
            <div className='event-date'>
              {/* this is the formatted date of the event */}
              <Moment format='dddd, MMMM DD @ h:mm A'>
                {this.props.event.event.date}
              </Moment>
            </div>
          <EventDetail event={this.props.event} user={this.props.user} guestlist={this.props.guestlist}/>
            </div>
          </div>
        </div>
        );
      }
  }
export default CurrentEvent;
