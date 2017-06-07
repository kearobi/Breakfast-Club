import React, { Component } from 'react';

class UserListing extends Component {
  render(){
    return(
        <tr>
            <td>{this.props.user.firstName}</td>
            <td>{this.props.user.lastName}</td>
            <td>{this.props.user.email}</td>
            <td>{this.props.user.neighborhood}</td>
            <td>{this.props.user.encryptedPassword}</td>
        </tr>
    )}}

export default UserListing;
