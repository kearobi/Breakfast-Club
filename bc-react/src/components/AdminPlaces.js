import React, {Component} from 'react';
import AdminPlaceIndex from './AdminPlaceIndex';
import AdminPlaceSearchBar from './Admin/AdminPlaceSearchBar';
import PlaceStore from '../stores/PlaceStore';
import AdminPlaceModal from './AdminPlaceModal';
// import AdminPlaceModal from '../components/AdminPlaceModal';
//const api
//only the most parent component should be responsible for fetching data

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

class AdminPlaces extends Component {
  constructor(props){
    super(props)
    this.state = {places: PlaceStore.getPlaces(),
                  displayModal: false}
  }
  updatePlaces(){
    this.setState({
      places: PlaceStore.getPlaces() })}

  componentWillMount(){
    PlaceStore.on('change', this.updatePlaces.bind(this)) }

  showPlaceList(){
    value: this.state.value }

  displayModal(){
    this.setState({displayModal: true})}

  modalAdmin(){
    if(this.state.displayModal === true){
    return (<AdminPlaceModal />)
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
          <AdminPlaceSearchBar places={this.state.places}/>
        </div>
          <br></br><br></br>
          <AdminPlaceIndex />
          {this.modalAdmin()}
      </div>
      );
    }
  }
export default AdminPlaces;
