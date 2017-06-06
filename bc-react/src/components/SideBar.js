import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React, { Component } from 'react';
import Img from 'react-image'

class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isClosed: true
    }
  }
//set staet for sidebar

handleBurgerClick(e){
  if(this.state.isClosed){
    this.setState({
      isClosed: false
    })
  } else {
    this.setState({
      isClosed: true
    })
  }
}
//if isClosed(false) on click will open if in original state isClosed(true)

triggerClass(){
  if(this.state.isClosed){
    return "hamburger is-closed"
  } else {
    return "hamburger is-open"
  }
}
//if isclosed(true) css style "hamburger is-closed" will be used and if isClosed(false) css style "hamburger is-opened".

overlayStyle() {
  if(this.state.isClosed) {
    return {display: 'none'}
  } else {
    return {display: 'block'}
  }
}
//if isclosed(true) css style display will be set to "none" if isClosed(false) css style will display "block".

wrapperClass(){
  if(this.state.isClosed){
    return ""
  } else {
    return "toggled"
  }
}
//if isclosed(true) css style will be set to default isClosed ("") if isClosed(false) css style will be set to taggled ("toggled").

  render() {

    return (
      <div id="wrapper" className={this.wrapperClass()}>
        <div className="overlay" style={this.overlayStyle()}></div>
        <nav className="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
          <ul className="nav sidebar-nav">
            <li className="sidebar-brand">
              <a href="#">
                 Menu
              </a>
            </li>
            <li>
              <a href="#" className="login"> <img className='profile' src='../Images/user (1).png'/></a>
            </li>
            <li>
              <a href="#"><img src='../Images/calendar (2).png'/></a>
            </li>
            <li>
              <a href="#"><img src='../Images/logOut.png'/></a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div id="page-content-wrapper">
          <button type="button" className={this.triggerClass()} data-toggle="offcanvas" onClick={this.handleBurgerClick.bind(this)}>
            <span className="hamb-top"></span>
            <span className="hamb-middle"></span>
            <span className="hamb-bottom"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default SideBar
