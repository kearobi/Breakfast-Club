import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class MessageStore2 extends EventEmitter{
  constructor(){
    super();
    this.fields = {
      message: '',
      author: '',
      content: ''
    }
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

  updateMessages(attributes){
    this.fields = attributes
    this.emit('change')
  }

  handleActions(action){
    switch(action.type){
      case("ADD-MESSAGE"):{
        this.updateMessages(action.attributes)
        break
      }
      default:{}
    }
  }
}
const messageStore = new MessageStore2();
dispatcher.register(messageStore.handleActions.bind(messageStore));
window.messageStore = messageStore;
export default messageStore;
