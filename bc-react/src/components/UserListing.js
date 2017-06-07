import React, { Component } from 'react';

class UserListing extends Component {
  render(){
    return(
        <div className="list col-xs-3">
          <tr>
            <td>{this.props.user.firstName}</td>
            <td>{this.props.user.lastName}</td>
            <td>{this.props.user.email}</td>
            <td>{this.props.user.neighborhood}</td>
            <td>{this.props.user.password}</td>
          </tr>
        </div>
    )}}

export default UserListing;
