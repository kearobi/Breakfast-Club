import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class AdminStore extends EventEmitter{
  constructor(){
    super()
      this.users = []
      this.newUser = {}
  }

  getUsers(){
    return this.users
  }

  getNewUser(){
    return this.newUser
  }

  updateNewUser(attributes){
    this.newUser = attributes
    this.users.push(attributes)
    this.emit('change')
  }

  updateUsers(attributes){
    this.users = attributes
    this.emit('change')
  }

  //we'll handle the delete here because this is where the users are setState

//we want it to be TRUE if the user.id is NOT the attributes.id. We're saying, once we've deleted the user from the db, to get it out of the store, we'll get all the ones that AREN'T this one
  deleteUser(id){
    this.users = this.users.filter((user) => {
      return (user.id !== id)
    })
    //emit says hey everybody that's listening, i did a thing! now we have to listen for the emit in the table full of users
    this.emit('change')}

  editUser(id){
    this.users = this.users.filter((user) => {
      return (this.users)
      })
      //emit says hey everybody that's listening, i did a thing! now we have to listen for the emit in the table full of users
      this.emit('change')
     debugger}

  handleActions(action){
    switch(action.type){
      case("UPDATE_USERS"):{
        this.updateUsers(action.users)
        break
      }
      //this is linked to DELETE_USER in actions.js
      case("DELETE_USER"):{
        this.deleteUser(action.id)
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
