import dispatcher from '../Dispatcher'
let apiUrl;
if(process.env.NODE_ENV === 'production'){
  apiUrl = "/"
} else {
  apiUrl = "http://localhost:4000/"
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
    attributes.admin = false;
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

  export function adminEditUser(attributes){
    attributes.admin = false;
    const params = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: attributes})
    }
    fetch("http://localhost:4000/admin/edit/user", params).then(function(response){
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
    fetch("http://localhost:4000/admin/edit/place", params).then(function(response){
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
    fetch("http://localhost:4000/admin/edit/event", params).then(function(response){
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
