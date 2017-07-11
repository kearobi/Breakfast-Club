import dispatcher from '../Dispatcher'

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
