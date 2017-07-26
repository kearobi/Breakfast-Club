import React, { Component } from 'react';
import {rsvp} from '../actions/EventActions';

class RSVPButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: this.props.user
    }
  }

  handleClick(e){
    if(e.target.value === "true" && this.state.user.rsvp){
      console.log('already rsvpd yes')
    }else if(e.target.value === "false" && !this.state.user.rsvp){
      console.log('already rsvpd no')
    }else{
    let target = e.target
    let user = this.state.user
    user[target.name] = JSON.parse(target.value)
    this.setState({
      user: user
    })
    rsvp(this.state.user, this.props.event)
  }
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
      <div className='rsvp-button'>
        <form className = {yes}>
          <button className={yes} type="button" name="rsvp" value={true} onClick={this.handleClick.bind(this)}>Yes </button>
          <button className={no} type="button" name="rsvp" value={false} onClick={this.handleClick.bind(this)}>No </button>
        </form>
      </div>
    );
  }
}

export default RSVPButton;
