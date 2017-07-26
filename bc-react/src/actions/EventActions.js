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

export function fetchPastEvent(id){
  const params = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      id: id
    })
  }
  fetch(`${apiUrl}past-event`, params).then(function(response){
    if(response.ok){
      response.json().then(function(body){
        dispatcher.dispatch({
          type:'PAST-EVENT',
          data: {
            event: body.event,
            users: body.users,
            places: body.places,
            guestLists: body.guestLists
          }
        })
      }).catch(function(error){
        console.log("fetch past event failed");
      })
    }
    else {
      console.log("fail, response status not 200")
    }
  }).catch(function(){
    console.log("fail, catch clause")
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

export function checkIfVotingOver(event){
  //Date calculates the number of ms since Jan 1 1970
  //this says: if there are less than 20 hours between the date of the event and today's date, count the votes
  // if ((new Date(event.event.date).getTime() - Date.now()) < 72000000) {

  // NOTE!!! changed timing of countVotes from 12 pm (20 hours) to 9 pm (11 hours) for demo night so people can see the voting section. TODO: change back to 12 pm with the commented out line above
  if ((new Date(event.event.date).getTime() - Date.now()) < 39600000) {
    countVotes()
  }
}

export function checkEventOver(event, userID){
  //this says: if today's date/time is 2 hours (7200000 ms) greater than the date/time of the event date, create a new event
  let eventDate = new Date(event.event.date).getTime()
  let todaysDate = Date.now()
  if ((todaysDate + 7200000) >= eventDate) {
    createNewEvent(userID)
  }
}

export function createNewEvent(userID){
  const params = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      id: userID
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
  const params = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      event_id: event.id,
      user_id: user.id,
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
            guestLists: body.guestLists,
            user: body.user
          }
        })
        if(body.user.rsvp){
          dispatcher.dispatch({
            type: 'USER-RSVP',
            guest: body.user
          })
        }else{
          dispatcher.dispatch({
            type: 'USER-UNRSVP',
            id: body.user.id
          })
        }
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
