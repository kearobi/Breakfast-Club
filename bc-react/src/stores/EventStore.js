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

  getPastEvent(){
    return this.pastEvent;
  }

  updateCurrentEvent(attributes){
    this.currentEvent = attributes
    localStorage.setItem('currentEvent', JSON.stringify(this.currentEvent))
    this.emit('change')
  }

  updatePastEvent(attributes){
    this.pastEvent = attributes
    localStorage.setItem('pastEvent', JSON.stringify(this.pastEvent))
    this.emit('change')
  }

  updateEvents(attributes){
    this.events = attributes
    localStorage.setItem('events', JSON.stringify(this.events))
    this.emit('change')
  }

  setEventFromLocal(){
    this.currentEvent = JSON.parse( localStorage.getItem('currentEvent'))
    console.log('get local current event', this.currentEvent)
    this.events = JSON.parse( localStorage.getItem('events'))
    this.emit('change')
  }

  getAllEvents(){
    return this.events;
  }

  handleActions(action){
    switch(action.type){
      case("FETCH-EVENTS"):{
        this.updateEvents(action.events);
        break;
      }
      case("VOTE-REGISTERED"):{
        this.updateCurrentEvent(action.data)
        break;
      }
      case("VOTES-COUNTED"):{
        this.updateCurrentEvent(action.data)
        break;
      }
      // case("EVENT-TEST"):{
      //   this.testEvent = action.data;
      //   this.emit('event fetched');
      //   break;
      // }
      case("LOCAL_EVENT_STORAGE"):{
        this.setEventFromLocal()
        break
      }
      case("CURRENT-EVENT"):{
        this.updateCurrentEvent(action.data)
        break;
      }
      case("PAST-EVENT"):{
        this.updatePastEvent(action.data)
        break;
      }
      case("EVENT-CREATED"):{
        this.updateCurrentEvent(action.data)
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
