//AdminList gets props from AdminUsers, AdminPlaces, AdminEvents
//AdminList passes props to AdminTable
import React, { Component } from 'react';
import AdminTable from './AdminTable';
import adminStore from '../../stores/AdminStore';
import { adminLoadUsers } from '../../actions.js';
import { adminLoadPlaces } from '../../actions.js';
import { adminLoadEvents } from '../../actions.js';

class AdminList extends Component {
  constructor(props){
    super(props)
    this.state = this.props.startingState
    //for users, this is users: adminStore.getUsers()
    //we're telling it to go to the db and get the users; i'm going to render for now, and once you're done, reload all the users for me. UserList is asking the action store to update with all the users
    //when user list shoes up, it says hey i need a fresh batch of users here
    adminLoadUsers()
    adminLoadPlaces()
    adminLoadEvents()
  }

//wait... but this is the initial state. hmmmmmmm... and this never gets called
  handleUpdate(){
    if(this.props.placeList){
    this.setState({places: adminStore.adminReturnPlaces()})
  }else if(this.props.userList){
    this.setState({users: adminStore.adminReturnUsers()})
  }else if(this.props.eventList){
    this.setState({events: adminStore.adminReturnEvents()})}
  }

  componentWillMount(){
    adminStore.on('change', this.handleUpdate.bind(this))
  }

  renderList(){

    let listRender;
    let i;
    if(this.props.placeList){
      listRender = []
    for(i=0; i<this.state.places.length; i++){
      let placeId = "place-" + i
      listRender.push(
        <AdminTable key={placeId} place={this.state.places[i]} placeTable={true}/>)}
    return listRender}

    else if(this.props.userList){
      listRender = []
      for(i=0; i<this.state.users.length; i++){
        let userId = "user-" + i
        listRender.push(
          <AdminTable key={userId} user={this.state.users[i]} userTable={true}/>)}
    return listRender}

    else if(this.props.eventList){
      listRender = []
      for(i=0; i<this.state.events.length; i++){
        let eventId = "event-" + i
        listRender.push(
          <AdminTable key={eventId} event={this.state.events[i]} eventTable={true}/>)}
    return listRender}
  }

  render(){
    return(<div></div>)
  }
}
export default AdminList;
