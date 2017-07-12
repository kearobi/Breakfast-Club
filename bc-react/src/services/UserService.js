//this will be fired off from our UserStore when the store is ready to send its information back to the server
import {updateUser, registrationFail} from '../actions/UserActions';

let baseUrl;
if(process.env.NODE_ENV === 'production'){
  baseUrl = "/"
} else {
  baseUrl = "http://localhost:4000/"
}

class UserService {
  constructor(){
    // if(process.env.NODE_ENV === 'production'){
    //   this.baseUrl = "/"
    // } else {
    //   this.baseUrl = "http://localhost:4000/"
    // }
  }

  submitRegistration(attributes){
    const params = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
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
}

const userService = new UserService;
export default userService;
