import {EventEmitter} from 'events'
import dispatcher from '../Dispatcher'

class PlaceStore extends EventEmitter{
  constructor(){
    super()
    this.places =
    [
      {
        name: 'Breakfast Republic',
        street: '2730 University Ave',
        city: 'San Diego',
        state: 'CA',
        phone: '+16196420299',
        rating: 4,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
        categories: 'American (Traditional)',
        review_count: 1536,
        price: '$$'
      },
      {
        name: 'Breakfast World',
        street: '27330 University Ave',
        city: 'San Diego',
        state: 'CA',
        phone: '+16196420299',
        rating: 3,
        image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/bi2QeQyCdUmC42BKDisGJw/o.jpg',
        categories: 'American (Traditional)',
        review_count: 15236,
        price: '$$$'
      }
    ],
    this.newPlace = {}
  }

  getPlaces(){
    return this.places
  }

  getNewPlace(){
    return this.newPlace
  }

  updateNewPlace(attributes){
    this.newPlace = attributes
    this.places.push(attributes)
    this.emit('change')
  }

  updatePlaces(attributes){
    this.places = attributes
    this.emit('change')
  }

  handleActions(action){
    switch(action.type){
      case("FETCH_PLACES"):{
        this.updatePlaces(action.places)
        break
      }
      default:{}
    }
  }

}

const pstore = new PlaceStore()
dispatcher.register(pstore.handleActions.bind(pstore))
window.pstore = pstore
export default pstore
