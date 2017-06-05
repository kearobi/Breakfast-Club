import userStore from './stores/UserStore'
import Dispatcher from './Dispatcher'

export function loginUser(info){
}

export function addUser(attributes){
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(attributes)
  }
  fetch("http://localhost:4000/signup", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        // send the cat to the store
        Dispatcher.dispatch({
          type: 'SIGNUP',
          user: body.user
        })
      })
    }
  }).catch(function(error){
    userStore.updateMessage("There was an error: " + error)
  })
}
