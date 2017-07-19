import React, { Component } from 'react';
import {editUser} from '../actions/UserActions';
import {rsvp} from '../actions/EventActions';

class RSVPButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: this.props.user,
      event: this.props.event
    }
  }

  handleClick(e){
    let target = e.target
    let user = this.state.user
    let event = this.state.event
    user[target.name] = JSON.parse(target.value)
    this.setState({
      user: user
    })
    // editUser(user)
    rsvp(user, event)
  }

  render() {
    let yes
    let no
    if(this.state.user.rsvp){
      yes='rsvp yes'
      no='rsvp no'
    } else{
      no='rsvp yes'
      yes='rsvp no'
    }

    return (
      <form className = {yes}>
        <button className={yes} type="button" name="rsvp" value={true} onClick={this.handleClick.bind(this)}>Yes </button>
        <button className={no} type="button" name="rsvp" value={false} onClick={this.handleClick.bind(this)}>No </button>
      </form>
    );
  }
}

export default RSVPButton;
