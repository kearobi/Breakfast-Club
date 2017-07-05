import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';

class UserStore extends EventEmitter{
  constructor(){
    super()
    this.user = null
    this.message = ""
  }

  getUser(){
    return this.user
  }

  // Updates the VM after a user action 
  updateUser(attributes){
    console.log("UserStore - updateUser - attributes: ", attributes);
    this.user = attributes
    localStorage.setItem('authToken', attributes.authToken);
    localStorage.setItem('authTokenExpiration', attributes.authTokenExpiration);
    localStorage.setItem('firstName', attributes.firstName);
    localStorage.setItem('lastName', attributes.lastName);
    localStorage.setItem('email', attributes.email);
    localStorage.setItem('neighborhood', attributes.neighborhood);
    localStorage.setItem('voted', attributes.voted)
    localStorage.setItem('rsvp', attributes.rsvp)
    localStorage.setItem('id', this.user.id)
    // store user credentials 'authToken, expire and email' locally in user browser.
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
          id: localStorage.getItem('id')
        }
        this.emit('logged-in')

      console.log("UserStore - setUserFromLocal - this.user: ", this.user);
    }
  }

  logout(){
     this.user = null
     localStorage.setItem('authToken', null);
     localStorage.setItem('authTokenExpiration', null);
     localStorage.setItem('firstName', "");
     localStorage.setItem('lastName', "");
     localStorage.setItem('email', "");
     localStorage.setItem('neighborhood', "")
     localStorage.setItem('voted', false)
     this.emit('logged-out')
   }

  handleActions(action){
    switch(action.type){
      case("UPDATE_USER"):{
        // this.updateUser(action.user)
        this.message = action.message;
        this.emit("User Updated")
        break
      }
      case("SIGNUP"):{
        this.updateUser(action.user)
        this.message = "User Created"
        this.emit("User Created")
        break
      }
      case("VOTE-REGISTERED"):{
        this.updateUser(action.data.user);
        break;
      }
      case("LOGIN"):{
        this.updateUser(action.user)
        this.message = "User Logged In"
        this.emit('login-success')
        break
      }
      case("ADMIN-LOGIN"):{
        this.updateUser(action.user)
        this.message = "Admin Logged In"
        this.emit('admin-login')
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
      case("LOGOUT"):{
        this.logout()
        break
      }
      case("EVENT-CREATED"):{
        this.updateUser(action.data.user)
        this.emit('voted set to false')
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
