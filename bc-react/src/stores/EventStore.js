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
    let stringify = JSON.stringify(this.currentEvent)
    console.log('current event', this.currentEvent)
    console.log('stringify', stringify)
    localStorage.setItem('currentEvent', stringify)
  }

  setCurrentEventFromLocal(){
    let parsed = JSON.parse( localStorage.getItem('currentEvent'))
    console.log('parsed', parsed)
    this.currentEvent = parsed
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
        // this.currentEvent = action.data;
        this.updateCurrentEvent(action.data)
        this.emit('vote registered');
        break;
      }
      case("VOTES-COUNTED"):{
        // this.currentEvent = action.data;
        this.updateCurrentEvent(action.data)
        this.emit('votes counted');
        break;
      }
      // case("EVENT-TEST"):{
      //   this.testEvent = action.data;
      //   this.emit('event fetched');
      //   break;
      // }
      case("LOCAL_EVENT_STORAGE"):{
        this.setCurrentEventFromLocal()
        this.emit('change')
        break
      }
      case("CURRENT-EVENT"):{
        // this.currentEvent = action.data;
        this.updateCurrentEvent(action.data)
        this.emit('current event fetched');
        break;
      }
      case("EVENT-CREATED"):{
        // this.currentEvent = action.data;
        this.updateCurrentEvent(action.data)
        this.emit('new event created');
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
