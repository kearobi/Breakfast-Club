import React, { Component } from 'react';
import MessageStore from '../stores/MessageStore';
import UserStore from '../stores/UserStore';
import {addMessage} from '../actions';

class MessageBoard extends Component {
  constructor(props){
    super(props)
    this.state={
      messages: [],
      currentMessage: ''
    }
  }

  componentWillMount(){
    MessageStore.on('messages fetched', this.updateMessages.bind(this));
    MessageStore.on('message added', this.updateMessages.bind(this));
  }

  updateMessages(){
    console.log("updateMessages called")
    this.setState({
      messages: MessageStore.getLastFiveMessages()
    })
  }

  handleChange(e){
    let currentMessage = e.target.value
    this.setState({
      currentMessage: currentMessage
    })
  }

  handleSubmit(e){
    e.preventDefault();
    addMessage({
      content: this.state.currentMessage,
      author: UserStore.getUser().email
    });
  }

  render() {
    var mapped = this.state.messages.map(function(message, i){
      return (
        <div key={i}>
          <p>{message.content}</p>
          <p>{message.author}</p>
        </div>
      )
    })

    return (
      <div id="messageBoard">
        <h1>Message Board</h1>
        <div>
          {mapped}
        </div>
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='formGroup'>
            <input
              type='text'
              name='message'
              value={this.state.currentMessage}
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
