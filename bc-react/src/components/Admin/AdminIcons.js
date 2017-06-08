import React, { Component } from 'react';
import AdminDeleteUser from '../AdminDeleteUser';

class AdminIcons extends Component {
  render(){
    return (
      <div>
        <img id="edit_icon" src="http://megaicons.net/static/img/icons_sizes/8/178/512/editing-edit-icon.png" alt="edit"/>
        <AdminDeleteUser user={this.props.user}/>
      </div>
    )}
  };

export default AdminIcons;

//the user is now here in this.props.user, so we want to hand it into the delete user
