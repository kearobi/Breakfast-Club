import Dispatcher from './Dispatcher';
import UserStore from './stores/UserStore';
import MessageStore from './stores/MessageStore';
import AdminStore from './stores/AdminStore';
import placeStore from './stores/PlaceStore'

export function updateUser(){
  // TODO
}

export function loginUser(attributes){
  const params = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(attributes)
  }
  fetch("http://localhost:4000/login", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        Dispatcher.dispatch({
          type:'LOGIN',
          user: body.user
        })
      }).catch(function(error){
        console.log("login failed");
      })
    }
    else {
      Dispatcher.dispatch({
        type:'LOGIN-FAIL'
      })
    }
  }).catch(function(){
    Dispatcher.dispatch({
      type:'LOGIN-FAIL'
    })
  })
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
        // send the user to the store
        Dispatcher.dispatch({
          type: 'SIGNUP',
          user: body.user
        })
      })
    }
  }).catch(function(error){
    UserStore.updateMessage("There was an error: " + error)
  })
}

export function addMessage(attributes){
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(attributes)
  }
  fetch("http://localhost:4000/add-message", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        // send the message to the store
        Dispatcher.dispatch({
          type: 'ADD-MESSAGE',
          message: body.message
        })
      })
    }
  }).catch(function(error){
    UserStore.updateMessage("There was an error: " + error)
  })
}

export function updatePlaces(){
  // make the api calls to get the list of cats
  const params = {
    method: 'GET',
  }
  fetch("http://localhost:4000/places", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        Dispatcher.dispatch({
          type: 'UPDATE_PLACES',
          places: body.places
        })
      })
    }
  }).catch(function(error){
  })
}

export function fetchMessages(){
  let success;
  const params = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      }
  fetch('http://localhost:4000/messages', params)
    .then((response)=>{
      success = response.ok
      return response.json()
    })
    .then((body)=>{
      if (success){
        console.log("success!", body)
        let messages = body.messages
        Dispatcher.dispatch({
          type: "FETCH-MESSAGES",
          messages: messages
        })
      }
      else {
        console.log("failure!", body)
      }
    })
}

export function fetchEvents(){
  let success;
  const params = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      }
  fetch('http://localhost:4000/events', params)
    .then((response)=>{
      success = response.ok
      return response.json()
    })
    .then((body)=>{
      if (success){
        console.log("success!", body)
        let events = body.events
        Dispatcher.dispatch({
          type: "FETCH-EVENTS",
          events: events
        })
      }
      else {
        console.log("failure!", body)
      }
    })
  }

  export function updateUsers(){
    // make the api calls to get the list of cats
    const params = {
      method: 'GET',
    }

    fetch("http://localhost:4000/admin", params).then(function(response){
      if(response.status === 200){
        response.json().then(function(body){
          Dispatcher.dispatch({
            type: 'UPDATE_USERS',
            users: body.users
          })
        })
      }
    }).catch(function(error){
    })
  }
//
// export function displayModal(){
//
// }
