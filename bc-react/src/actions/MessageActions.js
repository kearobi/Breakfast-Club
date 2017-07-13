import dispatcher from '../Dispatcher'

export function updateMessageInput(attribute, value){
  dispatcher.dispatch({
    type: 'UPDATE_MESSAGE_INPUT',
    attribute: attribute,
    value: value
  })
}

export function submitMessage(messageAttributes){
  dispatcher.dispatch({
    type: 'MESSAGE_SUBMIT'
  })
}

//How could this be renamed for clarity? ie. updateMessageStore? (not sure if that's accurate)
export function updateMessage(attribute, value){
  dispatcher.dispatch({
    type: 'UPDATE_MESSAGE',
    attribute: attribute,
    value: value
  })
}

export function messageFail(errors){
  dispatcher.dispatch({
    type: 'MESSAGE_FAIL',
    errors: errors
  })
}
