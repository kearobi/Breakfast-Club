import React, { Component } from 'react';
import messageStoreInput from '../stores/MessageStoreInput';
import messagesStore from '../stores/MessagesStore';
import Moment from 'react-moment'
import Input from '../components/Input'
import {updateMessageInput, submitMessageInput, fetchMessages} from '../actions/MessageActions'

class Messages extends Component {
  constructor(props){
    super(props)
    //the initial state is set to the message store
    this.state = {
      messages: []
    }
    this.updateMessages = this.updateMessages.bind(this)
  }

//listening for changes to the message store
  componentWillMount(){
    messagesStore.on('change', this.updateMessages);
  }

  componentWillUnmount(){
    messagesStore.removeListener('change', this.updateMessages);
  }

//Matt says this is us "registering" with the store, so that any time there's a change in the store, our state is updated
  updateMessages(){
    this.setState({
      messages: messagesStore.getFields()
    })
  }

  render() {
    let mapped = this.state.messages.map(function(message, i){
      let timeStamp = (message.createdAt)
      return (
        <div className='individual-message' key={i}>
          <div className='sender'>{message.author}</div>
          <div className='time-stamp'><Moment fromNow>{timeStamp}</Moment></div>
          <div className='message-content'>{message.content}</div>
        </div>
      )
    })

      return (
          <div>{mapped}</div>
    );
  }
}

export default Messages
