var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')
var Place = require('./models').Place
var Bevent = require('./models').Bevent
var GuestList = require('./models').GuestList
// var payload = require('./api').payload
var User = require('./models').User
var Message = require('./models').Message

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())

// TODO apply this middleware to all routes
const authorization = function(request, response, next){
  const token = request.query.authToken || request.body.authToken
  if(token){
    User.findOne({
      where: {authToken: token}
    }).then((user)=>{
      if(user){
        request.currentUser = user
        next()
      }else{
        response.status(401)
        response.json({message:'Authorization Token Invalid'})
      }
    })
  }else{
    response.status(401)
    response.json({message: 'Authorization Token Required'})
  }
}

app.get('/', function (request, response) {
  response.json({message: 'API Example App'})
});

// fetches all messages from database
app.get('/messages', function (request, response) {
  Message.findAll().then(function(messages){
    response.status(200)
    response.json({message: "success", messages: messages});
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

// adds a message to database and adds the created message to the response
app.post('/add-message', function(request, response){
  let params = request.body
  Message.create(params).then(function(message){
    response.status(200)
    response.json({status: 'success', message: message});
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

// creates GuestList object with vote info and updates User vote status
app.post('/register-vote', function(request, response){
  let _event;
  let _user;
  let _users = [];
  let _places = [];
  let _guestLists;
  let event_id = request.body.event.id;
  let user_id = request.body.user.id;
  let choice = request.body.choice;
  let params = {
    event_id: event_id,
    user_id: null,
    vote: choice
  }
  // create GuestList without user id
  return GuestList.create(params)
  .then(function(){
    // set User voted column to true
    return User.update({
        voted: true
      }, {where: {
        id: user_id
      }
    })
  })
  .then(function(){
    return Bevent.findOne({
        limit: 1,
        order: [['date', 'DESC']]
    })
  })
  .then(function(event){
    _event = event;
    return event.getGuestLists();
  })
  // for each GuestList save the corresponding User in _users
  .then(function(lists){
    _guestLists = lists;
    listPromises = [];
    for (var i = 0; i < lists.length; i++){
      listPromises.push(User.findOne({
        where:{id: lists[i].user_id}
      }))
    }
    return Promise.all(listPromises);
  })
  // find the first restaurant option
  .then(function(users){
    for (var i = 0; i < users.length; i++){
      if (users[i] != null){
        _users.push(users[i]);
      }
    }
    return Place.findOne({
      where:{id: _event.place_1_id}
    })
  })
  // find the second restaurant option
  .then (function(place){
    _places.push(place);
    return Place.findOne({
      where:{id: _event.place_2_id}
    })
  })
  .then(function(place){
    _places.push(place);
    return User.findById(user_id)
  })
  .then(function(user){
    _user = user;
    console.log("_user: ", _user);
    if(_event){
      response.status(200)
      response.json({
        event: _event,
        guestLists: _guestLists,
        places: _places,
        users: _users,
        user: _user
      })
    }else{
      response.status(400)
      console.log('no data found')
    }
  })
})

// finds an empty GuestList row and sets the user_id to the current User's id
app.post('/rsvp', function(request, response){
  let _event;
  let _user;
  let _users = [];
  let _places = [];
  let _guestLists;
  let event_id = request.body.event_id;
  let user_id = request.body.user_id;
  return GuestList.findOne({
    where: {
              user_id: null,
              event_id: event_id
            }
  })
  .then(function(guestList){
    let id = guestList.id;
    return GuestList.update({
        user_id: user_id
      }, {where: {
        id: id
      }
    })
  })
  .then(function(){
    return Bevent.findOne({
        limit: 1,
        order: [['date', 'DESC']]
    })
  })
  .then(function(event){
    _event = event;
    return event.getGuestLists();
  })
  // for each GuestList save the corresponding User in _users
  .then(function(lists){
    _guestLists = lists;
    listPromises = [];
    for (var i = 0; i < lists.length; i++){
      listPromises.push(User.findOne({
        where:{id: lists[i].user_id}
      }))
    }
    return Promise.all(listPromises);
  })
  // find the first restaurant option
  .then(function(users){
    for (var i = 0; i < users.length; i++){
      if (users[i] != null){
        _users.push(users[i]);
      }
    }
    return Place.findOne({
      where:{id: _event.place_1_id}
    })
  })
  // find the second restaurant option
  .then (function(place){
    _places.push(place);
    return Place.findOne({
      where:{id: _event.place_2_id}
    })
  })
  .then(function(place){
    _places.push(place);
    return User.findById(user_id)
  })
  .then(function(user){
    _user = user
    response.status(200)
    response.json({
      event: _event,
      guestLists: _guestLists,
      places: _places,
      users: _users,
      user: _user
    })
  })
  .catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

app.get('/places', function(request, response){
  Place.findAll().then(function(places){
    response.status(200)
    response.json({status: 'success', places: places})
  })
})

app.post('/places', function(request, response){
  let placeParams = request.body.place
  Place.create(placeParams).then(function(place){
    response.status(200)
    response.json({status: 'success', place: place})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

app.post('/signup', function(request, response){
  request.body.voted = false
  let userParams = request.body
  User.create(userParams).then(function(user){
    response.status(200)
    response.json({status: 'success', user: user})
  }).catch(function(error){
    console.log("here", error)
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

// for testing purposes only, called from front end test-route
app.post('/test-event', function(request, response){
  let _event;
  let _users;
  let _places = [];
  let _guestLists;
  Bevent.findOne({
    where:{id: request.body.formId}
  })
  .then(function(event){
    _event = event;
    return event.getGuestLists();
  })
  .then(function(lists){
    _guestLists = lists;
    listPromises = [];
    for (var i = 0; i < lists.length; i++){
      listPromises.push(User.findOne({
        where:{id: lists[i].user_id}
      }))
    }
    return Promise.all(listPromises);
  })
  .then(function(users){
    _users = users;
    return Place.findOne({
      where:{id: _event.place_1_id}
    })
  })
  .then (function(place){
    _places.push(place);
    return Place.findOne({
      where:{id: _event.place_2_id}
    })
  })
  .then(function(place){
    _places.push(place);
    if(_event){
      response.status(200)
      response.json({
        event: _event,
        guestLists: _guestLists,
        places: _places,
        users: _users
      })
    }else{
      response.status(400)
      console.log('no data found')
    }
  })
})

app.post('/current-event', function(request, response){
  let _event;
  let _users = [];
  let _places = [];
  let _guestLists;
  // find the current event
  Bevent.findOne({
    limit: 1,
    order: [['date', 'DESC']]
  })
  // save associated GuestLists in _guestLists
  .then(function(event){
    _event = event;
    return event.getGuestLists();
  })
  // for each GuestList save the corresponding User in _users
  .then(function(lists){
    _guestLists = lists;
    listPromises = [];
    for (var i = 0; i < lists.length; i++){
      listPromises.push(User.findOne({
        where:{id: lists[i].user_id}
      }))
    }
    return Promise.all(listPromises);
  })
  // find the first restaurant option
  .then(function(users){
    for (var i = 0; i < users.length; i++){
      if (users[i] != null){
        _users.push(users[i]);
      }
    }
    return Place.findOne({
      where:{id: _event.place_1_id}
    })
  })
  // find the second restaurant option
  .then (function(place){
    _places.push(place);
    return Place.findOne({
      where:{id: _event.place_2_id}
    })
  })
  .then(function(place){
    _places.push(place);
    if(_event){
      response.status(200)
      response.json({
        event: _event,
        guestLists: _guestLists,
        places: _places,
        users: _users
      })
    }else{
      response.status(400)
      console.log('no data found')
    }
  })
})

app.post('/login', function(request, response){
  User.findOne({
    where:{email: request.body.email}
  })
  // search for User by email
  .then(function(user){
    if(user && user.verifyPassword(request.body.password)){
      response.status(200)
      console.log("user: ", user)
      response.json({
        message: 'Success!',
        user: user,
      })
    }else{
      response.status(400)
      response.json({message: 'Invalid Credentials'})
    }
  })
})

//start Admin endpoints
app.get('/admin/get/places', function(request, response){
  Place.findAll().then(function(places){
    response.status(200)
    response.json({status: 'success', places: places})
  })})
app.get('/admin/get/users', function(request, response){
  User.findAll().then(function(users){
    response.status(200)
    response.json({status: 'success', users: users})
  })})
//events error: it doesn't reach this point
app.get('/admin/get/events', function(request, response){
  Bevent.findAll().then(function(events){
    response.status(200)
    response.json({status: 'success', events: events})
  })})

app.post('/admin/add/user', function(request, response){
  let userParams = request.body.user
  console.log("userParams: ", userParams)
  User.create(userParams).then(function(user){
    response.status(200)
    response.json({status: 'success', user: user})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
    console.log("error: ", error)
  })})
app.post('/admin/add/place', function(request, response){
  let placeParams = request.body.place
  Place.create(placeParams).then(function(place){
    response.status(200)
    response.json({status: 'success', place: place})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })})
app.post('/admin/add/event', function(request, response){
  let eventParams = request.body.event
  Bevent.create(eventParams).then(function(event){
    response.status(200)
    response.json({status: 'success', event: event})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })})

//delete is name of HTTP method we're using. the userParams have ID because we're only passing the ID in
//destroy is the sequelize call
//this is where the front end connects to the back end. The problem is we had two delete endpoints with the same URL. As we delete a user, we're sending a delete request to the backend and it's saying hey, i'm looking for this url, and on this url i want to perform these actions. However, you have to have a unique URL for every controller if you're trying to do something uniquely to each model

//so now it will destroy all the guest lists and then it will destroy the user
app.delete('/admin/delete/user', function(request, response){
  let userParams = request.body.id
  console.log("userParams:" + userParams)
  GuestList.destroy({where: {user_id:userParams}}).then(function(){
    User.destroy({where: {id: userParams}}).then(function(user){
      response.status(200)
      //this user:user comes from the then function
      response.json({status: 'success', user: user})
    }).catch(function(error){
      response.status(400)
      console.log("error", error)
      response.json({status: 'error', error: error})
    })
  })
})
//swagger lets you see all the endpoints of an API in URL form
app.delete('/admin/delete/place', function(request, response){
  let placeParams = request.body.id
  Place.destroy({where: {id: placeParams}}).then(function(place){
    repsonse.status(200)
    response.json({status: 'success', place: place})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })})
app.delete('/admin/delete/event', function(request, response){
  let eventParams = request.body.id
  Bevent.destroy({where: {id: eventParams}}).then(function(event){
    repsonse.status(200)
    response.json({status: 'success', event: event})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })})

//ask rob for help
app.put('/admin/edit/user', function(request, response){
  //the body contains the user, and the user contains the properties
  let userParams = request.body.user
  console.log("userParams", userParams)
  User.update(userParams, {where: {id: userParams.id}}).then(function(user){
    response.status(200)
    response.json({status: 'success', user: user})
  }).catch(function(error){
  console.log("error", error)
    response.status(400)
    response.json({status: 'error', error: error})
  })})
app.put('/admin/edit/place', function(request, response){
  let placeParams = request.body.place
  Place.update(placeParams, {where: {id: placeParams.id}}).then(function(place){
    response.status(200)
    response.json({status: 'success', place: place})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })})
app.put('/admin/edit/event', function(request, response){
  let eventParams = request.body.event
  Bevent.update(eventParams, {where: {id: eventParams.id}}).then(function(event){
    response.status(200)
    response.json({status: 'success', event: user})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })})

app.listen(4000, function () {
 console.log('listening on port 4000!');
});
