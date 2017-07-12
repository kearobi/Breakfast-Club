//this will be fired off from our UserStore when the store is ready to send its information back to the server
import {updateUser, registrationFail, loginFail} from '../actions/UserActions';

let baseUrl;
if(process.env.NODE_ENV === 'production'){
  baseUrl = "/"
} else {
  baseUrl = "http://localhost:4000/"
}

class UserService {
  constructor(){
    this.headers = {'Content-Type': 'application/json'}
  }

  submitRegistration(attributes){
    const params = {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(attributes)
    }
    fetch(`${baseUrl}signup`, params).then((response)=>{
      if(response.ok){
        response.json().then((body)=>{
          updateUser(body.user)
        })
      }else{
        response.json().then((body)=>{
          registrationFail(body.errors)
        })
      }
    })
  }

  submitLogin(attributes){
    const params = {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(attributes)
    }
    fetch(`${baseUrl}login`, params).then((response)=>{
      if(response.ok){
        response.json().then((body)=>{
          updateUser(body.user)
        })
      }else{
        loginFail()
      }
    })
  }
}

const userService = new UserService;
export default userService;
