import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React, { Component } from 'react';

class SideBar extends Component {
  constructor(props){
    super(props)
    }

  render() {
    return (
      <div className='sidebar'>
            <table>
              <tbody>
              <tr>
                <td>
                  <a href="/profile"> <img className='wobble side-bar-image profile top-image' src='../Images/user (1).png'/></a>
                  <p className="image-text-1">Profile</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/home"><img className="wobble side-bar-image" src='../Images/calendar (2).png'/></a>
                  <p className="image-text-2">Home</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#"><img className="wobble side-bar-image" src='../Images/dish-fork-and-knife.png'/></a>
                  <p className="image-text-3">restaurants</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#"><img className="wobble side-bar-image" src='../Images/logout.png'/></a>
                  <p className="image-text-3">Log Out</p>
                </td>
              </tr>
              </tbody>
            </table>
          {/* <ul className="nav sidebar-nav">
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
          </ul> */}
      </div>
    );
  }
}

export default SideBar
