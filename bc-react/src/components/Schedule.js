import React, { Component } from 'react';
import EventStore from '../stores/EventStore';
import {addEvent} from '../actions';

class Schedule extends Component {
  constructor(props){
    super(props)
    this.state= {
      events: [],
      currentEvent: {}
    }
  }

  handleChange(e){
    let currentEvent = e.target.value
    this.setState({
      currentEvent: currentEvent
    })
  }

  handleSubmit(e){
    e.preventDefault();
    addEvent({
      date: this.state.currentEvent.date,
      placeId: this.state.currentEvent.placeId,
    });
  }

  render() {
    var mapped = this.state.events.map(function(event, i){
      return (
        <div key={i}>
          <p>{event.date}</p>
          <p>{event.placeId}</p>
        </div>
      )
    })

    return (
      <div>
        <h1>Schedule</h1>
        <div>
          {mapped}
        </div>
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='formGroup'>
            <input
              type='datetime'
              name='event'
              value={this.state.currentEvent.date}
              onChange={this.handleChange.bind(this)}>
            </input>
          </div>
          <div className='formGroup'>
            <input
              type='number'
              name='placeId'
              value={this.state.currentEvent.placeId}
              onChange={this.handleChange.bind(this)}>
            </input>
          </div>
          <div className='formGroup'>
            <input
              type='submit'
              value='Send'>
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageBoard
