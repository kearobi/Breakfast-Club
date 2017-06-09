import React, { Component } from 'react';
import AdminPlaceListing from './AdminPlaceListing';

class AdminPlaceSearchBar extends Component {
  constructor(props){
    super(props)
    this.state = { searchTerm: '' }
  }

  updateSearch(event){
    this.setState({searchTerm: event.target.value})
  }

  render() {
    let filteredPlaces = this.props.places.filter(
      (place) => {
        return (
          (place.name.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
          (place.yelp_rating.toString().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
          (place.categories.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
          (place.price.indexOf(this.state.searchTerm) !== -1) ||
          (place.address_street.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
          (place.phone.toString().indexOf(this.state.searchTerm.toLowerCase()) !== -1)
        )
      })

    return (
      <div>
        <input
          size='70'
          type='search'
          placeholder='Search'
          value={this.state.searchTerm}
          onChange={this.updateSearch.bind(this)}
        />
        <br></br><br></br>
        <table id='admin-place-table'>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Yelp Rating</th>
              <th>Category</th>
              <th>Price</th>
              <th>Steet Address</th>
              <th>Phone</th>
              <th className="invisible">..........</th>
            </tr>
          {filteredPlaces.map((place)=>{
              return <AdminPlaceListing place={place} key={place.id} />})}
          </tbody>
        </table>
      </div>
    )}}

export default AdminPlaceSearchBar;
