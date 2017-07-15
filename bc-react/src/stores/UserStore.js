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
    // this.user = attributes
    // store user credentials 'authToken, expire and email' locally in user browser.

    let newAttributes = {
      authToken: localStorage.setItem('authToken', attributes.authToken),
      authTokenExpiration: expire,
      firstName: window.localStorage.getItem('firstName'),
      lastName: window.localStorage.getItem('lastName'),
      email: window.localStorage.getItem('email'),
      neighborhood: window.localStorage.getItem('neighborhood'),
      voted: window.localStorage.getItem('voted'),
      rsvp: window.localStorage.getItem('rsvp'),
      id: window.localStorage.getItem('id'),
    }


    this.sendUser(){

    }
    localStorage.setItem('authToken', attributes.authToken);
    localStorage.setItem('authTokenExpiration', attributes.authTokenExpiration);
    localStorage.setItem('firstName', attributes.firstName);
    localStorage.setItem('lastName', attributes.lastName);
    localStorage.setItem('email', attributes.email);
    localStorage.setItem('neighborhood', attributes.neighborhood);
    localStorage.setItem('voted', attributes.voted);
    localStorage.setItem('rsvp', attributes.rsvp);
    localStorage.setItem('id', attributes.id);
    this.setUserFromLocal()
    localStorage.setItem('authToken', this.user.authToken);
    localStorage.setItem('authTokenExpiration', this.user.authTokenExpiration);
    localStorage.setItem('firstName', this.user.firstName);
    localStorage.setItem('lastName', this.user.lastName);
    localStorage.setItem('email', this.user.email);
    localStorage.setItem('neighborhood', this.user.neighborhood);
    localStorage.setItem('voted', this.user.voted);
    localStorage.setItem('rsvp', this.user.rsvp);
    localStorage.setItem('id', this.user.id);
    this.emit('change')
  }

  setUserFromLocal(){
    console.log("UserStore - setUserFromLocal...");
    let token = window.localStorage.getItem("authToken");
    let expire = new Date(window.localStorage.getItem('authTokenExpiration'));
      if(token && expire >= new Date()){
        this.user ={
          authToken: token,
          authTokenExpiration: expire,
          firstName: window.localStorage.getItem('firstName'),
          lastName: window.localStorage.getItem('lastName'),
          email: window.localStorage.getItem('email'),
          neighborhood: window.localStorage.getItem('neighborhood'),
          voted: window.localStorage.getItem('voted'),
          rsvp: window.localStorage.getItem('rsvp'),
          id: window.localStorage.getItem('id'),
        }
        this.emit('change')
        }

      console.log("UserStore - setUserFromLocal - this.user: ", this.user);
  }

  checkLogin(){
    if(localStorage.getItem('authToken') !== null){
      return true
    }
    // if(this.user.authToken !== null){
    //   console.log(localStorage.getItem('authToken'))
    //   return true
    else{
      return false
    }
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
