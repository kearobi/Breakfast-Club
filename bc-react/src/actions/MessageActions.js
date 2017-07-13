import dispatcher from '../Dispatcher'

export function updateMessages(attribute, value){
  dispatcher.dispatch({
    type: 'UPDATE_MESSAGES',
    attribute: attribute,
    value: value
  })
}

export function submitMessage(messageAttributes){
  dispatcher.dispatch({
    type: 'MESSAGE_SUBMIT'
  })
}

export function updateUser(attributes){
  dispatcher.dispatch({
    type: 'UPDATE_USER',
    attributes: attributes
  })
}

export function messageFail(errors){
  dispatcher.dispatch({
    type: 'REGISTRATION_FAIL',
    errors: errors
  })
}
