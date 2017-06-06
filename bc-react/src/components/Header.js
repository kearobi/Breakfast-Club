import React, { Component } from 'react';
import SideBar from './SideBar'
import Img from 'react-image'


class Header extends Component {
  render() {

    return (
      <div className="Header">
        <div className="Header-header">
        <SideBar />
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
