import React, { Component } from 'react';
import Icons from './Icons'

class UserListing extends Component {
  render(){
    return(
        <tr>
            <td>{this.props.user.firstName}</td>
            <td>{this.props.user.lastName}</td>
            <td>{this.props.user.email}</td>
            <td>{this.props.user.neighborhood}</td>
            <td>{this.props.user.encryptedPassword}</td>
            <td id="icon_td"><Icons /></td>
        </tr>
    )}}

export default UserListing;
