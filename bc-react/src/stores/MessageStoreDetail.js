import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class MessageStoreDetail extends EventEmitter{
  constructor(){
    super()
    this.fields = {}
  }

  // getLastFiveMessages(){
  //   let messageArray = [];
  //   if (this.fields.length > 10){
  //     for (var i = this.fields.length - 1; i > this.fields.length - 16; i--){
  //       messageArray.push(this.fields[i]);
  //     }
  //     return messageArray.reverse();
  //   } else {
  //     return this.fields.reverse();
  //   }
  // }

  getFields(){
    return this.fields
  }

  updateMessageDetail(attributes){
    this.fields = attributes
    this.emit('change')
  }

  handleActions(action){
    switch(action.type){
      //this is really creating a message
      case("UPDATE_MESSAGE_DETAIL"):{
        this.updateMessageDetail(action.attributes)
        break
      }
      default:{}
    }
  }
}
const messageStoreDetail = new MessageStoreDetail();
dispatcher.register(messageStoreDetail.handleActions.bind(messageStoreDetail));
window.messageStoreDetail = messageStoreDetail;
export default messageStoreDetail;
