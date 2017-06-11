import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MessageBoard from '../components/MessageBoard';
import userStore from '../stores/UserStore';
import SideBar from '../components/SideBar';
import {fetchMessages} from '../actions';
import {checkLoginRedir} from '../actions'
import BigCalendar from 'react-big-calendar';
import {fetchCurrentEvent} from '../actions'
import moment from 'moment';
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Home extends Component {
  constructor(props){
  super(props)
  this.state = {
    user: userStore.getUser(),
    }
    fetchMessages();
    fetchCurrentEvent()
  }

  componentWillMount(){
    userStore.on('logged-in',this.handleLogin.bind(this))
    userStore.on('logged-out', this.handleLogOut.bind(this))
    checkLoginRedir(this.props)

  }

 //  componentWillUpdate(){
 //   checkLoginRedir(this.props)
 // }

  handleLogin(){
  this.setState({
    user: userStore.getUser()
  })
}

handleLogOut(){
this.setState({
  user: userStore.getUser()
})
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
//{userStore.getUser.firstName()}
  render(){
    return (
      <div>
      <SideBar />
      <div className="home-page">
        <div className="container">
            <div className="row">
              <br></br>  <br></br>  <br></br>
            <div className="welcome-message">
              Welcome, {userStore.getUser().firstName}! This
               <Link to="/current-event" > FRIDAY</Link> - Mission or Broken Yolk? CAST YOUR VOTE!
            </div>
            <div className="calendar-div col-xs-7">
              <BigCalendar
                events={this.events()}
              />
            </div>
            <div className="col-xs-4">
              <MessageBoard />
            </div>
          </div>
        </div>
      </div>
      <iframe src="https://giphy.com/embed/3oaPtHC37Vx0Q" frameBorder="0" allowFullScreen></iframe>

</div>
      );
  }
}

export default Home;
