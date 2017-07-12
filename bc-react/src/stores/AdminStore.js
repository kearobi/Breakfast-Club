import {EventEmitter} from 'events'
import dispatcher from '../Dispatcher'

class AdminStore extends EventEmitter{
  constructor(){
    super()
    this.users = []
    this.places = []
    this.events = []
    this.userFields = {
      firstName: '',
      lastName: '',
      email: '',
      neighborhood: '',
      password: '',
      verifyPassword: ''
    }
    this.placeFields = {
      name: '',
      yelp_rating: '',
      categories: '',
      price: '',
      address_street: '',
      phone: ''
    }
    this.eventFields = {
      date: '',
      guestSpeaker: '',
      place: ''
    }
    this.errors = {}
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

  adminAddUser(attributes){
    this.users.push(attributes)
    this.emit('change')}
  adminAddPlace(attributes){
    this.places.push(attributes)
    this.emit('change')}
  adminAddEvent(attributes){
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

//we want it to be TRUE if the user.id is NOT the attributes.id. We're saying, once we've deleted the user from the db, to get it out of the store, we'll get all the ones that AREN'T this one

  adminDeleteUser(id){
    this.users = this.users.filter((user) => {
      return (user.id !== id)})
    this.emit('change')}
  adminDeletePlace(id){
    this.places = this.places.filter((place) => {
      return (place.id !== place)})
    this.emit('change')}
  adminDeleteEvent(id){
    this.events = this.events.filter((event) => {
      return (event.id !== event)})
    this.emit('change')}

  // validateUserFields(){
  //   this.errors = {}
  //   this.validatePresence('firstName')
  //   this.validatePresence('lastName')
  //   this.validatePresence('neighborhood')
  //   this.validatePresence('password')
  //   this.validatePresence('verifyPassword')
  //   this.validatePassword('verifyPassword')
  //   this.validateEmail('email')
  //   this.validatePresence('email')
  // }
  //
  // validatePlaceFields(){
  //   this.errors = {}
  //   this.validatePresence('name')
  //   this.validatePresence('yelp_rating')
  //   this.validatePresence('categories')
  //   this.validatePresence('price')
  //   this.validatePresence('address_street')
  // }
  //
  // validateEventFields(){
  //   this.errors = {}
  //   this.validatePresence('date')
  //   this.validatePresence('guestSpeaker')
  //   this.validatePresence('place')
  // }
  //
  // validatePassword(fieldName){
  //   if(this.fields[fieldName] !== this.fields.password){
  //     this.addError(fieldName, 'try again')
  //   }
  // }
  //
  // validatePresence(fieldName){
  //   if(this.fields[fieldName] === ''){
  //     this.addError(fieldName, 'required field')
  //   }
  // }

  updateUserFields(attribute, value){
    this.userFields[attribute] = value
    this.emit('change')
  }

  updatePlaceFields(attribute, value){
    this.placeFields[attribute] = value
    this.emit('change')
  }

  updateEventFields(attribute, value){
    this.eventFields[attribute] = value
    this.emit('change')
  }

  clearFields(){
    this.userFields = {}
    this.placeFields = {}
    this.eventFields = {}
    this.emit('change')
  }

  handleActions(action){
    switch(action.type){
      case("ADMIN_GET_USERS"):{
        this.adminGetUsers(action.users)
        break
      }
      case("ADMIN_GET_PLACES"):{
        this.adminGetPlaces(action.places)
        break
      }
      case("ADMIN_GET_EVENTS"):{
        this.adminGetEvents(action.events)
        break
      }
      case("ADMIN_CREATE_USER"):{
        this.adminAddUser(action.user)
        break
      }
      case("ADMIN_CREATE_PLACE"):{
        this.adminAddPlace(action.place)
        break
      }
      case("ADMIN_CREATE_EVENT"):{
        this.adminAddEvent(action.event)
        break
      }
      //this is linked to DESTROY_USER in actions.js
      case("ADMIN_DESTROY_USER"):{
        this.adminDeleteUser(action.id)
        break
      }
      case("ADMIN_DESTROY_PLACE"):{
        this.adminDeletePlace(action.id)
        break
      }
      case("ADMIN_DESTROY_EVENT"):{
        this.adminDeleteEvent(action.id)
        break
      }
      case("ADMIN_EDIT_USER"):{
        this.admiEditUser(action.user)
        break
      }
      case("ADMIN_EDIT_PLACE"):{
        this.admiEditPlace(action.place)
        break
      }
      case("ADMIN_EDIT_EVENT"):{
        this.admiEditEvent(action.event)
        break
      }
      default:{}
    }
  }
}

const adminStore = new AdminStore()
dispatcher.register(adminStore.handleActions.bind(adminStore))
window.adminStore = adminStore
export default adminStore
