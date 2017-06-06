import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CatListing extends Component {
  render(){
    return(
      <div className="col-xs-3">
        <ul>
          <li>
            {this.props.user.firstName}
          </li>
          <li>
            {this.props.user.lastName}
          </li>
          <li>
            {this.props.user.email}
          </li>
          <li>
            {this.props.user.neighborhood}
          </li>
          <li>
            {this.props.user.personality}
          </li>
          <li>
            {this.props.user.password}
          </li>
        </ul>
      </div>
    )
  }
}

export default UserListing;
