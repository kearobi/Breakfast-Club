import dispatcher from '../Dispatcher'

export function updateMessageInput(attribute, value){
  dispatcher.dispatch({
    type: 'UPDATE_MESSAGE_INPUT',
    attribute: attribute,
    value: value
  })
}

export function submitMessageInput(messageAttributes){
  dispatcher.dispatch({
    type: 'SUBMIT_MESSAGE_INPUT'
  })
}

//How could this be renamed for clarity? ie. updateMessageStore? (not sure if that's accurate)
export function updateMessageDetail(attributes){
  dispatcher.dispatch({
    type: 'UPDATE_MESSAGE_DETAIL',
    //the attributes will be just the attributes that were passed
    attributes: attributes
  })
}

export function messageFail(errors){
  dispatcher.dispatch({
    type: 'MESSAGE_FAIL',
    errors: errors
  })
}

export function fetchMessages(attributes){
  dispatcher.dispatch({
    type: 'FETCH_MESSAGES',
    messages: attributes
  })
}
