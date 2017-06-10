import React, { Component } from 'react';
import AdminTable from './AdminTable';
import placeStore from '../../stores/PlaceStore';
import { updatePlaces } from '../../actions.js';
import adminStore from '../../stores/AdminStore';
import { updateUsers } from '../../actions.js';

class AdminList extends Component {
  constructor(props){
    super(props)
    this.state = this.props.startingState
    //for users, this is users: adminStore.getUsers()
    //we're telling it to go to the db and get the users; i'm going to render for now, and once you're done, reload all the users for me. UserList is asking the action store to update with all the users
    //when user list shoes up, it says hey i need a fresh batch of users here
    updatePlaces()
    updateUsers()
  }

//wait... but this is the initial state. hmmmmmmm
  handleUpdate(){
    if(this.props.placeList){
    this.setState({places: placeStore.getPlaces()})
  }else if(this.props.userList){
    this.setState({users: adminStore.getUsers()})
    }
  }

  componentWillMount(){
    if(this.props.placeList){
    placeStore.on('change', this.handleUpdate.bind(this))
    }else if(this.props.userList){
    adminStore.on('change', this.handleUpdate.bind(this))}
  }

  renderList(){

    let listRender;

    if(this.props.placeList){
      listRender = []
    for(var i=0; i<this.state.places.length; i++){
      let placeId = "place-" + i
      listRender.push(
        <AdminTable key={placeId} place={this.state.places[i]} placeTable={true}/>)}
    return listRender}

    else if(this.props.userList){
      listRender = []
      for(var i=0; i<this.state.users.length; i++){
        let userId = "user-" + i
        listRender.push(
          <AdminTable key={userId} user={this.state.users[i]} userTable={true}/>)}
    return listRender}
  }

  render(){
    return(<div></div>)
  }
}
export default AdminList;
