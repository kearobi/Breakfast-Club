import React, { Component } from 'react';
import SideBar from './SideBar'
import Img from 'react-image'
import '../style/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Img from 'react-image'


class Header extends Component {
  render() {

    return (
      <div className="Header">
        <div className="Header-header">
        <SideBar />
        </div>
        <span className="border">
          <span className="border-bottom">
            <h2>Breakfast Club</h2>
          </span>
        </span>
      </div>





    );
  }
}


export default Header
