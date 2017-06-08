import React, {Component} from 'react';
// import {deleteUser} from '../../actions.js';
class AdminUserEdit extends Component {

  handleClick(){
    // let response = confirm("Wait really?")
    //could also pass this.props.user, but we added id so we're only handing it the data it needs to get the job done
      // editUser(this.props.user.id)
  }

  render(){
    return(
        <img id="edit_icon"
            src="http://megaicons.net/static/img/icons_sizes/8/178/512/editing-edit-icon.png" alt="edit"
            onClick={this.handleClick.bind(this)}/>
          )
    }
}

export default AdminUserEdit;
