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

app.get('/messages', function (request, response) {
  Message.findAll().then(function(messages){
    response.status(200)
    response.json({message: "success", messages: messages});
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

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
  console.log(request.body)
  let userParams = request.body
  User.create(userParams).then(function(user){
    response.status(200)
    response.json({status: 'success', user: user})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

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
  let _users;
  let _places = [];
  let _guestLists;
  Bevent.findOne({
    limit: 1,
    order: [['date', 'DESC']]
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

app.post('/login', function(request, response){
  User.findOne({
    where:{email: request.body.email}
  }).then(function(user){
    if(user && user.verifyPassword(request.body.password)){
      response.status(200)
      response.json({
        message: 'Success!',
        user: user
      })
    }else{
      response.status(400)
      response.json({message: 'Invalid Credentials'})
    }
  })
})

app.get('/admin/get/places', function(request, response){
  Place.findAll().then(function(places){
    response.status(200)
    response.json({status: 'success', places: places})
  })
})

app.get('/admin/get/users', function(request, response){
  User.findAll().then(function(users){
    response.status(200)
    response.json({status: 'success', users: users})
  })
})

app.post('/admin/add/user', function(request, response){
  let userParams = request.body.user
  User.create(userParams).then(function(user){
    response.status(200)
    response.json({status: 'success', user: user})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

app.post('/admin/add/place', function(request, response){
  let placeParams = request.body.place
  Place.create(placeParams).then(function(place){
    response.status(200)
    response.json({status: 'success', place: place})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

//delete is name of HTTP method we're using. the userParams have ID because we're only passing the ID in
//destroy is the sequelize call
//this is where the front end connects to the back end. The problem is we had two delete endpoints with the same URL. As we delete a user, we're sending a delete request to the backend and it's saying hey, i'm looking for this url, and on this url i want to perform these actions. However, you have to have a unique URL for every controller if you're trying to do something uniquely to each model
app.delete('/admin/delete/user', function(request, response){
  let userParams = request.body.id
  User.destroy({where: {id: userParams}}).then(function(user){
    response.status(200)
    //this user:user comes from the then function
    response.json({status: 'success', user: user})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})
//swagger lets you see all the endpoints of an API in URL form
app.delete('/admin/delete/place', function(request, response){
  let placeParams = request.body.id
  Place.destroy({where: {id: placeParams}}).then(function(user){
    repsonse.status(200)
    response.json({status: 'success', place: place})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
  })
})

app.listen(4000, function () {
 console.log('listening on port 4000!');
});
