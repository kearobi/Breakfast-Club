import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import EditIcon from './Icons';

class UserListing extends Component {
  render(){
  return(
    <div>
      <table className="center">
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
          <th>Neighborhood</th>
          <th>Password</th>
          <th className="table_icons"></th>
        </tr>
  {/* this is where we'll need to connect to the DB */}
        <tr>
          <td>{this.props.user.id}</td>
          <td>{this.props.user.firstName}</td>
          <td>{this.props.user.lastName}</td>
          <td>{this.props.user.email}</td>
          <td>{this.props.user.neighborhood}</td>
          <td>{this.props.user.password}</td>
          <td className="table_icons"><EditIcon /></td>
        </tr>
      </table>
    </div>
    );
  }
}
export default UserListing;
