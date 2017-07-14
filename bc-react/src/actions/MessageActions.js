import dispatcher from '../Dispatcher'

let baseUrl;
if(process.env.NODE_ENV === 'production'){
  baseUrl = "/"
} else {
  baseUrl = "http://localhost:4000/"
}

export function updateMessageInput(attribute, value){
  dispatcher.dispatch({
    type: 'UPDATE_MESSAGE_INPUT',
    attribute: attribute,
    value: value
  })
}

export function sendMessage(messageAttributes){
  dispatcher.dispatch({
    type: 'SEND_MESSAGE'
  })
}

export function processMessage(attributes){
  const params = {
    //this is the action we send over
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(attributes)
  }
  //fetch is a new feature of ES6, it's a standard for fetching data asyncrhonously using promises
  fetch(`${baseUrl}messages`, params).then((response)=>{
    if(response.ok){0
      response.json().then((body)=>{
        //this is the message we get back in postman
        //here we handle it back on the server
        //this returns the message that was just created
        dispatcher.dispatch({
          type: 'UPDATE_MESSAGE_DETAIL',
          attributes: body.message
        })
      })
    }else{
      response.json().then((body)=>{
        dispatcher.dispatch({
          type: 'MESSAGE_FAIL',
          errors: body.errors
        })
      })
    }
  })
}

// export function updateMessages(attributes){
//   dispatcher.dispatch({
//     type: 'UPDATE_MESSAGES',
//     attributes: attributes
//   })
// }
