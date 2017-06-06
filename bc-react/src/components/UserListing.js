import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import EditIcon from './Icons';

class UserListing extends Component {
  render(){
    return(
      <div>
        <tr>
            <td>{this.props.user.firstName}</td>
            <td>{this.props.user.lastName}</td>
            <td>{this.props.user.email}</td>
            <td>{this.props.user.neighborhood}</td>
            <td>{this.props.user.password}</td>
            <td className="table_icons"><EditIcon /></td>
          </tr>
      </div>
      );
    }
  }
export default UserListing;
