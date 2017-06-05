import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Img from 'react-image'


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
        <span class="border">
          <span class="border-bottom">
            <h2>Breakfast Club</h2>
          </span>
        </span>
      </div>





    );
  }
}


export default Header
