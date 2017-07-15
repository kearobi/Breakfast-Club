import dispatcher from '../Dispatcher'

let apiUrl;
if(process.env.NODE_ENV === 'production'){
  apiUrl = "/"
} else {
  apiUrl = "http://localhost:4000/"
}

export function addMessage(attributes){
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(attributes)
  }
  fetch(`${apiUrl}messages`, params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        // send the message to the store
        dispatcher.dispatch({
          type: 'ADD-MESSAGE',
          message: body.message
        })
      })
    }
  }).catch(function(error){
    console.log("There was an error: " + error);
  })
}


export function fetchMessages(){
  let success;
  const params = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      }
  fetch(`${apiUrl}messages`, params)
    .then((response)=>{
      success = response.ok
      return response.json()
    })
    .then((body)=>{
      if (success){
        let messages = body.messages
        dispatcher.dispatch({
          type: "FETCH-MESSAGES",
          messages: messages
        })
      }
      else {
        console.log("failure!", body)
      }
    })
}
