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
      <div className="table-row table-header">
        <div className="table-row-item firstName">First Name</div>
        <div className="table-row-item lastName">Last Name</div>
        <div className="table-row-item email">Email Address</div>
        <div className="table-row-item neighborhood">Neighborhood</div>
        <div className="table-row-item active">Active</div>
        <div className="table-row-item hidden"></div>
        <div className="table-row-item hidden"></div>
      </div>
  )
}

placeHeader(){
  return(
      <div className="table-row table-header">
        <div className="table-row-item name">Name</div>
        <div className="table-row-item yelp">Stars</div>
        <div className="table-row-item categories">Category</div>
        <div className="table-row-item price">Price</div>
        <div className="table-row-item street">Steet Address</div>
        <div className="table-row-item phone">Phone</div>
        <div className="table-row-item hidden"></div>
        <div className="table-row-item hidden"></div>
      </div>
  )}

eventHeader(){
  return(
      <div className="table-row table-header">
        <div className="table-row-item date">Date</div>
        <div className="table-row-item name">Place</div>
        <div className="table-row-item neighborhood">Neighborhood</div>
        <div className="table-row-item guest">Guest Speaker</div>
        <div className="table-row-item rsvp">RSVP</div>
        <div className="table-row-item hidden"></div>
        <div className="table-row-item hidden"></div>
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
            (user.active.toString().indexOf(this.state.searchTerm.toLowerCase()) !== -1)
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
            (event.date.indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
            (event.place.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1)
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
      <div className='search-bar-input'>
        <input
          id='search-bar'
          size='72'
          type='search'
          placeholder='Search'
          value={this.state.searchTerm}
          onChange={this.updateSearch.bind(this)}
        />
        <br></br><br></br>
        <div className="table">
            {header}
            {mappedFilter}
        </div>
      </div>
    )}}

export default SearchBar;
