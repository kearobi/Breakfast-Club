import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class UserStore extends EventEmitter{
  constructor(){
    super()
    this.user = null
    this.message = ""
  }

  getUser(){
    return this.user
  }

  updateUser(attributes){
    this.user = attributes

  }

  handleActions(action){
    switch(action.type){
      case("SIGNUP"):{
        this.updateUser(action.user)
        this.message = "User Created"
        this.emit('message')
        break
      }
      case("LOGIN"):{
        this.updateUser(action.user)
        this.message = "User Logged In"
        this.emit('login-success')
        break
      }
      case("LOGIN-FAIL"):{
        this.emit('login-fail')
        break
      }
      default:{}
    }
  }
}
const userStore = new UserStore()
dispatcher.register(userStore.handleActions.bind(userStore))
window.user_store = userStore
export default userStore
