//AdminPlaces gets props from AdminPage and passes props to AdminTable, SearchBar, AdminModal

import React, {Component} from 'react';
import SearchBar from './AdminSearchBar';
import AdminModal from './AdminModal';
import AdminTable from './AdminTable';
import adminStore from '../../stores/AdminStore';
import {adminSeedPlaces} from '../../actions/AdminActions';

//once you make the component generic, you move the parts that are different out to the parent and pass them in as props
//const api
//only the most parent component should be responsible for fetching data

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

class AdminPlaces extends Component {
  constructor(props){
    super(props)
    this.state = {places: this.props.places,
                  className: "closeModal"}
  }
  adminReturnPlaces(){
    this.setState({places: this.props.places})}

  componentWillMount(){
    adminStore.on('change', this.adminReturnPlaces.bind(this)) }

  openModal(){
    this.setState({className: "openModal"})}

  closeModal(){
    this.setState({className: "closeModal"})}

  closeModalOnSubmit(modal){
    this.setState(modal)}

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

  seedPlaces() {
    console.log("AdminPlaces - Seeding Places...");
    adminSeedPlaces();
  }

  render(){
    return(
      <div className='admin-page'>
        <p>Places</p>
        <div className="search_bar_wrapper">
          <button className="add_button" type="button"
            onClick={this.openModal.bind(this)}>
            + place </button>
          <button className="seed_button" type="button"
            onClick={this.seedPlaces.bind(this)}>
            Seed Places </button>
          {/* now SearchBar has access to places */}
          <SearchBar places={this.props.places} placeSearchBar={true}/>
        </div>
          <br></br><br></br>
          <AdminTable placeList={true}/>
          <div className={this.state.className}>
            <span id='x' onClick={this.closeModal.bind(this)}>&times;</span>
              <AdminModal placeForm={true} startingState={this.placeParams()}  closeModal={this.closeModalOnSubmit.bind(this)}/>
          </div>
      </div>
      );
    }
  }
export default AdminPlaces;
