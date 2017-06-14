import {EventEmitter} from 'events'
import dispatcher from '../Dispatcher'

//add messages, see CatStore for reference

class AdminStore extends EventEmitter{
  constructor(){
    super()
      this.users = []
      this.places = []
      this.events = []
      this.message = ""
      this.newUser = {}
      this.newPlace = {}
      this.newEvent = {}
  }

  adminReturnUsers(){return (this.users)}
  adminReturnPlaces(){return (this.places)}
  adminReturnEvents(){return (this.events)}
  adminReturnMessage(){return (this.message)}

  adminReturnNewUser(){return (this.newUser)}
  adminReturnNewPlace(){return (this.newPlace)}
  adminReturnNewEvent(){return (this.newEvent)}
  adminReturnNewMessage(){return (this.newMessage)}

  adminLoadUsers(attributes){
    this.users = attributes
    this.emit('change')}
  adminLoadPlaces(attributes){
    this.places = attributes
    this.emit('change')}
  adminLoadEvents(attributes){
    this.events = attributes
    this.emit('change')}

  adminPushNewUser(attributes){
    this.newUser = attributes
    this.users.push(attributes)
    this.emit('change')}
  adminPushNewPlace(attributes){
    this.newPlace = attributes
    this.places.push(attributes)
    this.emit('change')}
  adminPushNewEvent(attributes){
    this.newEvent = attributes
    this.events.push(attributes)
    this.emit('change')}

  adminEditUser(attributes){
    this.users = this.users.filter((user) => {
      return (user.id)})
    this.emit('change')}
  adminEditPlace(attributes){
    this.places = this.places.filter((place) => {
      return (place.id)})
    this.emit('change')}
  adminEditEvent(attributes){
    this.events = this.events.filter((event) => {
      return (event.id)})
    this.emit('change')}

  updateMessage(newMessage){
    this.message = newMessage
    this.emit('message')}
  //we'll handle the delete here because this is where the users are setState

//we want it to be TRUE if the user.id is NOT the attributes.id. We're saying, once we've deleted the user from the db, to get it out of the store, we'll get all the ones that AREN'T this one

  adminDestroyUser(id){
    this.users = this.users.filter((user) => {
      return (user.id !== id)})
    //emit says hey everybody that's listening, i did a thing! now we have to listen for the emit in the table full of users
    this.emit('change')}
  adminDestroyPlace(id){
    this.places = this.places.filter((place) => {
      return (place.id !== place)})
    this.emit('change')}
  adminDestroyEvent(id){
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
      case("ADMIN_LOAD_USERS"):{
        this.adminLoadUsers(action.users)
        break
      }
      case("ADMIN_LOAD_PLACES"):{
        this.adminLoadPlaces(action.places)
        break
      }
      case("ADMIN_LOAD_EVENTS"):{
        // debugger
        //right after this spot, the error occurs
        this.adminLoadEvents(action.events)
        break
      }
      case("ADMIN_CREATE_USER"):{
        this.adminPushNewUser(action.user)
        break
      }
      case("ADMIN_CREATE_PLACE"):{
        this.adminPushNewPlace(action.place)
        break
      }
      case("ADMIN_CREATE_EVENT"):{
        this.adminPushNewEvent(action.event)
        break
      }
      //this is linked to DESTROY_USER in actions.js
      case("ADMIN_DESTROY_USER"):{
        this.adminDestroyUser(action.id)
        break
      }
      case("ADMIN_DESTROY_PLACE"):{
        this.adminDestroyPlace(action.id)
        break
      }
      case("ADMIN_DESTROY_EVENT"):{
        this.adminDestroyEvent(action.id)
        break
      }
      case("ADMIN_UPDATE_USER"):{
        this.admiEditUser(action.user)
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
