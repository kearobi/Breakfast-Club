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

export function setEventsFromLocal(){
  dispatcher.dispatch({
    type: 'LOCAL_EVENT_STORAGE'
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
//
// export function closeVoting(attributes){
//   const params = {
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({event: attributes.event})
//   }
//   fetch(`${apiUrl}current-event`, params).then(function(response){
//       if(response.ok){
//         dispatcher.dispatch({
//           type:'CLOSE-VOTING',
//           data: {
//             event: body.event,
//             users: body.users,
//             places: body.places,
//             guestLists: body.guestLists
//           }
//         })
//       }
//     }).catch(function(error){
//       console.log("Actions - updateUser - Error: ", error);
//       // TODO
//     })
// }
//
export function checkIfVotingOver(event){
  //this is working properly
  //28800000 is 8 hours
  //Date calculates the number of ms since Jan 1 1970
  //this says: if there are less than 8 hours between the date of the event and today's date, count the votes
  if ((new Date(event.event.date) - new Date()) < 28800000) {
    countVotes()
  }
}

export function checkEventOver(event, id){
  //'previous' is the current event's date
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


export function rsvp(user, event){
  let id

  if(user.rsvp){
    id = user.id
  } else {
    id = null
  }

  const params = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      event_id: event.event.id,
      user_id: id,
      rsvp: user.rsvp
    })
  }
  fetch(`${apiUrl}rsvp`, params).then(function(response){
    if(response.ok){
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

// export function rsvp(user, event){
//   const params = {
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       event: event.event,
//       user: user
//     })
//   }
//   fetch(`${apiUrl}rsvp`, params).then(function(response){
//     if(response.ok){
//         dispatcher.dispatch({
//           type: 'RSVP',
//           user: user
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
//
// export function fetchCurrentEvent(){
//   const params = {
//     method: "POST",
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify()
//   }
//   fetch(`${apiUrl}current-event`, params).then(function(response){
//     if(response.ok){
//       response.json().then(function(body){
//         dispatcher.dispatch({
//           type:'CURRENT-EVENT',
//           data: {
//             event: body.event,
//             users: body.users,
//             places: body.places,
//             guestLists: body.guestLists
//           }
//         })
//       }).catch(function(error){
//         console.log("fetch current event failed");
//       })
//     }
//     else {
//       console.log("fail, response status not 200")
//     }
//   }).catch(function(){
//     console.log("fail, catch clause")
//   })
// }

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
