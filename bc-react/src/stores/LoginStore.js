import {EventEmitter} from 'events'
import dispatcher from '../Dispatcher'

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

  getErrors(){
    return this.errors
  }

  validate(){
    this.errors = {}
    this.validateEmail('email')
    this.validatePresence('password')
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
      default:{}
    }
  }
}

const loginStore = new LoginStore()
dispatcher.register(loginStore.handleActions.bind(loginStore))
export default loginStore
