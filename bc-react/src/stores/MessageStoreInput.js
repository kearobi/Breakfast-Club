import {EventEmitter} from 'events';
import dispatcher from '../Dispatcher';
import {processMessage} from '../actions/MessageActions'

class MessageStoreInput extends EventEmitter{
  constructor(){
    super()
    this.fields = {
      content: '',
      // author: '',
      // createdAt: ''
    }
    this.errors = {}
  }

  // getLastFiveMessages(){
  //   let messageArray = [];
  //   if (this.fields.length > 10){
  //     for (var i = this.fields.length - 1; i > this.fields.length - 16; i--){
  //       messageArray.push(this.fields[i]);
  //     }
  //     return messageArray.reverse();
  //   } else {
  //     return this.fields.reverse();
  //   }
  // }

  getFields(){
    return this.fields
  }

  getErrors(){
    return this.errors
  }

  validate(){
    this.errors = {}
    this.validatePresence('content')
  }

  updateMessageInput(attribute, value){
    this.fields[attribute] = value
    this.emit('change')
  }

  validatePresence(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'required field')
    }
  }

  addError(fieldName, message){
    this.errors[fieldName] = message
  }

  updateField(attribute, value){
    this.fields[attribute] = value
    this.emit('change')
  }

  clearFields(){
    this.fields = {
      content: '',
      // author: '',
      // createdAt: ''
    }
    this.emit('change')
  }

  sendMessage(){
    this.validate()
    //here we want to submitMessageInput to the service if there are no errors during client-side validation
    if(Object.keys(this.errors).length === 0){
      processMessage(this.fields)
      this.clearFields()
    }
    //either way we want to emit change so that the state of our application is updated if there are validation errors there
    this.emit('change')
  }

  handleServerErrors(errors){
    errors.forEach((error) =>{
      this.errors[error.path] = error.message
    })
    this.emit('change')
  }

  handleActions(action){
    switch(action.type){
      case("UPDATE_MESSAGE_INPUT"):{
        this.updateField(action.attribute, action.value)
        break
      }
      case("SEND_MESSAGE"):{
        this.sendMessage(action.attribute, action.value)
        break
      }
      case("MESSAGE_FAIL"):{
        this.handleServerErrors(action.errors)
        break
      }
      case("UPDATE_MESSAGE_DETAIL"):{
        // this.clearFields()
        break
      }
      default:{}
    }
  }
}
const messageStoreInput = new MessageStoreInput();
dispatcher.register(messageStoreInput.handleActions.bind(messageStoreInput));
window.messageStoreInput = messageStoreInput;
export default messageStoreInput;
