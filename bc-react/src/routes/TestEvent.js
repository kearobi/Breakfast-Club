import React, {Component} from 'react';
import {fetchEvent} from '../actions/EventActions';
import eventStore from '../stores/EventStore';
import EventDetail from '../components/EventDetail';

class TestEvent extends Component {
  constructor(props){
    super(props)
    this.state= {
      formId: '',
      event: null
    }
  }

  componentWillMount(){
    eventStore.on('event fetched', this.displayEvent.bind(this));
  }

  displayEvent(){
    this.setState({
      event: eventStore.getTestEvent()
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
    if (this.state.event){
      return (
        <EventDetail data={this.state.event} />
      )
    }
    else {
      return (
          <div>
            <form className='form' onSubmit={this.handleSubmit.bind(this)}>
              <div className='formGroup'>
                <p>Search by event id number</p>
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
          </div>
        );
      }
    }

  }
export default TestEvent;
