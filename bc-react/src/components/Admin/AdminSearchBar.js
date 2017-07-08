//SearchBar gets props from AdminUsers, AdminPlaces, AdminEvents
//SearchBar passes props to AdminTable
import React, {Component} from 'react';
import AdminTable from './AdminTable';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = { searchTerm: '' }
  }

updateSearch(event){
  this.setState({searchTerm: event.target.value})}

userHeader(){
  return (
      <div className="header">
        <div className="admin-th">ID</div>
        <div className="admin-th">First Name</div>
        <div className="admin-th">Last Name</div>
        <div className="admin-th">Email Address</div>
        <div className="admin-th">Neighborhood</div>
        <div className="admin-th">Active</div>
      </div>
  )
}

placeHeader(){
  return(
      <div className="header">
        <div className="admin-th">Name</div>
        <div className="admin-th">Yelp Rating</div>
        <div className="admin-th">Category</div>
        <div className="admin-th">Price</div>
        <div className="admin-th">Steet Address</div>
        <div className="admin-th">Phone</div>
      </div>
  )}

eventHeader(){
  return(
      <div className="header">
        <div className="admin-th">Date</div>
        <div className="admin-th">Place</div>
        <div className="admin-th">Neighborhood</div>
        <div className="admin-th">Guest Speaker</div>
        <div className="admin-th">RSVP</div>
      </div>
  )}

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
            (user.neighborhood.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
            (user.active.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1)
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
    } else if (this.props.eventSearchBar){
      header = this.eventHeader()
      //this is where the date parser should probably happen
      filtered = this.props.events.filter(
        (event) => {
          return (
            (event.date.indexOf(this.state.searchTerm.toLowerCase()) !== -1)
            // ||
            // (event.place.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1)
            // || (event.neighborhood.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
            // (event.guest_speaker.indexOf(this.state.searchTerm) !== -1) ||
            // (event.rsvp.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
          )
        })
      mappedFilter = filtered.map((event)=>{
        return <AdminTable event={event} key={event.id} eventTable={true} />})
    }else {
      return (<div></div>)
    }

    return (
      <div>
        <input
          id='search-bar'
          size='72'
          type='search'
          placeholder='Search'
          value={this.state.searchTerm}
          onChange={this.updateSearch.bind(this)}
        />
        <br></br><br></br>
        <div className="admin-table">
            {header}
            {mappedFilter}
        </div>
      </div>
    )}}

export default SearchBar;
