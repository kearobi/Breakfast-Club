import React, { Component } from 'react';
import AdminIcons from './AdminIcons';

class PlaceListing extends Component {
  render(){
    return(
        <tr>
          <td>{this.props.place.name}</td>
          <td>{this.props.place.rating}</td>
          <td>{this.props.place.review_count}</td>
          <td>{this.props.place.price}</td>
          <td>{this.props.place.street}</td>
          <td>{this.props.place.phone}</td>
          <td id="icon_td"><AdminIcons /></td>
      </tr>
    )
  }
}

export default PlaceListing;
