//this will be fired off from our UserStore when the store is ready to send its information back to the server
import {updateUser} from '../actions/UserActions';

class UserService {
  constructor(){
    if(process.env.NODE_ENV === 'production'){
      this.baseUrl = "/"
    } else {
      this.baseUrl = "http://localhost:4000/"
    }
  }

  submitRegistration(attributes){
    const params = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(attributes)
    }
    fetch(`${this.baseUrl}signup`, params).then((response)=>{
      if(response.ok){
        response.json().then((body)=>{
          console.log(body)
        })
      }else{
        console.log(response)
        }
      })
    setTimeout(()=>{
      updateUser(attributes)}, 1000)
  }
}

const userService = new UserService;
export default userService;
