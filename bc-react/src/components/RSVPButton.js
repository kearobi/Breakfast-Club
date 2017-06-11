import React, { Component } from 'react';
import {rsvp} from '../actions';
import {fetchEvent} from '../actions';

class RSVPButton extends Component {
  handleClick(){
    document.getElementById("rsvp-button").onclick = '#';
    rsvp();
  }

  render() {
    return (
      <button id="rsvp-button" onClick={this.handleClick.bind(this)}>RSVP</button>
    );
  }
}

export default RSVPButton;
