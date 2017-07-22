import React, { Component } from 'react';
import {registerVote} from '../actions/EventActions';

class VoteButton extends Component {
  handleClick(){
    registerVote(this.props.user, this.props.event, this.props.choice)
  }

  render() {
    return (
      <div id="vote-button" onClick={this.handleClick.bind(this)}> {this.props.choice}</div>
    );
  }
}

export default VoteButton;
