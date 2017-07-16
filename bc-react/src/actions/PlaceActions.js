import dispatcher from '../Dispatcher'

let apiUrl;
if(process.env.NODE_ENV === 'production'){
  apiUrl = "/"
} else {
  apiUrl = "http://localhost:4000/"
}


export function fetchPlaces(){
  const params = {
    method: 'GET',
  }
  fetch(`${apiUrl}places`, params).then(function(response){
    if(response.ok){
      response.json().then(function(body){
        dispatcher.dispatch({
          type: 'FETCH_PLACES',
          places: body.places
        })
      })
    }
  }).catch(function(error){
  })
}
