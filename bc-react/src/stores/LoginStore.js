import {EventEmitter} from 'events'
import dispatcher from '../Dispatcher'
import {processLogin} from '../actions/UserActions'

class LoginStore extends EventEmitter {
  constructor(){
    super()
    this.fields = {
      email:'',
      password:'',
    }
    this.errors = {}
  }

  getFields(){
    return this.fields
  }

  clearFields(){
    this.fields = {
      email:'',
      password:'',
    }
    this.emit('change')
  }

  getErrors(){
    return this.errors
  }

  validate(){
    this.errors = {}
    this.validatePresence('password')
    this.validateEmail('email')
    this.validatePresence('email')
  }

  validatePresence(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'required field')
    }
  }

  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'invalid email address')
    }
  }

  addError(fieldName, message){
    this.errors[fieldName] = message
  }

  updateLogin(attribute, value){
    this.fields[attribute] = value
    this.emit('change')
  }

  submitLogin(){
    this.validate()
    if(Object.keys(this.errors).length === 0){
      processLogin(this.fields)
    }
    this.emit('change')
  }

  loginFail(){
    this.errors['general'] = 'invalid email and/or password'
    this.emit('change')
  }

  inactiveUser(){
    this.errors['inactive'] = 'holla at breakfastclub.sd@gmail.com to reactivate this account'
    this.emit('change')
  }

  handleActions(action){
    switch(action.type){
      case("UPDATE_LOGIN"):{
        this.updateLogin(action.attribute, action.value)
        break
      }
      case("LOGIN_SUBMIT"):{
        this.submitLogin()
        break
      }
      case("LOGIN_FAIL"):{
        this.loginFail()
        break
      }
      case("INACTIVE_USER"):{
        this.inactiveUser()
        break
      }
      case("UPDATE_USER"):{
        this.clearFields()
        break
      }
      default:{}
    }
  }
}

const loginStore = new LoginStore()
dispatcher.register(loginStore.handleActions.bind(loginStore))
export default loginStore
