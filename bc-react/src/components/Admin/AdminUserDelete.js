import React, {Component} from 'react';
import {deleteUser} from '../../actions.js';

class AdminUserDelete extends Component {

  handleClick(){
    // let response = confirm("Wait really?")
    //could also pass this.props.user, but we added id so we're only handing it the data it needs to get the job done
      deleteUser(this.props.user.id)
  }

  render(){
    return(
        <img id="delete_icon"
            src="https://www.iconfinder.com/data/icons/google-material-design-icons/48/ic_delete_48px-128.png"
            alt="delete"
            onClick={this.handleClick.bind(this)}/>
          )
    }
}

export default AdminUserDelete;
