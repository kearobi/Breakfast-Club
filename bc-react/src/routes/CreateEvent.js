import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {createEvent} from '../actions';
import {fetchEvent} from '../actions';
import eventStore from '../stores/EventStore';

class CreateEvent extends Component {
  constructor(props){
    super(props)
    this.state= {
      id: "to",
      event: {
        id: ''
      }
    }
  }

  componentWillMount(){
    eventStore.on('event fetched', this.eventFound.bind(this));
  }

  eventFound(){
    this.setState({
      event: eventStore.getCurrentEvent()
    })
  }

  handleChange(e){
    this.setState({
      id: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    fetchEvent(this.state)
  }

  render(){
    return (
        <div>
          <form className='form' onSubmit={this.handleSubmit.bind(this)}>
            <div className='formGroup'>
              <input
                type='number'
                name='id'
                value={this.state.id}
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
          <p>Fetched Bevent</p>
          <p>{this.state.event.id}</p>
        </div>
      );
    }
  }
export default CreateEvent;
