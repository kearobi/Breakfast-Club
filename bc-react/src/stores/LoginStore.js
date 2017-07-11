class LoginStore {
  constructor(){
    this.fields = {
      email:'',
      password:'',
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
    this.validateEmail('email')
    this.validatePresence('password')
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

const loginStore = new LoginStore()
export default loginStore
