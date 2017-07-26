import React, { Component } from 'react';
import messageStore from '../stores/MessageStore';
import userStore from '../stores/UserStore';
import {addMessage} from '../actions/MessageActions';
import {fetchMessages} from '../actions/MessageActions';
import Moment from 'react-moment'
import {helpers} from '../helpers/moment.js'

class MessageBoard extends Component {
  constructor(props){
    super(props)
    this.state={
      messages: [],
      currentMessage: ''
    }
    fetchMessages()
    this.onUpdate = this.updateMessages.bind(this)
  }

  componentWillMount(){
    messageStore.on('messages fetched', this.onUpdate);
    messageStore.on('message added', this.onUpdate);
  }

  componentWillUnmount(){
    messageStore.removeListener('messages fetched', this.onUpdate);
    messageStore.removeListener('message added', this.onUpdate);
  }

  updateMessages(){
    this.setState({
      messages: messageStore.getMessages()
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
    if(this.state.currentMessage != ''){
    addMessage({
      content: this.state.currentMessage,
      author: `${userStore.getUser().firstName} ${userStore.getUser().lastName.slice(0, 1)}.`
    });
    }
    this.setState({
      currentMessage: ''
    })
  }

  render() {
    let mapped = this.state.messages.map(function(message, i){
      let timeStamp = (message.createdAt)
      return (
        <div className='individual-message' key={i}>
          <div className='sender'>{message.author}</div>
          <div className='time-stamp'>
            <Moment fromNow>
              {helpers.syncToServerTime(timeStamp)}
            </Moment>
          </div>
          <div className='message-content'>{message.content}</div>
        </div>
      )
    })

    return (
      <div className='message-board'>
        <div className='message-box'>
          {mapped.reverse()}
        </div>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <input className='submit-field'
                size='20'
                type='text'
                placeholder='type a message'
                name='message'
                autoComplete='off'
                value={this.state.currentMessage}
                onChange={this.handleChange.bind(this)}>
              </input>
            </div>
            <div>
              <input className='submit-chat-button'
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
