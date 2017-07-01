import React, { Component } from 'react';

class SideBar extends Component {

  render() {
    return (
      <div className='sidebar'>
        <div>
          <a href="/profile2"> <img className='wobble box1' src='../Images/user.png' alt='profile'/></a>
          <div className="caption">profile</div>
        </div>
        <div>
          <a href="/home"><img className="wobble box2" src='../Images/calendar.png' alt='calendar'/></a>
          <div className="caption">calendar</div>
        </div>
        <div>
          <a href="/places"><img className="wobble box3" src='../Images/places.png' alt='restaurants'/></a>
          <div className="caption">places</div>
        </div>
        <div>
          <a href="/photos"><img className="wobble box4" src='../Images/camera.png' alt='photos'/></a>
          <div className="caption">photos</div>
        </div>
        <div>
          <a href="/"><img className="wobble box5" src='../Images/logout.png' alt='log out'/></a>
          <div className="caption">log out</div>
        </div>
      </div>
    );
  }
}

export default SideBar
