import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class GuestStore extends EventEmitter{
  constructor(){
    super();
    this.guestlists = [{}]
    this.newGuestlist= {}
  }

  getGuestlists(){
    return this.guestlists;
  }

  updateGuestlists(attributes){
    this.guestlists = attributes
  }

  handleActions(action){
    switch(action.type){
      case("GET-GUESTLISTS"):{
        this.getGuestlists()
        break
      }
      // case("ADD-GUESTLIST"):{
      //   this.newMessage = action.message;
      //   this.messages.push(action.message)
      //   this.emit('message added')
      //   break
      // }
      case("UPDATE_GUESTLISTS"):{
        this.updateGuestlists(action.attributes)
        break
      }
      case("VOTE-REGISTERED"):{
        this.updateGuestlists(action.attributes)
        break
      }
      default:{}
    }
  }
}
const guestStore = new GuestStore();
dispatcher.register(guestStore.handleActions.bind(guestStore));
window.guestStore = guestStore;
export default guestStore;
