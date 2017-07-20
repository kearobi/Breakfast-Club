import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class EventStore extends EventEmitter{
  constructor(){
    super();
    this.testEvent = {};
    this.events = [];
    this.currentEvent = {};
    this.event = {}
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

  getEvent(){
    return this.event
  }

  updateEvent(attributes){
    this.event = attributes
    this.emit('change')
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
      case("VOTES-COUNTED"):{
        this.currentEvent = action.data;
        this.emit('votes counted');
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
      case("EVENT-CREATED"):{
        this.currentEvent = action.data;
        this.emit('new event created');
        // this.emit('current event fetched');
        break;
      }
      case("RACHEL-UPDATE-EVENT"):{
        this.updateEvent(action.event)
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
