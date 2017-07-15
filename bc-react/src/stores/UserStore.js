import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class UserStore extends EventEmitter{
  constructor(){
    super()
    this.user = {}
    this.message = ""
  }

//we can tell a user is logged in if the authToken is set in the store

  getUser(){
    return this.user
  }

  updateUser(attributes){
    this.user = attributes

    this.fields = attributes
    localStorage.setItem('authToken', attributes.authToken);
    localStorage.setItem('authTokenExpiration', attributes.authTokenExpiration);
    localStorage.setItem('firstName', attributes.firstName);
    localStorage.setItem('lastName', attributes.lastName);
    localStorage.setItem('email', attributes.email);
    localStorage.setItem('neighborhood', attributes.neighborhood);
    localStorage.setItem('voted', attributes.voted);
    localStorage.setItem('rsvp', attributes.rsvp);
    localStorage.setItem('id', attributes.id);
    localStorage.setItem('active', attributes.active);
    localStorage.setItem('admin', attributes.admin);
    // store user credentials 'authToken, expire and email' locally in user browser.
    this.emit('change')
  }

  setUserFromLocal(){
  console.log("UserStore - setUserFromLocal...");
  let token = localStorage.getItem('authToken');
  let expire = new Date(localStorage.getItem('authTokenExpiration'));
    if(token && expire >= new Date()){
      this.user ={
        authToken: token,
        authTokenExpiration: expire,
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
        email: localStorage.getItem('email'),
        neighborhood: localStorage.getItem('neighborhood'),
        voted: localStorage.getItem('voted'),
        rsvp: localStorage.getItem('rsvp'),
        id: localStorage.getItem('id'),
        active: localStorage.getItem('active')
      }
      this.emit('logged-in')

    console.log("UserStore - setUserFromLocal - this.user: ", this.user);
  }
}

  checkLogin(){
    return this.fields.authToken !== null
  }

  clearUserData(){
    localStorage.removeItem('authToken');
    localStorage.removeItem('authTokenExpiration');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    localStorage.removeItem('neighborhood')
    localStorage.removeItem('voted')
    localStorage.removeItem('admin')
    localStorage.removeItem('rsvp')
    localStorage.removeItem('active')

    this.user.authToken = null
    this.emit('change')
  }

  handleActions(action){
    switch(action.type){
      case("EDIT_USER"):{
        this.updateUser(action.user)
        break
      }
      case("UPDATE_USER"):{
        this.updateUser(action.attributes)
        break
      }
      case("VOTE-REGISTERED"):{
        this.updateUser(action.data.user);
        break;
      }
      // we have a login store now
      // case("LOGIN"):{
      //   this.updateUser(action.user)
      //   this.message = "User Logged In"
      //   this.emit('login-success')
      //   break
      // }
      case("CHECK_LOGIN"):{
        this.setUserFromLocal()
        break
      }
      case("LOGIN_FAIL"):{
        this.emit('login-fail')
        break
      }
      case("LOGOUT"):{
        this.clearUserData()
        break
      }
      case("EVENT-CREATED"):{
        this.updateUser(action.data.user)
        this.emit('voted set to false')
        break
      }
      case("LOCAL_STORAGE"):{
        this.setUserFromLocal()
        break
      }

      default:{}
    }
  }
}

const userStore = new UserStore()
dispatcher.register(userStore.handleActions.bind(userStore))
window.userStore = userStore
export default userStore
