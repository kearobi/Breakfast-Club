import userStore from './stores/UserStore'
import Dispatcher from './Dispatcher'
import placeStore from './stores/PlaceStore'


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
export function updatePlaces(){
  // make the api calls to get the list of cats
  const params = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
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
    //TODO handle errors
  })
  // update the store with a dispatch
}
