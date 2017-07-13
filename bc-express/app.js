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
var moment = require('moment');
var path = require('path')
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: 'http://localhost:3000'
}

function getNextBreakfast(dayOfWeek) {
    var now = new Date();
    var resultDate = new Date();
    resultDate.setDate(now.getDate() + (7 + dayOfWeek - now.getDay()) % 7);
    resultDate.setHours(8, 0, 0, 0)
    return new Date(resultDate);
}

app.use(cors())
app.use(express.static(path.resolve(__dirname, '../bc-react/build')));
app.use(bodyParser.json())

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
    response.json({message: 'error', errors: error.errors})
  })
})

// adds a message to database and adds the created message to the response
app.post('/add-message', function(request, response){
  let params = request.body
  Message.create(params).then(function(message){
    response.status(200)
    response.json({message: 'success', message: message});
  }).catch(function(error){
    response.status(400)
    response.json({message: 'error', errors: error.errors})
  })
})

// returns the id of the winning restaurant for the current event
app.get('/count-votes', authorization, function (request, response) {
  let _event;
  let _user;
  let _users = [];
  let _places = [];
  let _guestLists;
  let event_id;
	let count_1 = 0;
	let count_2 = 0;
  let winner;
	return Bevent.findOne({
			limit: 1,
			order: [['date', 'DESC']]
	})
	.then(function(event){
		event_id = event.id;
		return GuestList.findAll({
			where:{
				event_id: event_id
			}
	   })
   })
	.then(function(lists){
		for (var i = 0; i < lists.length; i++){
			if (lists[i].vote == '1'){
				count_1++;
			}
			else if (lists[i].vote == '2'){
				count_2++;
			}
		}
		if (count_1 > count_2){
      winner = 1
		}
    else {
      winner = 2
    }
    return Bevent.update({
        winner: winner
      }, {where: {
        id: event_id
      }
    })
  })
  // set Bevent.vote_status to false
  .then(function(){
    return Bevent.update({
        vote_status: false
      }, {where: {
        id: event_id
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
      console.log('else count votes failed')
    }
  })
  .catch(function(){
    console.log('catch count votes failed')
  })
});

// creates GuestList object with vote info and updates User vote status
app.post('/register-vote', authorization, function(request, response){
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
app.post('/rsvp', authorization, function(request, response){
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
    return User.update({
        rsvp: true
      }, {where: {
        id: user_id
      }
    })
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
    response.json({message: 'error', errors: error.errors})
  })
})

app.get('/events', authorization, function(request, response){
  let promises = [];
  let _events;
  Bevent.findAll()
  .then(function(events){
    _events = events;
    events.forEach(function(event){
      if (event.winner == 1){
        promises.push(Place.findById(event.place_1_id));
      }
      else if (event.winner == 2){
        promises.push(Place.findById(event.place_1_id));
      }
      else {
        promises.push(new Promise(function(resolve, reject){
          resolve({ name: "undecided" });
        }));
      }
    })
    return Promise.all(promises);
  })
  .then(function(promises){
    _events.forEach(function(event, i){
      event.place = promises[i]
    })
    response.status(200)
    response.json({message: 'success', events: _events})
  })
  .catch(function(error){
    response.status(500)
    response.json({message: 'error', errors: error.errors})
  })
})


app.get('/places', authorization, function(request, response){
  Place.findAll().then(function(places){
    response.status(200)
    response.json({message: 'success', places: places})
  })
})

app.post('/places', authorization, function(request, response){
  let placeParams = request.body.place
  Place.create(placeParams).then(function(place){
    response.status(200)
    response.json({message: 'success', place: place})
  }).catch(function(error){
    response.status(400)
    response.json({message: 'error', errors: error.errors})
  })
})

app.post('/signup', function(request, response){
  // request.body.voted = false
  // let userParams = request.body
  User.create(
    {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      neighborhood: request.body.neighborhood,
      password: request.body.password
    }
  ).then((user)=>{
    response.status(200)
    response.json({message: 'success', user: user})
  }).catch((error)=>{
    response.status(400)
    response.json({message: 'Unable to create user', errors: error.errors})
  })
})

app.put('/profile', authorization, function(request, response){
  let userParams = request.body.user
  User.update(userParams, {where: {id: userParams.id}}).then(function(user){
    response.status(200)
    response.json({message: 'success', user: user})
  }).catch(function(error){
    response.status(400)
    response.json({message: 'error', errors: error.errors})
  })
})

// ==========================================================
// Alternate way of configuring routes
// Tutorial: https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
// app.route('/users')
//   .get(users.index)       // Shows all users
//   .put(users.create)      // Creates a new user
// ;

// app.route('/users/:userId')
//   .get(users.show)        // Read / View User
//   .put(users.update)      // Update a user
//   .delete(users.delete)   // Deletes a user
// ;
// ==========================================================



// app.get('/create-event-test', function(request, response){
//   Bevent.create({
//       place_1_id: 1,
//       place_2_id: 2,
//       vote_status: true,
//       date: '2017-06-12T22:53:09.840Z',
//       winner: null,
//       createdAt: Date.now(),
//       updatedAt: Date.now()
//   })
//   .then(function(){
//     response.status(200)
//   })
//   .catch(function(){
//     response.status(400)
//     console.log('error creating event')
//   })
// })

app.post('/create-event', authorization, function(request, response){
  let _places;
  let _place_id_1;
  let _place_id_2;
  let u_id = request.body.id;
  return Place.findAll().then(function(places){
    _places = places;
    let num = _places.length;
    let index1 = Math.floor(Math.random() * num)
    let index2 = index1
    while (index2 == index1){
      index2 = Math.floor(Math.random() * num)
    }
    _place_id_1 = _places[index1].id;
    _place_id_2 = _places[index2].id;
  }).then( function(){
    let date = moment().hour(8).day(12).minute(0).second(0)
    return Bevent.create({
        place_1_id: _place_id_1,
        place_2_id: _place_id_2,
        vote_status: true,
        date: date,
        winner: null,
        "createdAt": Date.now(),
        "updatedAt": Date.now()
    })
  })
  .then(function(event){
    _event = event;
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
  })
  .then(function(){
    return User.update({
        voted: false,
        rsvp: false
    }, {where: {}})
  })
  .then(function(){
    return User.findById(u_id)
  })
  .then(function(user){
    response.status(200)
    response.json({
      event: _event,
      guestLists: [],
      places: _places,
      users: [],
      user: user
    })
  })
  .catch(function(error){
    response.status(400)
    console.log('error creating event', error)
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

app.post('/current-event', authorization, function(request, response){
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

app.put('/login', function(request, response){
  User.findOne({
    where:{email: request.body.email}
  }).then((user)=>{
    if(user && user.verifyPassword(request.body.password)){
      response.status(200)
      response.json({
        message: 'Success!',
        user: user
      })
    }else{
      response.status(400)
      response.json({message: 'invalid username and/or password'})
    }
  })
})

// TODO
// app.post('/logout', function(request, response){
//   if (user) =
//   User.findOne({
//     where:{email: request.body.email}
//   })
//   // search for User by email
//   .then(function(user){
//     if(user && user.verifyPassword(request.body.password)){
//       response.status(200)
//       response.json({
//         message: 'Success!',
//         user: user,
//       })
//     }else{
//       response.status(400)
//       response.json({message: 'Invalid Credentials'})
//     }
//   })
// })

//start Admin endpoints
app.get('/admin/get/places', authorization, function(request, response){
  Place.findAll().then(function(places){
    response.status(200)
    response.json({message: 'success', places: places})
  })})
app.get('/admin/get/users', authorization, function(request, response){
  User.findAll().then(function(users){
    response.status(200)
    response.json({message: 'success', users: users})
  })})
app.get('/admin/get/events', authorization, function(request, response){
  Bevent.findAll().then(function(events){
    response.status(200)
    response.json({message: 'success', events: events})
  })})

app.post('/admin/add/user', authorization, function(request, response){
  let userParams = request.body.user
  User.create(userParams).then(function(user){
    response.status(200)
    response.json({message: 'success', user: user})
  }).catch(function(error){
    response.status(400)
    response.json({message: 'error', errors: error.errors})
  })})
app.post('/admin/add/place', authorization, function(request, response){
  let placeParams = request.body.place
  Place.create(placeParams).then(function(place){
    response.status(200)
    response.json({message: 'success', place: place})
  }).catch(function(error){
    response.status(400)
    response.json({message: 'error', errors: error.errors})
  })})
app.post('/admin/add/event', authorization, function(request, response){
  let eventParams = request.body.event
  Bevent.create(eventParams).then(function(event){
    response.status(200)
    response.json({message: 'success', event: event})
  }).catch(function(error){
    response.status(400)
    response.json({message: 'error', errors: error.errors})
  })})

//delete is name of HTTP method we're using. the userParams have ID because we're only passing the ID in
//destroy is the sequelize call
//this is where the front end connects to the back end. The problem is we had two delete endpoints with the same URL. As we delete a user, we're sending a delete request to the backend and it's saying hey, i'm looking for this url, and on this url i want to perform these actions. However, you have to have a unique URL for every controller if you're trying to do something uniquely to each model

//so now it will destroy all the guest lists and then it will destroy the user
app.delete('/admin/delete/user', authorization, function(request, response){
  let userParams = request.body.id
  console.log("userParams:" + userParams)
  GuestList.destroy({where: {user_id:userParams}}).then(function(){
    User.destroy({where: {id: userParams}}).then(function(user){
      response.status(200)
      //this user:user comes from the then function
      response.json({message: 'success', user: user})
    }).catch(function(error){
      response.status(400)
      console.log("error", error)
      response.json({message: 'error', errors: error.errors})
    })
  })
})
//swagger lets you see all the endpoints of an API in URL form
app.delete('/admin/delete/place', authorization, function(request, response){
  let placeParams = request.body.id
  Place.destroy({where: {id: placeParams}}).then(function(place){
    repsonse.status(200)
    response.json({message: 'success', place: place})
  }).catch(function(error){
    response.status(400)
    response.json({message: 'error', errors: error.errors})
  })})
app.delete('/admin/delete/event', authorization, function(request, response){
  let eventParams = request.body.id
  Bevent.destroy({where: {id: eventParams}}).then(function(event){
    repsonse.status(200)
    response.json({message: 'success', event: event})
  }).catch(function(error){
    response.status(400)
    response.json({message: 'error', errors: error.errors})
  })})

//ask rob for help
app.put('/admin/edit/user', authorization, function(request, response){
  //the body contains the user, and the user contains the properties
  let userParams = request.body.user
  User.update(userParams, {where: {id: userParams.id}}).then(function(user){
    response.status(200)
    response.json({message: 'success', user: user})
  }).catch(function(error){
    response.status(400)
    response.json({message: 'error', errors: error.errors})
  })})
app.put('/admin/edit/place', authorization, function(request, response){
  let placeParams = request.body.place
  console.log("request", request)
  console.log("placeParams", placeParams)
  Place.update(placeParams, {where: {id: placeParams.id}}).then(function(place){
    response.status(200)
    response.json({message: 'success', place: place})
  }).catch(function(error){
    response.status(400)
    response.json({message: 'error', errors: error.errors})
  })})
app.put('/admin/edit/event', authorization, function(request, response){
  let eventParams = request.body.event
  Bevent.update(eventParams, {where: {id: eventParams.id}}).then(function(event){
    response.status(200)
    response.json({message: 'success', event: user})
  }).catch(function(error){
    response.status(400)
    response.json({message: 'error', errors: error.errors})
  })})

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../bc-react/build', 'index.html'));
});


app.listen(PORT, function () {
 console.log(`listening on port ${PORT}!`);
});
