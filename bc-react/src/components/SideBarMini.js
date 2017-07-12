import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBarMini extends Component {
  render() {
    return (
      <div className="mini-sidebar">
        {this.props.isAdmin &&
          <Link to="/admin" className="item wobble">
            <img src='../Images/user.png' alt='admin' title='admin'/>
          </Link>
        }
        {!this.props.isAdmin &&
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
          <div className="item wobble" onClick={this.props.handleLogOut}>
            <img src='../Images/logout.png' alt='log out' title='log out'/>
          </div>
      </div>
    );
  }
}

export default SideBarMini
