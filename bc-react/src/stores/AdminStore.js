import {EventEmitter} from 'events'
import Dispatcher from '../Dispatcher'

class AdminStore extends EventEmitter{
  constructor(){
    super()
      this.users =
        [
          {
            firstName: 'Nabe',
            lastName: 'Niestas',
            email: 'nastynabe@aol.com',
            neighborhood: 'Nission Nills',
            password: 'nillywilly'
          },
          {
            firstName: 'Nntonio',
            lastName: 'Nnvarro',
            email: 'nastynav@aol.com',
            neighborhood: 'Nrowne Noint',
            password: 'nillywilly2'
          }
        ],
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
