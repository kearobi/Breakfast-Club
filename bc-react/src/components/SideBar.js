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
      </div>
    );
  }
}

export default SideBar
