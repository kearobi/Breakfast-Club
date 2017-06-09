import React, { Component } from 'react';
// import AdminIcons from './AdminIcons';
// import AdminDeleteUser from './AdminDeleteUser';

class PlaceListing extends Component {
  render(){
    return(
        <tr>
          <td>{this.props.place.name}</td>
          <td>{this.props.place.yelp_rating}</td>
          <td>{this.props.place.categories}</td>
          <td>{this.props.place.price}</td>
          <td>{this.props.place.address_street}</td>
          <td>{this.props.place.phone}</td>
          {/* <td id="icon_td"><AdminIcons /><AdminDeleteUser /></td> */}
      </tr>
    )
  }
}

export default PlaceListing;
