import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class MessagesStore extends EventEmitter{
  constructor(){
    super()
    this.fields = {}
  }

  getFields(){
    return this.fields
  }

  updateMessages(attributes){
    this.fields = attributes
    this.emit('change')
  }

  // fetchMessages(attributes){
  //   this.fields = attributes
  //   this.emit('change')
  // }

  handleActions(action){
    switch(action.type){
      //this is really creating a message
      case("UPDATE_MESSAGES"):{
        this.updateMessages(action.attributes)
        break
      }
      // case("FETCH_MESSAGES"):{
      //   this.fetchMessages(action.attributes)
      //   break
      // }
      default:{}
    }
  }
}
const messagesStore = new MessagesStore();
dispatcher.register(messagesStore.handleActions.bind(messagesStore));
window.messagesStore = messagesStore;
export default messagesStore;
