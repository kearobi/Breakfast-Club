import React, { Component } from 'react';
import AdminPlaceListing from './AdminPlaceListing';
import placeStore from '../../stores/PlaceStore';
import { updatePlaces } from '../../actions.js';
import AdminUserListing from './AdminUserListing';
import adminStore from '../../stores/AdminStore';
import { updateUsers } from '../../actions.js';

class AdminIndex extends Component {
  constructor(props){
    super(props)
    this.state = this.props.startingState
    //for users, this is users: adminStore.getUsers()
    //we're telling it to go to the db and get the users; i'm going to render for now, and once you're done, reload all the users for me. UserIndex is asking the action store to update with all the users
    //when user index shoes up, it says hey i need a fresh batch of users here
    updatePlaces()
    updateUsers()
  }

//wait... but this is the initial state. hmmmmmmm
  handleUpdate(){
    if(this.props.placeIndex){
    this.setState({places: placeStore.getPlaces()})
    }else if(this.props.userIndex){
    this.setState({users: adminStore.getUsers()})
    }
  }

  componentWillMount(){
    if(this.props.placeIndex){
    placeStore.on('change', this.handleUpdate.bind(this))
    }else if(this.props.userIndex){
    adminStore.on('change', this.handleUpdate.bind(this))}
  }

  renderList(){
    let listRender = []
    if(this.props.placeIndex){
    for(var i=0; i<this.state.places.length; i++){
      let placeId = "place-" + i
      listRender.push(
        <AdminPlaceListing key={placeId} place={this.state.places[i]} />)}
    return listRender
    }else if(this.props.userIndex){
      for(var i=0; i<this.state.users.length; i++){
        let userId = "user-" + i
        listRender.push(
          <AdminUserListing key={userId} user={this.state.users[i]} />
        )
      }
      return listRender
    }
  }

  render(){
    return(<div></div>)
  }
}
export default AdminIndex;
