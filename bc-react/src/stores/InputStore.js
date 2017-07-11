class InputStore {
  constructor(){
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      neighborhood: '',
      password:'',
      verifyPassword: ''
    }
    this.errors = []
  }

  getFields(){
    return this.fields
  }

  getErrors(){
    return this.errors
  }

  validate(){
    this.errors = {}
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePresence('neighborhood')
    this.validatePresence('password')
    this.validatePassword('verifyPassword')
    this.validateEmail('email')
  }

  validatePassword(fieldName){
    if(this.fields[fieldName] !== this.fields.password){
      this.addError(fieldName, 'verify password')
    }
  }

  validatePresence(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'required field')
    }
  }


  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'invalid email address')
    }
  }

  addError(fieldName, message){
    this.errors[fieldName] = message
  }
}


const store = new InputStore()
export default store
