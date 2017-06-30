import React, { Component } from 'react';

class SideBar extends Component {

  render() {
    return (
      <div className='sidebar'>
            <table>
              <tbody>
              <tr>
                <td>
                  <a href="/profile2"> <img className='wobble' src='../Images/user.png' alt='profile'/></a>
                  <p className="caption">profile</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/home"><img className="wobble" src='../Images/calendar.png' alt='calendar'/></a>
                  <p className="caption">calendar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/places"><img className="wobble" src='../Images/places.png' alt='restaurants'/></a>
                  <p className="caption">restaurants</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/photos"><img className="wobble" src='../Images/camera.png' alt='photos'/></a>
                  <p className="caption">photos</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/"><img className="wobble" src='../Images/logout.png' alt='log out'/></a>
                  <p className="caption">log out</p>
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
