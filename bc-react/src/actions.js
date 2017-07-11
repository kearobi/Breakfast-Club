import dispatcher from './Dispatcher';

let apiUrl;
if(process.env.NODE_ENV === 'production'){
  apiUrl = "/"
} else {
  apiUrl = "http://localhost:4000/"
}

export function editUser(attributes){
  const params = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user: attributes})
  }
  fetch(apiUrl + "edit/user", params).then(function(response){
      if (response.status === 200){
        dispatcher.dispatch({
          type: 'EDIT_USER',
          user: attributes
        })
      }
    }).catch(function(error){
      console.log("Actions - updateUser - Error: ", error);
      // adminStore.updateMessage("There was an error: " + error)
    })
}


export function testCreate(){
  const params = {
    method: 'GET'
  }
  fetch(apiUrl + "create-event-test", params).then(function(response){
    if(response.status === 200){
      console.log("success")
    }
  })
}

export function checkIfVotingOver(event){
  if (new Date(event.event.date) - Date.now() < 86400000) {
    countVotes()
  }
}

export function checkEventOver(event, id){
  let previous = new Date(event.event.date)
  let newEvent = new Date(Date.now())
  if (previous < newEvent) {
    createNewEvent(id)
  }
}

export function createNewEvent(id){
  console.log("createNewEvent Called")
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      id: id
    })
  }
  fetch(apiUrl + "create-event", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        dispatcher.dispatch({
          type: 'EVENT-CREATED',
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
  })
}

export function countVotes(){
  const params = {
    method: 'GET'
  }
  fetch(apiUrl + "count-votes", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        dispatcher.dispatch({
          type: 'VOTES-COUNTED',
          data: {
            event: body.event,
            users: body.users,
            places: body.places,
            guestLists: body.guestLists
          }
        })
      })
    }
  })
}

export function rsvp(user, event){

  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      event_id: event.event.id,
      user_id: user.id
    })
  }
  fetch(apiUrl + "rsvp", params).then(function(response){
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

export function registerVote(user, event, choice){
  event.choice = choice;
  event.user = user;
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(event)
  }
  fetch(apiUrl + "register-vote", params).then(function(response){
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

export function checkLoginRedir(props, currentUser){
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
  fetch(apiUrl + "test-event", params).then(function(response){
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
  fetch(apiUrl + "current-event", params).then(function(response){
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
  fetch(apiUrl + "login", params).then(function(response){
    if(response.status === 200){
      response.json().then(function(body){
        if (body.user.admin){
          dispatcher.dispatch({
            type:'ADMIN-LOGIN',
            user: body.user,
          })
        }
        else {
          dispatcher.dispatch({
            type:'LOGIN',
            user: body.user,
          })
        }
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
  attributes.admin = false;
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(attributes)
  }
  fetch(apiUrl + "signup", params).then(function(response){
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
  fetch(apiUrl + "add-message", params).then(function(response){
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
  fetch(apiUrl + "places", params).then(function(response){
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
  fetch(apiUrl + 'messages', params)
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
  fetch(apiUrl + 'events', params)
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
  fetch(apiUrl + "admin/get/users", params).then(function(response){
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
  fetch(apiUrl + "admin/get/places", params).then(function(response){
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
  fetch(apiUrl + "admin/get/events", params).then(function(response){
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
  fetch(apiUrl + "admin/delete/place", params).then(function(response){
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
    // debugger
    fetch(apiUrl + "admin/delete/user", params).then(function(response){
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
  fetch(apiUrl + "admin/delete/event", params).then(function(response){
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
    attributes.admin = false;
    const params = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(attributes)}
    fetch(apiUrl + "admin/add/user", params).then(function(response){
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
    fetch(apiUrl + "admin/add/place", params).then(function(response){
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
  fetch(apiUrl + "admin/add/event", params).then(function(response){
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

  export function adminEditUser(attributes){
    attributes.admin = false;
    const params = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: attributes})
    }
    fetch(apiUrl + "admin/edit/user", params).then(function(response){
      if (response.status === 200){
        dispatcher.dispatch({
          type: 'ADMIN_UPDATE_USER',
          id: attributes
        })
      }
    }).catch(function(error){
      // adminStore.updateMessage("There was an error: " + error)
    })
  }

  export function adminEditPlace(attributes){
    const params = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({place: attributes})
    }
    fetch(apiUrl + "admin/edit/place", params).then(function(response){
      if (response.status === 200){
        dispatcher.dispatch({
          type: 'ADMIN_UPDATE_PLACE',
          id: attributes
        })
      }
    }).catch(function(error){
      // adminStore.updateMessage("There was an error: " + error)
    })
  }

  export function adminEditEvent(attributes){
    const params = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({event: attributes})
    }
    fetch(apiUrl + "admin/edit/event", params).then(function(response){
      if (response.status === 200){
        dispatcher.dispatch({
          type: 'ADMIN_UPDATE_EVENT',
          id: attributes
        })
      }
    }).catch(function(error){
      // adminStore.updateMessage("There was an error: " + error)
    })
  }
