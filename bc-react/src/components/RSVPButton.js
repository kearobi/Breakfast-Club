import React, { Component } from 'react';
import {userRSVP} from '../actions/UserActions';
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
    if(e.target.value === "true" && this.state.user.rsvp){
      console.log('already rsvpd yes')
    }else{
    let target = e.target
    let user = this.state.user
    let event = this.state.event
    user[target.name] = JSON.parse(target.value)
    this.setState({
      user: user
    })
    // userRSVP(user)
    rsvp(user, event)
  }
}
  render() {
    let yes
    let no
    let image;
    if(this.state.user.rsvp){
      yes='rsvp yes'
      no='rsvp no'
      image= './Images/rsvp-yes.png'
    } else{
      no='rsvp yes'
      yes='rsvp no'
      image= './Images/rsvp-no.png'
    }

    return (
      <div className='rsvp-button'>
        <form className = {yes}>
          <button className={yes} type="button" name="rsvp" value={true} onClick={this.handleClick.bind(this)}>Yes </button>
          <button className={no} type="button" name="rsvp" value={false} onClick={this.handleClick.bind(this)}>No </button>
        </form>
        {/* <img src={image} alt='breakfast' /> */}
      </div>
    );
  }
}

export default RSVPButton;
