import React, {Component} from 'react';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import Reminder from '../components/Reminder';
import Header from '../components/Header';
import {Redirect} from 'react-router-dom';
import Calendar from '../components/Calendar'

class Home extends Component {
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
