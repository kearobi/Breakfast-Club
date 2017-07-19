import React, { Component } from 'react';
import {editUser} from '../actions/UserActions';

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
    user[target.name] = JSON.parse(target.value)
    this.setState({
      user: user
    })
    editUser(user)
  }

  render() {
    return (
      <form className='flex-item'>
        <input type="radio" name="rsvp" value={true} onClick={this.handleClick.bind(this)} /> Yes
        <input type="radio" name="rsvp" value={false} onClick={this.handleClick.bind(this)} /> No
      </form>
    );
  }
}

export default RSVPButton;
