import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {createEvent} from '../actions';

class CreateEvent extends Component {
  constructor(props){
    super(props)
    this.state={
      event: {
        place_id: "",
        date: ""
      }
    }
  }

  handleChange(e){
    let target = e.target
    let event = this.state.event
    event[target.name] = target.value
    this.setState({
      event: event
    })
  }

  handleSubmit(e){
    e.preventDefault();
    createEvent(this.state.user)

  }

  render(){
    return (
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='formGroup'>
            <input
              type='text'
              name='place_id'
              value={this.state.event.place_id}
              onChange={this.handleChange.bind(this)}>
            </input>
          </div>
          <div className='formGroup'>
            <input
              type='datetime'
              name='date'
              value={this.state.event.datetime}
              onChange={this.handleChange.bind(this)}>
            </input>
          </div>
          <div className='formGroup'>
            <input
              type='submit'
              value='Create Event'>
            </input>
          </div>
        </form>
      );
    }
  }
export default CreateEvent;
