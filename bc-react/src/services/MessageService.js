//this will be fired off from our UserStore when the store is ready to send its information back to the server
//we need to create a service so we can call out to our server and create new messages
//this service has asyncronous actions, so when it handles changes it gets back from the server, it calls actions as well
import {updateMessageDetail, messageFail} from '../actions/MessageActions';

let baseUrl;
if(process.env.NODE_ENV === 'production'){
  baseUrl = "/"
} else {
  baseUrl = "http://localhost:4000/"
}

class MessageService {
  // constructor(){
  //   this.headers = {'Content-Type': 'application/json'}
  // }
//this will be fired off from our Message Store when the store is ready to send its information back to the server
  submitMessageInput(attributes){
    // const params = {
    //   //this is the action we send over
    //   method: 'POST',
    //   headers: this.headers,
    //   body: JSON.stringify(attributes)
    // }
    // fetch(`${baseUrl}messages`, params).then((response)=>{
    //   if(response.ok){
    //     response.json().then((body)=>{
    //       updateMessage(body.message)
    //     })
    //   }else{
    //     response.json().then((body)=>{
    //       messageFail(body.errors)
    //     })
    //   }
    // })

    setTimeout(()=> {
      updateMessageDetail({
        content: 'hello breakfast club'
        //here he said, "and our users are going to get their AuthTokens back, so we'll add that -- a fake one for now" min 6:40
      })
    }, 1000)
  }

}

const messageService = new MessageService;
window.messageService = messageService
export default messageService;
