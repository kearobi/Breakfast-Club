import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class MessageStore extends EventEmitter{
  constructor(){
    super();
    this.messages = [{}]
    this.newMessage= {}
  }

  getMessages(){
      return this.messages;
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
dispatcher.register(store.handleActions.bind(store));
window.message_store = store;
export default store;
