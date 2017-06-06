import React, { Component } from 'react';
import '../style/app.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-header">
          <img src='../Images/man-user.png' />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <img src='../Images/calendar.png' />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <img src='../Images/logOut2.png' />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img src='../Images/profile.png' />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <img src='../Images/calendar2.png' />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <img src='../Images/logOut.png' />
        </div>

            <h2>Breakfast Club</h2>
      </div>
    );
  }
}

export default Header;
