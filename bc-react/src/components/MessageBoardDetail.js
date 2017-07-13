import React, { Component } from 'react';
import messageStoreInput from '../stores/MessageStoreInput';
import messageStoreDetail from '../stores/MessageStoreDetail';
import Moment from 'react-moment'
import Input from '../components/Input'
import {updateMessageInput, submitMessageInput} from '../actions/MessageActions'

class MessageBoardDetail extends Component {
  constructor(props){
    super(props)
    //the initial state is set to the message store
    this.state={
      message: messageStoreDetail.getFields(),
    }
    this.updateMessageDetail = this.updateMessageDetail.bind(this)
  }

//listening for changes to the message store
  componentWillMount(){
    messageStoreDetail.on('change', this.updateMessageDetail);
  }

  componentWillUnmount(){
    messageStoreDetail.removeListener('change', this.updateMessageDetail);
  }

//Matt says this is us "registering" with the store, so that any time there's a change in the store, our state is updated
  updateMessageDetail(){
    this.setState({
      message: messageStoreDetail.getFields()
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
