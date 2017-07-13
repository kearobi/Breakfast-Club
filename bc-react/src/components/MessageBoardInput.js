import React, { Component } from 'react';
import messageStoreInput from '../stores/MessageStoreInput';
import messageStoreDetail from '../stores/MessageStoreDetail';
import userStore from '../stores/UserStore';
import Moment from 'react-moment'
import {updateMessageInput, submitMessageInput} from '../actions/MessageActions'
import MessageBoardDetail from './MessageBoardDetail'
import Input from './Input'

class MessageBoardInput extends Component {
  constructor(props){
    super(props)
    this.state={
      messageInput: messageStoreInput.getFields(),
      errors: {}
    }
    this.updateMessageInput = this.updateMessageInput.bind(this)
  }

  componentWillMount(){
    messageStoreInput.on('change', this.updateMessageInput);
  }

  componentWillUnmount(){
    messageStoreInput.removeListener('change', this.updateMessageInput);
  }

  updateMessageInput(){
    this.setState({
      messageInput: messageStoreInput.getFields(),
      errors: messageStoreInput.getErrors()
    })
  }

  handleChange(e){
    let target = e.target
    updateMessageInput(target.name, target.value)
  }

  handleSubmit(e){
    e.preventDefault();
    submitMessageInput()
  }

  render() {
      return (
      <div className='message-board'>
        <div className='message-box'>
          <MessageBoardDetail />
        </div>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <Input className='submit-field'
                size='28'
                type='text'
                placeholder='type a message'
                name='content'
                autoComplete='off'
                value={this.state.messageInput.content}
                onChange={this.handleChange.bind(this)}
                >
              </Input>
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

export default MessageBoardInput
