import React, { Component } from 'react';
import messageStore from '../stores/MessageStore';
import userStore from '../stores/UserStore';
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
    messageStore.on('messages fetched', this.updateMessages.bind(this));
    messageStore.on('message added', this.updateMessages.bind(this));
  }

  updateMessages(){
    console.log("updateMessages called")
    this.setState({
      messages: messageStore.getLastFiveMessages()
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
      author: userStore.getUser().email
    });
  }

  render() {
    var mapped = this.state.messages.map(function(message, i){
      var a = (message.createdAt)
        let b = a.split("T")
        let date = b[0]
          let c = b[1].split(".")
          let time = c[0]
      return (
        <div key={i}>
          <p className='sender'>{message.author}</p>
          <p className='time-stamp'>{date + " " + time}</p>
          <p className='message-sent'>{message.content}</p>
          <hr></hr>
        </div>
      )
    })


    return (
      <div id="messageBoard">
        <h1 className='title'>Message Board</h1>
          <hr></hr>
        <div>
          <div className='message-box'>
            {mapped}
          </div>
        </div>
        <div>
          <form className='form' onSubmit={this.handleSubmit.bind(this)}>
            <div className='formGroup'>
              <input className='formGroup submit-field'
                type='text'
                name='message'
                value={this.state.currentMessage}
                onChange={this.handleChange.bind(this)}>
              </input>
            </div>
            <div className='formGroup'>
              <input className="btn btn-primary submit-field-button"
                type='submit'
                value='Send'>
              </input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MessageBoard
