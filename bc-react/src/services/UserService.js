//this will be fired off from our UserStore when the store is ready to send its information back to the server
import {updateUser} from '../actions/UserActions';

class UserService {
  submitRegistration(attributes){

    updateUser(attributes)
  }
}

const userService = new UserService;
export default userService;
