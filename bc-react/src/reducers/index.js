import { combineReducers } from 'redux'
import EventsReducer from './reducer_events'
import PlacesReducer from './reducer_places'

const rootReducer = combineReducers({
  events: EventsReducer,
  places: PlacesReducer,
  // user: UserReducer
})

export default rootReducer
