import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

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
      case("VOTE-REGISTERED"):{
        this.currentEvent = action.data;
        this.emit('vote registered');
        break;
      }
      case("RSVP"):{
        this.currentEvent = action.data;
        console.log("event from handleAction: ", this.currentEvent)
        this.emit('rsvp');
        break;
      }
      case("EVENT-TEST"):{
        this.testEvent = action.data;
        this.emit('event fetched');
        break;
      }
      case("CURRENT-EVENT"):{
        this.currentEvent = action.data;
        this.emit('current event fetched');
        break;
      }
      default:{}
    }
  }
}
const store = new EventStore();
dispatcher.register(store.handleActions.bind(store));
window.event_store = store;
export default store;
