import React, { Component } from 'react';
import messageStoreInput from '../stores/MessageStoreInput';
import messageStoreDetail from '../stores/MessageStoreDetail';
import userStore from '../stores/UserStore';
import Moment from 'react-moment'
import Input from '../components/Input'
import {updateMessageInput, submitMessage} from '../actions/MessageActions'

class MessageBoardDetail extends Component {
  constructor(props){
    super(props)
    this.state={
      message: messageStoreDetail.getFields(),
    }
    this.updateMessageDetail = this.updateMessageDetail.bind(this)
  }

  componentWillMount(){
    messageStoreDetail.on('change', this.updateMessageDetail);
  }

  componentWillUnmount(){
    messageStoreDetail.removeListener('change', this.updateMessageDetail);
  }

  updateMessageDetail(){
    this.setState({
      message: messageStoreDetail.getFields(),
    })
  }

  render() {
      return (
          <div className='content'>
            {this.state.message.content}
          </div>
    );
  }
}

export default MessageBoardDetail
