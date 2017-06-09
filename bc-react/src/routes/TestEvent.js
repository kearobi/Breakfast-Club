import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchEvent} from '../actions';
import eventStore from '../stores/EventStore';

class TestEvent extends Component {
  constructor(props){
    super(props)
    this.state= {
      formId: '',
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
      formId: e.target.value
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
                value={this.state.formId}
                onChange={this.handleChange.bind(this)}>
              </input>
            </div>
            <div className='formGroup'>
              <input
                type='submit'
                value='Submit'>
              </input>
            </div>
          </form>
          <p>Fetched Bevent</p>
          <p>{this.state.event.id}</p>
        </div>
      );
    }
  }
export default TestEvent;
