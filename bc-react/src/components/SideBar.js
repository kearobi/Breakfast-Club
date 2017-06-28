import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React, { Component } from 'react';

class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      isClosed: false
      // true will make it collapse into a hamburger icon
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
        <nav className="navbar navbar-fixed-top" id="sidebar-wrapper" role="navigation">
          <ul className="nav sidebar-nav">
              <a className="side-bar-text-top" href="/home">Home</a>
            <div className="side-bar-image-div">
              <li>
                <a href="#" className="login"> <img className='wobble side-bar-image profile top-image' src='../Images/user (1).png'/></a>
              </li>
              <p className="image-text-1">Profile</p>
            </div>
            <div className="side-bar-image-div">
              <li>
                <a href="/places"><img className="wobble side-bar-image" src='../Images/calendar (2).png'/></a>
              </li>
              <p className="image-text-2">Places</p>
            </div>
            <div className="side-bar-image-div">
              <li>
                <a href="#"><img className="wobble side-bar-image" src='../Images/logout.png'/></a>
              </li>
              <p className="image-text-3">Log Out</p>
            </div>
            <div className="side-bar-bottom">
                <a className="side-bar-text-bottom" href="#">Team</a>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideBar
