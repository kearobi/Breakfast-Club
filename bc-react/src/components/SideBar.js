import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import userStore from '../stores/UserStore'
import {logout} from '../actions/UserActions';

class SideBar extends Component {
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
      <div className='sidebar'>
        {/* sidebar is a flex item of the parent */}
        <div className='nested'>
        {/* nesting is the nested flex box */}
          {this.state.user.email === "breakfastclub.sd@gmail.com" &&
            <Link to="/admin" className="item wobble"> <img src='../Images/admin.png' alt='admin'/>
              <div className='admin'>admin</div>
            </Link>
            }
          {this.state.user.email !== "breakfastclub.sd@gmail.com" &&
            <Link to="/profile" className="item wobble"> <img src='../Images/user.png' alt='profile'/>
              <div className='caption'>profile</div>
            </Link>}
          <Link to="/home" className="item wobble">
            <img src='../Images/calendar.png' alt='calendar'/>
            <div className='caption'>calendar</div>
          </Link>
          <Link to="/places" className="item wobble"><img src='../Images/places.png' alt='places'/>
            <div className='caption'>places</div>
          </Link>
          <Link to="/photos" className="item wobble"><img src='../Images/camera.png' alt='photos'/>
            <div className='caption'>photos</div>
          </Link>
          <div className="item wobble"
          onClick={this.handleLogOut}
          ><img src='../Images/logout-img.png' alt='log out'/>
            <div className='caption'>log out</div>
          </div>
          </div>
      </div>
    );
  }
}

export default SideBar
