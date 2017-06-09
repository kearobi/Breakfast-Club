import {EventEmitter} from 'events';
import Dispatcher from '../Dispatcher';

class EventStore extends EventEmitter{
  constructor(){
    super();
    this.testEvent = {};
    this.events = [];
    this.currentEvent = {};
  }

  getTestEvent(){
    return this.testEvent;
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
      case("EVENT-TEST"):{
        this.testEvent = action.data;
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
