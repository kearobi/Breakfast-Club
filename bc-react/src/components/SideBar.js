import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <div className='sidebar'>
        {/* sidebar is a flex item of the parent */}
        <div className='nested'>
        {/* nesting is the nested flex box */}
          {this.props.isAdmin &&
            <Link to="/admin" className="item wobble"> <img src='../Images/user.png' alt='admin'/>
              <div className='admin'>admin</div>
            </Link>
            }
          {!this.props.isAdmin &&
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
          onClick={this.props.handleLogOut}
          ><img src='../Images/logout.png' alt='log out'/>
            <div className='caption'>log out</div>
          </div>
          </div>
      </div>
    );
  }
}

export default SideBar
