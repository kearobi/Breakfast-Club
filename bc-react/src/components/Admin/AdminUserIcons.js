import React, { Component } from 'react';
import AdminUserEdit from './AdminUserEdit';
import AdminUserDelete from './AdminUserDelete';

class AdminUserIcons extends Component {
  render(){
    return (
      <div>
        <AdminUserEdit user={this.props.user}/>
        <AdminUserDelete user={this.props.user}/>
      </div>
    )}
  };

export default AdminUserIcons;

//the user is now here in this.props.user, so we want to hand it into the delete user
