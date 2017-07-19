import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import userStore from '../stores/UserStore'
import {logout} from '../actions/UserActions';

class SideBarMini extends Component {
  constructor(props){
    super(props)
    this.state={
      user: userStore.getUser()
    }
    this.updateUser = this.updateUser.bind(this)
  }

  componentWillMount(){
    userStore.on('change', this.updateUser)
  }

  componentWillUnmount(){
    userStore.removeListener('change', this.updateUser)
  }

  updateUser(){
    this.setState({
      user: userStore.getUser()
    })
  }

  handleLogOut(){
    logout()
  }

  render() {
    return (
      <div className="mini-sidebar">
        {this.state.user.email === "breakfastclub.sd@gmail.com" &&
          <Link to="/admin" className="item wobble">
            <img src='../Images/admin.png' alt='admin' title='admin'/>
          </Link>
        }
        {this.state.user.email !== "breakfastclub.sd@gmail.com" &&
          <Link to="/profile" className="item wobble">
            <img src='../Images/user.png' alt='profile' title='profile'/>
          </Link>
        }
          <Link to="/home" className="item wobble">
            <img src='../Images/calendar.png' alt='calendar' title='calendar'/>
          </Link>
          <Link to="/places" className="item wobble">
            <img src='../Images/places.png' alt='places' title='places'/>
          </Link>
          <Link  to="/photos" className="item wobble">
            <img src='../Images/camera.png' alt='photos' title='photos'/>
          </Link>
          <div className="item wobble" onClick={this.handleLogOut}>
            <img src='../Images/logout.png' alt='log out' title='log out'/>
          </div>
      </div>
    );
  }
}

export default SideBarMini
