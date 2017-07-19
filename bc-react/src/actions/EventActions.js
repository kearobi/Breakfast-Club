import dispatcher from '../Dispatcher'

let apiUrl;
if(process.env.NODE_ENV === 'production'){
  apiUrl = "/"
} else {
  apiUrl = "http://localhost:4000/"
}

export function testCreate(){
  const params = {
    method: 'GET'
  }
  fetch(`${apiUrl}create-event-test`, params).then(function(response){
    if(response.ok){
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
  fetch(`${apiUrl}create-event`, params).then(function(response){
    if(response.ok){
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
  fetch(`${apiUrl}count-votes`, params).then(function(response){
    if(response.ok){
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
//
// export function rsvp(user, event){
//   const params = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       event_id: event.event.id,
//       user_id: user.id
//     })
//   }
//   fetch(`${apiUrl}rsvp`, params).then(function(response){
//     if(response.ok){
//       response.json().then(function(body){
//         dispatcher.dispatch({
//           type: 'RSVP',
//           data: {
//             event: body.event,
//             users: body.users,
//             places: body.places,
//             guestLists: body.guestLists
//           }
//         })
//       })
//     }
//   }).catch(function(error){
//     console.log("There was an error: " + error)
//   })
// }

export function registerVote(user, event, choice){
  event.choice = choice;
  event.user = user;
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(event)
  }
  fetch(`${apiUrl}register-vote`, params).then(function(response){
    if(response.ok){
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

export function fetchEvent(attributes){
  const params = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(attributes)
  }
  fetch(`${apiUrl}test-event`, params).then(function(response){
    if(response.ok){
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
  fetch(`${apiUrl}current-event`, params).then(function(response){
    if(response.ok){
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

export function fetchEvents(){
  let success;
  const params = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      }
  fetch(`${apiUrl}events`, params)
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
