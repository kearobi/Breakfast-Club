import dispatcher from '../Dispatcher'

let baseUrl;
if(process.env.NODE_ENV === 'production'){
  baseUrl = "/"
} else {
  baseUrl = "http://localhost:4000/"
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
  fetch(`${baseUrl}login`, params).then((response)=>{
    if(response.ok){
      response.json().then((body)=>{
        // updateUser(body.user)
        dispatcher.dispatch({
          type: 'UPDATE_USER',
          attributes: body.user
        })
      })
    }else{
      // loginFail()
      dispatcher.dispatch({
        type: 'LOGIN_FAIL',
      })
    }
  })
}

// export function updateUser(attributes){
//   dispatcher.dispatch({
//     type: 'UPDATE_USER',
//     attributes: attributes
//   })
// }

export function logout(){
  dispatcher.dispatch({
    type: 'LOGOUT'
  })
}

// export function registrationFail(errors){
//   dispatcher.dispatch({
//     type: 'REGISTRATION_FAIL',
//     errors: errors
//   })
// }

// export function loginFail(){
//   dispatcher.dispatch({
//     type: 'LOGIN_FAIL',
//   })
// }

export function processRegistration(attributes){
    const params = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(attributes)
    }
    fetch(`${baseUrl}signup`, params).then((response)=>{
      if(response.ok){
        response.json().then((body)=>{
          // updateUser(body.user)
          dispatcher.dispatch({
            type: 'UPDATE_USER',
            attributes: body.user
          })
        })
      }else{
        response.json().then((body)=>{
          // registrationFail(body.errors)
          dispatcher.dispatch({
            type: 'REGISTRATION_FAIL',
            errors: body.errors
          })
        })
      }
    })
  }
