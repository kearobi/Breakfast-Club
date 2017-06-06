var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var cors = require('cors')
var User = require('./models').Users

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

app.post('/signup', function(request, response){
  console.log(request.body)
  let userParams = request.body.user
  User.create(userParams).then(function(user){
    response.status(200)
    response.json({status: 'success', user: user})
  }).catch(function(error){
    response.status(400)
    response.json({status: 'error', error: error})
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

app.listen(4000, function () {
 console.log('listening on port 4000!');
});
