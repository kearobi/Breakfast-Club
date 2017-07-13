//this will be fired off from our UserStore when the store is ready to send its information back to the server
//we need to create a service so we can call out to our server and create new messages
//this service has asyncronous actions, so when it handles changes it gets back from the server, it calls actions as well
import {updateMessageDetail, messageFail, fetchMessages} from '../actions/MessageActions';

let baseUrl;
if(process.env.NODE_ENV === 'production'){
  baseUrl = "/"
} else {
  baseUrl = "http://localhost:4000/"
}

class MessageService {
//this will be fired off from our Message Store when the store is ready to send its information back to the server
  submitMessageInput(attributes){
    const params = {
      //this is the action we send over
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(attributes)
    }
    //fetch is a new feature of ES6, it's a standard for fetching data asyncrhonously using promises
    fetch(`${baseUrl}messages`, params).then((response)=>{
      if(response.ok){
        response.json().then((body)=>{
          //this is the message we get back in postman
          updateMessageDetail(body.message)
        })
      }else{
        response.json().then((body)=>{
          messageFail(body.errors)
        })
      }
    })
  //
  //   setTimeout(()=> {
  //     //the service is then updating the message detail. eventually, we want it to return
  //     updateMessageDetail(attributes
  //       //here he said, "and our users are going to get their AuthTokens back, so we'll add that -- a fake one for now" min 6:40
  //     )
  //   }, 1000)
  }

  fetchMessages(){
    const params = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }
    fetch(`${baseUrl}messages`, params).then((response)=>{
      if(response.ok){
        response.json().then((body)=>{
          fetchMessages(body.messages)
        })
      }else{
        response.json().then((body)=>{
          //might have to change this one
          messageFail(body.errors)
        })
      }
    })
  }
}

const messageService = new MessageService;
window.messageService = messageService;
export default messageService;
