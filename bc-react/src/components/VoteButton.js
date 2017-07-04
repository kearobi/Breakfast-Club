import React, { Component } from 'react';
import {registerVote} from '../actions';

class VoteButton extends Component {
  handleClick(){
    document.getElementById("vote-button").onclick = '#';
    registerVote(this.props.user, this.props.event, this.props.choice)
  }

  render() {
    return (
      <button id="vote-button" onClick={this.handleClick.bind(this)}>Vote Place {this.props.choice}</button>
    );
  }
}

export default VoteButton;
