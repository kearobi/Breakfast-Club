//this will be fired off from our UserStore when the store is ready to send its information back to the server
import {updateMessage} from '../actions/MessageActions';

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

  submitMessage(attributes){
    const params = {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(attributes)
    }
    fetch(`${baseUrl}messages`, params).then((response)=>{
      if(response.ok){
        response.json().then((body)=>{
          updateMessages(body.message)
        })
      }
    }
  }

}

const messageService = new MessageService;
export default messageService;
