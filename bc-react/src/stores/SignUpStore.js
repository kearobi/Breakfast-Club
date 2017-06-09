class SignUpStore {
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
      this.addError(fieldName, 'Please verify your password')
    }
  }

  validatePresence(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
    }
  }


  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not an email')
    }
  }

  addError(fieldName, message){
    this.errors[fieldName] = message
  }
}


const store = new SignUpStore()
export default store
