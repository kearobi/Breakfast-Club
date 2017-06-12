import dispatcher from './Dispatcher';
import userStore from './stores/UserStore';
import messageStore from './stores/MessageStore';
import adminStore from './stores/AdminStore';
import placeStore from './stores/PlaceStore'
import eventStore from './stores/EventStore'

export function updateUser(){
  // TODO
}

export function rsvp(){
  let event = eventStore.getCurrentEvent();
  let user = userStore.getUser();
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      event_id: event.event.id,
      user_id: user.id
    })
  }
  fetch("http://localhost:4000/rsvp", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        dispatcher.dispatch({
          type: 'RSVP',
          data: {
            event: body.event,
            users: body.users,
            places: body.places,
            guestLists: body.guestLists
          }
        })
      })
    }
  }).catch(function(error){
    console.log("There was an error: " + error)
  })
}

export function registerVote(choice){
  let event = eventStore.getCurrentEvent();
  let user = userStore.getUser();
  event.choice = choice;
  event.user = user;
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(event)
  }
  fetch("http://localhost:4000/register-vote", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        dispatcher.dispatch({
          type:'VOTE-REGISTERED',
          data: {
            event: body.event,
            users: body.users,
            places: body.places,
            guestLists: body.guestLists,
            user: body.user
          }
        })
      })
    }
  }).catch(function(error){
    console.log("There was an error: " + error)
  })
}

export function checkLoginRedir(props){
  let currentUser = userStore.getUser()

  if(currentUser === null){
    props.history.push("/login")
    return false
  }else{
    return true
  }
}

export function checkLogin(){
  dispatcher.dispatch({
    type: 'CHECK_LOGIN'
  })
}

export function userLogout(){
  dispatcher.dispatch({
    type: "LOGOUT"
  })
}

export function fetchEvent(attributes){
  const params = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(attributes)
  }
  fetch("http://localhost:4000/test-event", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        dispatcher.dispatch({
          type:'EVENT-TEST',
          data: {
            event: body.event,
            users: body.users,
            places: body.places,
            guestLists: body.guestLists
          }
        })
      }).catch(function(error){
        console.log("fetch event failed");
      })
    }
    else {
      console.log("fail, response status not 200")
    }
  }).catch(function(){
    console.log("fail, catch clause")
  })
}

export function fetchCurrentEvent(){
  const params = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify()
  }
  fetch("http://localhost:4000/current-event", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        dispatcher.dispatch({
          type:'CURRENT-EVENT',
          data: {
            event: body.event,
            users: body.users,
            places: body.places,
            guestLists: body.guestLists
          }
        })
      }).catch(function(error){
        console.log("fetch current event failed");
      })
    }
    else {
      console.log("fail, response status not 200")
    }
  }).catch(function(){
    console.log("fail, catch clause")
  })
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
        dispatcher.dispatch({
          type:'LOGIN',
          user: body.user,
        })
      }).catch(function(error){
        console.log("login failed");
      })
    }
    else {
      dispatcher.dispatch({
        type:'LOGIN-FAIL'
      })
    }
  }).catch(function(){
    dispatcher.dispatch({
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
        dispatcher.dispatch({
          type: 'SIGNUP',
          user: body.user
        })
      })
    }
  }).catch(function(error){
    console.log("There was an error: " + error);
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

export function updatePlaces(){
  // make the api calls to get the list of cats
  const params = {
    method: 'GET',
  }
  fetch("http://localhost:4000/places", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        dispatcher.dispatch({
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
        let events = body.events
        dispatcher.dispatch({
          type: "FETCH-EVENTS",
          events: events
        })
      }
      else {
        console.log("failure!", body)
      }
    })
  }

//start of Admin actions
export function adminLoadUsers(){
  const params = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}}
  fetch("http://localhost:4000/admin/get/users", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        dispatcher.dispatch({
          type: 'ADMIN_LOAD_USERS',
          users: body.users
        })
      })}
  }).catch(function(error){
    // adminStore.updateMessage("There was an error: " + error)
  })}

export function adminLoadPlaces(){
  const params = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}}
  fetch("http://localhost:4000/admin/get/places", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        dispatcher.dispatch({
          type: 'ADMIN_LOAD_PLACES',
          places: body.places
        })
      })}
    }).catch(function(error){
    // adminStore.updateMessage("There was an error: " + error)
  })}

export function adminLoadEvents(){
  const params = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}}
  fetch("http://localhost:4000/admin/get/events", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        dispatcher.dispatch({
          type: 'ADMIN_LOAD_EVENTS',
          events: body.events
        })
      })}
    }).catch(function(error){
    // adminStore.updateMessage("There was an error: " + error)
  })}

export function adminDeletePlace(attributes){
  const params = {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id: attributes})
  }
  fetch("http://localhost:4000/admin/delete/place", params).then(function(response){
    if (response.status === 200){
      dispatcher.dispatch({
        type: 'ADMIN_DESTROY_PLACE',
        id: attributes
      })
    }
  }).catch(function(error){
    // adminStore.updateMessage("There was an error: " + error)
  })
}
//attributes here is whatever we pass into delete user through the delete call. we set up the params that we're gonna send, then we do a delete call to express with those params. whatever express gives us back, we're gonna dispatch the delete user event and catch if there's any errors
  export function adminDeleteUser(attributes){
    // set up the headers and request
    //Destroy often ends up calling delete, because delete is an HTTP method
    const params = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      //we're turning it back into a JS object instead of just the number 6
      body: JSON.stringify({id: attributes})
    }
    // send state to the backend server. it's /admin according to the API we built
    fetch("http://localhost:4000/admin/delete/user", params).then(function(response){
      // if post is successful update the message to be successful
      // and update the state to equal what we get back from the server
      if(response.status === 200){
          // send the user to the store
          dispatcher.dispatch({
            type: 'ADMIN_DESTROY_USER',
            id: attributes
//we don't care what we get back from the server, so just attributes.
          })
      }
    }).catch(function(error){
      console.log("There was an error: " + error)
    })
  }

export function adminDeleteEvent(attributes){
  const params = {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({id: attributes})
  }
  fetch("http://localhost:4000/admin/delete/event", params).then(function(response){
    if (response.status === 200){
      dispatcher.dispatch({
        type: 'ADMIN_DESTROY_EVENT',
        id: attributes
      })
    }
  }).catch(function(error){
    // adminStore.updateMessage("There was an error: " + error)
  })
}

  export function adminAddUser(attributes){
    const params = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(attributes)}
    fetch("http://localhost:4000/admin/add/user", params).then(function(response){
      if(response.status === 200){
        response.json().then(function(body){
          // send the user to the store
          dispatcher.dispatch({
            type: 'ADMIN_CREATE_USER',
            user: body.user
          })
        })}
    }).catch(function(error){
      // adminStore.updateMessage("There was an error: " + error)
    })}

  export function adminAddPlace(attributes){
    const params = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(attributes)}
    fetch("http://localhost:4000/admin/add/place", params).then(function(response){
      if(response.status === 200){
        response.json().then(function(body){
          dispatcher.dispatch({
            type: 'ADMIN_CREATE_PLACE',
            place: body.place
          })
        })}
    }).catch(function(error){
      // adminStore.updateMessage("There was an error: " + error)
    })}

export function adminAddEvent(attributes){
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(attributes)}
  fetch("http://localhost:4000/admin/add/event", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        dispatcher.dispatch({
          type: 'ADMIN_CREATE_EVENT',
          event: body.event
        })
      })}
  }).catch(function(error){
    // adminStore.updateMessage("There was an error: " + error)
  })}
