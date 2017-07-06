import React, { Component } from 'react';

class SideBarMini extends Component {
  render() {
    return (
      <div className="mini-sidebar">
        <a className="item wobble" href="/profile"> <img src='../Images/user.png' alt='profile' title='profile'/></a>
        <a className="item wobble" href="/home"><img src='../Images/calendar.png' alt='calendar' title='calendar'/></a>
        <a className="item wobble" href="/places"><img src='../Images/places.png' alt='places' title='places'/></a>
        <a className="item wobble" href="/photos"><img src='../Images/camera.png' alt='photos' title='photos'/></a>
        <a className="item wobble" href="/"><img src='../Images/logout.png' alt='log out' title='log out'/></a>
      </div>
    );
  }
}

export default SideBarMini
