import {EventEmitter} from 'events';
import Dispatcher from '../Dispatcher';

class EventStore extends EventEmitter{
  constructor(){
    super();
    this.events = [];
    this.currentEvent = {};
  }

  getCurrentEvent(){
    return this.currentEvent;
  }

  getAllEvents(){
    return this.events;
  }

  handleActions(action){
    switch(action.type){
      case("FETCH-EVENTS"):{
        this.events = action.events;
        this.emit('events fetched');
        break;
      }
      case("GOT-EVENT"):{
        console.log("action.event", action.event)
        this.currentEvent = action.event;
        this.emit('event fetched');

        break;
      }
      default:{}
    }
  }
}
const store = new EventStore();
Dispatcher.register(store.handleActions.bind(store));
window.event_store = store;
export default store;
