import React, {Component} from 'react';
import AdminTable from './AdminTable';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = { searchTerm: '' }
  }

updateSearch(event){
  this.setState({searchTerm: event.target.value})
}

userHeader(){
  return (
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email Address</th>
        <th>Neighborhood</th>
        <th>Password</th>
        <th className="invisible">..........</th>
      </tr>
  )
}

placeHeader(){
  return(
      <tr>
        <th>Name</th>
        <th>Yelp Rating</th>
        <th>Category</th>
        <th>Price</th>
        <th>Steet Address</th>
        <th>Phone</th>
        <th className="invisible">..........</th>
      </tr>
  )
}

eventHeader(){
  return(
      <tr>
        <th>Date</th>
        <th>Place</th>
        <th>Neighborhood</th>
        <th>Guest Speaker</th>
        <th>RSVP</th>
        <th className="invisible">..........</th>
      </tr>
  )
}

//the filter is a loop that takes a function (we're just using the fat arrow syntax). The parameter(user) gets filled in with each individual item in the array. If it returns true, then that user gets put in the output set, if it returns false, it gets skipped
  render() {

    let header;
    let filtered;
    let mappedFilter;

    if(this.props.userSearchBar){
      header = this.userHeader()
      filtered = this.props.users.filter(
        (user) => {
          return (
            (user.firstName.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
            (user.lastName.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
            (user.email.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
            (user.neighborhood.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1)
          )
        })
      mappedFilter = filtered.map((user)=>{
        return <AdminTable user={user} key={user.id} userTable={true} />})
    } else if (this.props.placeSearchBar){
      header = this.placeHeader()
      filtered = this.props.places.filter(
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
      mappedFilter = filtered.map((place)=>{
        return <AdminTable place={place} key={place.id} placeTable={true} />})
    }

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
        <table>
          <tbody>
            {header}
            {mappedFilter}
          </tbody>
        </table>
      </div>
    )}}

export default SearchBar;
