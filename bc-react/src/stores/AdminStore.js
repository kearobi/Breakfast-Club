import {EventEmitter} from 'events'
import dispatcher from '../Dispatcher'

class AdminStore extends EventEmitter{
  constructor(){
    super()
      this.users = []
      this.newUser = {}
      this.places = []
      this.newPlace = {}
  }

  adminGetUsers(){return this.users}
  adminGetPlaces(){return this.places}

  adminGetNewUser(){return this.newUser}
  adminGetNewPlace(){return this.newPlace}

  adminUpdateNewUser(attributes){
    this.newUser = attributes
    this.users.push(attributes)
    this.emit('change')}
  adminUpdateNewPlace(attributes){
    this.newPlace = attributes
    this.places.push(attributes)
    this.emit('change')}

  adminUpdateUsers(attributes){
    this.users = attributes
    this.emit('change')}
  adminUpdatePlaces(attributes){
    this.places = attributes
    this.emit('change')}

  //we'll handle the delete here because this is where the users are setState

//we want it to be TRUE if the user.id is NOT the attributes.id. We're saying, once we've deleted the user from the db, to get it out of the store, we'll get all the ones that AREN'T this one

  adminAddPlace(attributes){
    return (this.places)
    this.emit('change')}

  adminAddUser(attributes){
    return (this.users)
    this.emit('change')}

  adminDeleteUser(id){
    this.users = this.users.filter((user) => {
      return (user.id !== id)})
    //emit says hey everybody that's listening, i did a thing! now we have to listen for the emit in the table full of users
    this.emit('change')}
  adminDeletePlace(id){
    debugger
    this.places = this.places.filter((place) => {
      return (place.id !== place)})
    this.emit('change')}

  adminEditUser(id){
    this.users = this.users.filter((user) => {
      return (this.users)
      })
      //emit says hey everybody that's listening, i did a thing! now we have to listen for the emit in the table full of users
      this.emit('change')}

  handleActions(action){
    switch(action.type){
      case("UPDATE_USERS"):{
        this.adminUpdateUsers(action.users)
        break
      }
      case("UPDATE_PLACES"):{
        this.adminUpdatePlaces(action.places)
        break
      }
      //this is linked to DELETE_USER in actions.js
      case("DELETE_USER"):{
        this.adminDeleteUser(action.id)
        break
      }
      case("ADMIN_SIGNUP"):{
        this.adminAddUser(action.user)
        break
      }
      case("ADMIN_ADD_PLACE"):{
        this.adminAddPlace(action.place)
        break
      }
      case("DELETE_PLACE"):{
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
