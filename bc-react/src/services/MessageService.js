//this will be fired off from our UserStore when the store is ready to send its information back to the server
import {updateMessage, messageFail} from '../actions/MessageActions';

let baseUrl;
if(process.env.NODE_ENV === 'production'){
  baseUrl = "/"
} else {
  baseUrl = "http://localhost:4000/"
}

class MessageService {
  constructor(){
    this.headers = {'Content-Type': 'application/json'}
  }

  submitMessageInput(attributes){
    const params = {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(attributes)
    }
    fetch(`${baseUrl}messages`, params).then((response)=>{
      if(response.ok){
        response.json().then((body)=>{
          updateMessage(body.message)
        })
      }else{
        response.json().then((body)=>{
          messageFail(body.errors)
        })
      }
    })
  }

}

const messageService = new MessageService;
export default messageService;
