class InputStore {
  constructor(){
    this.userFields = {
      firstName:'',
      lastName:'',
      email:'',
      neighborhood: '',
      password:'',
      verifyPassword: ''
    }
    this.placeFields = {
      name: '',
      yelp_rating: '',
      categories: '',
      price: '',
      address_street: '',
      phone: ''
    }
    this.eventFields = {
      date: '',
      place: '',
      guest: ''
    }
    this.errors = []
  }

  getUserFields(){
    return this.userFields
  }

  getPlaceFields(){
    return this.placeFields
  }

  getEventFields(){
    return this.eventFields
  }

  getErrors(){
    return this.errors
  }
//TODO: ask how this component could be made more generic
  validateUser(){
    this.errors = {}
    this.validateUserPresence('firstName')
    this.validateUserPresence('lastName')
    this.validateUserPresence('neighborhood')
    this.validateUserPresence('password')
    this.validatePassword('verifyPassword')
    this.validateEmail('email')
  }

  validatePlace(){
    this.errors = {}
    this.validatePlacePresence('name')
    this.validatePlacePresence('yelp_rating')
    this.validatePlacePresence('categories')
    this.validatePlacePresence('price')
    this.validatePlacePresence('address_street')
    this.validatePlacePresence('phone')
  }

  validateEvent(){
    this.errors = {}
    this.validateEventPresence('date')
    this.validateEventPresence('place')
    this.validateEventPresence('guest')
  }

  validatePassword(fieldName){
    if(this.userFields[fieldName] !== this.userFields.password){
      this.addError(fieldName, 'verify password')
    }
  }

  validateUserPresence(fieldName){
    if(this.userFields[fieldName] === ''){
      this.addError(fieldName, 'required field')
    }
  }

  validatePlacePresence(fieldName){
    if(this.placeFields[fieldName] === ''){
      this.addError(fieldName, 'required field')
    }
  }

  validateEventPresence(fieldName){
    if(this.eventFields[fieldName] === ''){
      this.addError(fieldName, 'required field')
    }
  }

  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!filter.test(this.userFields[fieldName])){
      this.addError(fieldName, 'invalid email address')
    }
  }

  addError(fieldName, message){
    this.errors[fieldName] = message
  }
}


const store = new InputStore()
export default store
