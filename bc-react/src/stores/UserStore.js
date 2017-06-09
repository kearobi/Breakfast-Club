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
    localStorage.setItem('authToken', attributes.authToken);
    localStorage.setItem('authTokenExpiration', attributes.authTokenExpiration);
    localStorage.setItem('firstName', attributes.firstName);
    localStorage.setItem('lastName', attributes.lastName);
    localStorage.setItem('email', attributes.email);
    localStorage.setItem('neighborhood', attributes.neighborhood)
    // store user credentials 'authToken, expire and email' locally in user browser.
  }

  setUserFromLocal(){
    let token = localStorage.getItem('authToken');
    let expire = new Date(localStorage.getItem('authTokenExpiration'));
      if(token && expire >= new Date()){
        this.user ={
          authToken: token,
          authTokenExpiration: expire,
          firstName: localStorage.getItem('firstName'),
          lastName: localStorage.getItem('lastName'),
          email: localStorage.getItem('email'),
          neighborhood: localStorage.getItem('neighborhood')
        }
        this.emit('logged-in')
    }
  }

  handleActions(action){
    switch(action.type){
      case("SIGNUP"):{
        console.log()
        this.updateUser(action.user)
        this.message = "User Created"
        this.emit("User Created")
        break
      }
      case("LOGIN"):{
        this.updateUser(action.user)
        this.message = "User Logged In"
        this.emit('login-success')
        break
      }
      case("CHECK_LOGIN"):{
        this.setUserFromLocal()
        break
      }
      case("LOGIN_FAIL"):{
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
