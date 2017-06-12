import React, { Component } from 'react';
import Img from 'react-image'
import '../style/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Img from 'react-image'


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-header">
        </div>
        <span className="border">
          <span className="border-bottom">
            <h2><img className="cupcake" src="../Images/coffee.png"/>Breakfast Club<img className="cupcake" src="../Images/cupcake.png"/></h2>
          </span>
          <hr className="header-line"></hr>
        </span>
      </div>
    );
  }
}


export default Header
