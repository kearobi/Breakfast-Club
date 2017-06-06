import {EventEmitter} from 'events';
import Dispatcher from '../Dispatcher';

class MessageStore extends EventEmitter{
  constructor(){
    super();
    this.messages = [{}]
    this.newMessage= {}
  }

  getLastFiveMessages(){
    var messageArray = [];
    if (this.messages.length > 5){
      for (var i = this.messages.length - 1; i > this.messages.length - 6; i--){
        messageArray.push(this.messages[i]);
      }
      return messageArray.reverse();
    }
    else {
      return this.messages.reverse();
    }

  }

  handleActions(action){
    switch(action.type){
      case("FETCH-MESSAGES"):{
        this.messages = action.messages;
        this.emit('messages fetched')
        break
      }
      case("ADD-MESSAGE"):{
        this.newMessage = action.message;
        this.messages.push(action.message)
        this.emit('message added')
        break
      }
      default:{}
    }
  }
}
const store = new MessageStore();
Dispatcher.register(store.handleActions.bind(store));
window.message_store = store;
export default store;
