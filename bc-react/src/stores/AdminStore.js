import {EventEmitter} from 'events'
import dispatcher from '../Dispatcher'

class AdminStore extends EventEmitter{
  constructor(){
    super()
      this.users = []
      this.places = []
      this.events = []
  }

  adminGetUsers(){return this.users}
  adminGetPlaces(){return this.places}
  adminGetEvents(){return this.events}

  adminUpdateUsers(attributes){
    this.users = attributes
    this.emit('change')}
  adminUpdatePlaces(attributes){
    this.places = attributes
    this.emit('change')}
  adminUpdateEvents(attributes){
    this.events = attributes
    this.emit('change')}

  //we'll handle the delete here because this is where the users are setState

//we want it to be TRUE if the user.id is NOT the attributes.id. We're saying, once we've deleted the user from the db, to get it out of the store, we'll get all the ones that AREN'T this one
  adminAddUser(attributes){
    return (this.users)
    this.emit('change')}
  adminAddPlace(attributes){
    return (this.places)
    this.emit('change')}
  adminAddEvent(attributes){
    return (this.events)
    this.emit('change')}

  adminDeleteUser(id){
    this.users = this.users.filter((user) => {
      return (user.id !== id)})
    //emit says hey everybody that's listening, i did a thing! now we have to listen for the emit in the table full of users
    this.emit('change')}
  adminDeletePlace(id){
    this.places = this.places.filter((place) => {
      return (place.id !== place)})
    this.emit('change')}
  adminDeleteEvent(id){
    this.events = this.events.filter((event) => {
      return (event.id !== event)})
    this.emit('change')}

  // adminEditUser(id){
  //   this.users = this.users.filter((user) => {
  //     return (this.users)
  //     })
  //     //emit says hey everybody that's listening, i did a thing! now we have to listen for the emit in the table full of users
  //     this.emit('change')}

  handleActions(action){
    switch(action.type){
      case("ADMIN_UPDATE_USERS"):{
        this.adminUpdateUsers(action.users)
        break
      }
      case("ADMIN_UPDATE_PLACES"):{
        this.adminUpdatePlaces(action.places)
        break
      }
      case("ADMIN_UPDATE_EVENTS"):{
        this.adminUpdatePlaces(action.places)
        break
      }
      //this is linked to DELETE_USER in actions.js
      case("ADMIN_ADD_USER"):{
        this.adminAddUser(action.user)
        break
      }
      case("ADMIN_ADD_EVENT"):{
        this.adminAddEvent(action.event)
        break
      }
      case("ADMIN_ADD_PLACE"):{
        this.adminAddPlace(action.place)
        break
      }
      case("ADMIN_DELETE_USER"):{
        this.adminDeleteUser(action.id)
        break
      }
      case("ADMIN_DELETE_EVENT"):{
        this.adminDeleteEvent(action.id)
        break
      }
      case("ADMIN_DELETE_PLACE"):{
        this.adminDeletePlace(action.id)
        break
      }
      default:{}
    }
  }
}

const astore = new AdminStore()
dispatcher.register(astore.handleActions.bind(astore))
window.astore = astore
export default astore
