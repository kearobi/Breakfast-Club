//AdminPlaces gets props from AdminPage and passes props to AdminTable, SearchBar, AdminModal

import React, {Component} from 'react';
import SearchBar from './AdminSearchBar';
import AdminModal from './AdminModal';
import AdminTable from './AdminTable';
import adminStore from '../../stores/AdminStore';
//once you make the component generic, you move the parts that are different out to the parent and pass them in as props
//const api
//only the most parent component should be responsible for fetching data

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

class AdminPlaces extends Component {
  constructor(props){
    super(props)
    this.state = {places: this.props.places,
                  displayModal: false}
  }
  adminReturnPlaces(){
    this.setState({places: this.props.places})}

  componentWillMount(){
    adminStore.on('change', this.adminReturnPlaces.bind(this)) }

  displayModal(){
    this.setState({displayModal: true})}

  placeParams(){
    return(
      { place: {
          name: "",
          yelp_rating: "",
          categories: "",
          price: "",
          address_street: "",
          phone: ""
      }})
  }

  modalAdmin(){
    if(this.state.displayModal === true){
    return (<AdminModal placeForm={true} startingState={this.placeParams()}/>)
    } else { return ("") }}

  render(){
    return(
      <div id="admin_container">
        <h3 className='center'>Places</h3>
        <div id="search_bar_wrapper">
          <button className="add_button" type="button"
            onClick={this.displayModal.bind(this)}>
            + place </button>
          {/* now SearchBar has access to places */}
          <SearchBar places={this.props.places} placeSearchBar={true}/>
        </div>
          <br></br><br></br>
          <AdminTable placeList={true}/>
          {this.modalAdmin()}
      </div>
      );
    }
  }
export default AdminPlaces;
