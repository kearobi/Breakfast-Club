import {EventEmitter} from 'events'
import dispatcher from '../Dispatcher'

class SignUpStore extends EventEmitter {
  constructor(){
    super()
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      neighborhood: '',
      password:'',
      verifyPassword: ''
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
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePresence('neighborhood')
    this.validatePresence('password')
    this.validatePresence('verifyPassword')
    this.validatePassword('verifyPassword')
    this.validateEmail('email')
    this.validatePresence('email')
  }

  validatePassword(fieldName){
    if(this.fields[fieldName] !== this.fields.password){
      this.addError(fieldName, 'try again')
    }
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

  updateField(attribute, value){
    this.fields[attribute] = value
    this.emit('change')
  }

  submitRegistration(){
    this.validate()
    this.emit('change')
  }

  handleActions(action){
    switch(action.type){
      case("UPDATE_REGISTRATION"):{
        this.updateField(action.attribute, action.value)
        break
      }
      case("REGISTRATION_SUBMIT"):{
        this.submitRegistration()
        break
      }
      default:{}
    }
  }
}

const signUpStore = new SignUpStore()
dispatcher.register(signUpStore.handleActions.bind(signUpStore))
export default signUpStore
