import React, { Component } from 'react';
import messageStore from '../stores/MessageStore2';
import userStore from '../stores/UserStore';
import Moment from 'react-moment'
import Input from '../components/Input'
import {updateMessages, submitMessage} from '../actions/MessageActions'

class MessageBoard2 extends Component {
  constructor(props){
    super(props)
    this.state={
      messages: messageStore.getFields(),
      errors: {}
    }
    this.updateMessages = this.updateMessages.bind(this)
  }

  componentWillMount(){
    messageStore.on('change', this.updateMessages);
  }

  componentWillUnmount(){
    messageStore.removeListener('change', this.updateMessages);
  }

  updateMessages(){
    this.setState({
      messages: messageStore.getFields(),
      errors: messageStore.getErrors()
    })
  }

  handleChange(e){
    let target = e.target
    updateMessages(target.name, target.value)
  }

  handleSubmit(e){
    e.preventDefault();
    submitMessage()
  }

  isValid(){
    return Object.keys(this.state.errors).length === 0
  }

  render() {
    // let mapped = this.state.messages.map(function(message, i){
    //   let timeStamp = (message.createdAt)
      return (
        <div className='individual-message'
          // key={i}
          >
          {/* <div className='sender'>{message.author}</div> */}
          {/* <div className='time-stamp'><Moment fromNow>{timeStamp}</Moment></div> */}
          {/* <div className='message-content'>{message.content}</div> */}
          <div className='message-content'>{this.state.messages.message}</div>
        </div>
    //   )
    // }
  )

    return (
      <div className='message-board'>
        <div className='message-box'>
          {/* // {mapped.reverse()} */}
        </div>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <input className='submit-field'
                // size='28'
                placeholder='type a message'
                name='message'
                // autoComplete='off'
                value={this.state.messages.message}
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

export default MessageBoard2
