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

  updateCurrentEvent(attributes){
    this.currentEvent = attributes
    localStorage.setItem('currentEvent', JSON.stringify(this.currentEvent))
  }

  updateEvents(attributes){
    this.events = attributes
    localStorage.setItem('events', JSON.stringify(this.events))
  }

  setEventFromLocal(){
    this.currentEvent = JSON.parse( localStorage.getItem('currentEvent'))
    console.log('get local current event', this.currentEvent)
    this.events = JSON.parse( localStorage.getItem('events'))
  }

  getAllEvents(){
    return this.events;
  }

  handleActions(action){
    switch(action.type){
      case("FETCH-EVENTS"):{
        this.updateEvents(action.events);
        this.emit('change');
        break;
      }
      case("VOTE-REGISTERED"):{
        // this.currentEvent = action.data;
        this.updateCurrentEvent(action.data)
        this.emit('change');
        break;
      }
      case("VOTES-COUNTED"):{
        // this.currentEvent = action.data;
        this.updateCurrentEvent(action.data)
        this.emit('change');
        break;
      }
      // case("EVENT-TEST"):{
      //   this.testEvent = action.data;
      //   this.emit('event fetched');
      //   break;
      // }
      case("LOCAL_EVENT_STORAGE"):{
        this.setEventFromLocal()
        this.emit('change')
        break
      }
      case("CURRENT-EVENT"):{
        // this.currentEvent = action.data;
        this.updateCurrentEvent(action.data)
        this.emit('change');
        break;
      }
      case("EVENT-CREATED"):{
        // this.currentEvent = action.data;
        this.updateCurrentEvent(action.data)
        this.emit('change');
        // this.emit('current event fetched');
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
