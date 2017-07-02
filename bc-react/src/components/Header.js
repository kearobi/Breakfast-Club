import React, { Component } from 'react';
import SideBar from './SideBar';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="mini-sidebar">
          <a className="item wobble" href="/profile2"> <img src='../Images/user.png' alt='profile' title='profile'/></a>
          <a className="item wobble" href="/home"><img src='../Images/calendar.png' alt='calendar' title='calendar'/></a>
          <a className="item wobble" href="/places"><img src='../Images/places.png' alt='places' title='places'/></a>
          <a className="item wobble" href="/photos"><img src='../Images/camera.png' alt='photos' title='photos'/></a>
          <a className="item wobble" href="/"><img src='../Images/logout.png' alt='log out' title='log out'/></a>
        </div>
        <div className="header">Breakfast Club</div>
      </div>
    );
  }
}

export default Header
