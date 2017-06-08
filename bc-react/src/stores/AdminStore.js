import {EventEmitter} from 'events'
import Dispatcher from '../Dispatcher'

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

  handleActions(action){
    switch(action.type){
      case("UPDATE_USERS"):{
        this.updateUsers(action.users)
        break
      }
      default:{}
    }
  }

}

const astore = new AdminStore()
Dispatcher.register(astore.handleActions.bind(astore))
window.astore = astore
export default astore
