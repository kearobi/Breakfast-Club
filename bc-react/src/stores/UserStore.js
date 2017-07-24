import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class UserStore extends EventEmitter{
  constructor(){
    super()
    this.user = {}
    this.message = ""
    this.guestlist = []
  }

//we can tell a user is logged in if the authToken is set in the store

  getUser(){
    return this.user
  }

  getGuestlist(){
    return this.guestlist
  }

  updateUser(attributes){
    this.user = attributes

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
  let token = localStorage.getItem('authToken');
  let expire = new Date(localStorage.getItem('authTokenExpiration'));
    if(token != undefined
      // && expire >= new Date()
    )
      {
      this.user ={
        authToken: token,
        authTokenExpiration: expire,
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
        email: localStorage.getItem('email'),
        neighborhood: localStorage.getItem('neighborhood'),
        voted: JSON.parse(localStorage.getItem('voted')),
        rsvp: JSON.parse(localStorage.getItem('rsvp')),
        id: JSON.parse(localStorage.getItem('id')),
        active: JSON.parse(localStorage.getItem('active')),
        admin: JSON.parse(localStorage.getItem('admin'))
      }
      this.emit('logged-in')

    console.log("setUserFromLocal", this.user);
  }
}

  checkLogin(){
    if (this.user.authToken !== null)
      return true
  }

  clearData(){
    localStorage.removeItem('authToken');
    localStorage.removeItem('authTokenExpiration');
    localStorage.removeItem('id')
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    localStorage.removeItem('neighborhood')
    localStorage.removeItem('voted')
    localStorage.removeItem('admin')
    localStorage.removeItem('rsvp')
    localStorage.removeItem('active')
    localStorage.removeItem('currentEvent')
    localStorage.removeItem('events')
    localStorage.removeItem('pastEvent')

    this.user.authToken = null
    this.emit('change')
  }

  addToGuestlist(attributes){
    this.guestlist.push(attributes)
    this.emit('change')
  }

  removeFromGuestlist(id){
    this.guestlist = this.guestlist.filter((user) => {
      return (user.id !== id)})
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
      case("LOCAL_STORAGE"):{
        this.setUserFromLocal()
        break
      }
      case("LOGIN_FAIL"):{
        this.emit('login-fail')
        break
      }
      case("LOGOUT"):{
        this.clearData()
        break
      }
      case("EVENT-CREATED"):{
        this.updateUser(action.data.user)
        this.emit('change')
        break
      }
      case("RSVP"):{
        this.updateUser(action.user)
        break
      }
      case("FETCH-GUESTLIST"):{
        this.guestlist = action.guestlist;
        this.emit('change')
        break
      }
      case("USER-RSVP"):{
        this.addToGuestlist(action.guest)
        break
      }
      case("USER-UNRSVP"):{
        this.removeFromGuestlist(action.id)
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
