import dispatcher from '../Dispatcher'

let apiUrl;
if(process.env.NODE_ENV === 'production'){
  apiUrl = "/"
} else {
  apiUrl = "http://localhost:4000/"
}

export function updateRegistration(attribute, value){
  dispatcher.dispatch({
    type: 'UPDATE_REGISTRATION',
    attribute: attribute,
    value: value
  })
}

export function submitRegistration(userAttributes){
  dispatcher.dispatch({
    type: 'REGISTRATION_SUBMIT'
  })
}

export function updateLogin(attribute, value){
  dispatcher.dispatch({
    type: 'UPDATE_LOGIN',
    attribute: attribute,
    value: value
  })
}

export function submitLogin(loginAttributes){
  dispatcher.dispatch({
    type: 'LOGIN_SUBMIT'
  })
}

export function processLogin(attributes){
  const params = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(attributes)
  }
  fetch(`${apiUrl}login`, params).then((response)=>{
    if(response.ok){
      response.json().then((body)=>{
        if(body.user.active){
        dispatcher.dispatch({
          type: 'UPDATE_USER',
          attributes: body.user
        })}else{
          dispatcher.dispatch({
            type: 'INACTIVE_USER'
          })
        }
      })
    }else{
      dispatcher.dispatch({
        type: 'LOGIN_FAIL',
      })
    }
  })
}

export function logout(){
  dispatcher.dispatch({
    type: 'LOGOUT'
  })
}

export function processRegistration(attributes){
    const params = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(attributes)
    }
    fetch(`${apiUrl}signup`, params).then((response)=>{
      if(response.ok){
        response.json().then((body)=>{
          dispatcher.dispatch({
            type: 'UPDATE_USER',
            attributes: body.user
          })
        })
      }else{
        response.json().then((body)=>{
          dispatcher.dispatch({
            type: 'REGISTRATION_FAIL',
            errors: body.errors
          })
        })
      }
    })
  }

export function editUser(attributes){
  const params = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user: attributes})
  }
  fetch(`${apiUrl}profile`, params).then(function(response){
      if(response.ok){
        dispatcher.dispatch({
          type: 'EDIT_USER',
          user: attributes
        })
      }
    }).catch(function(error){
      console.log("Actions - updateUser - Error: ", error);
      // TODO
    })
}

export function setUserFromLocal(){
  dispatcher.dispatch({
    type: 'LOCAL_STORAGE'
  })
}
