//AdminPage imports AdminUsers, AdminPlaces, AdminEvents but does not pass props

import React, {Component} from 'react';
import AdminUsers from '../components/Admin/AdminUsers';
import AdminPlaces from '../components/Admin/AdminPlaces';
import AdminEvents from '../components/Admin/AdminEvents';
import adminStore from '../stores/AdminStore';

//const api
//only the most parent component should be responsible for fetching data

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

class AdminPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: adminStore.adminReturnUsers(),
      places: adminStore.adminReturnPlaces(),
      events: adminStore.adminReturnEvents(),
      userButton: "admin_button",
      placeButton: "admin_button",
      eventButton: "admin_button"
    }
  }
  //the admin store deletes a user, it yells 'ive changed!' to everyone who's listening, and when it does that it calls updateUsers. (we told componentwillmount to issue this whenever there's a change)
  adminUpdate(){
    if(this.state.userButton === "admin_button_clicked"){
      this.setState({users: adminStore.adminReturnUsers()})
    }
    else if (this.state.placeButton === "admin_button_clicked"){
      this.setState({places: adminStore.adminReturnPlaces()})
    }
    else if (this.state.placeButton === "admin_button_clicked"){
      this.setState({events: adminStore.adminReturnEvents()})
      //something's wrong here. didnt even hti console log
      console.log("events: ", this.state.events)}
  }

  componentWillMount(){
    adminStore.on('change', this.adminUpdate.bind(this))}

  handleUserClick(){
    this.setState({
      userButton: "admin_button_clicked",
      eventButton: "admin_button",
      placeButton: "admin_button"
    })}
  handleEventClick(){
    this.setState({
      eventButton: "admin_button_clicked",
      userButton: "admin_button",
      placeButton: "admin_button"
    })}
  handlePlaceClick(){
    this.setState({
      placeButton: "admin_button_clicked",
      userButton: "admin_button",
      eventButton: "admin_button"
    })}

  pageAdmin(){
    if(this.state.userButton === "admin_button_clicked"){
      return (<AdminUsers />)
    }else if (this.state.placeButton === "admin_button_clicked"){
      return (<AdminPlaces />)
    }else if (this.state.eventButton === "admin_button_clicked"){
      return (<AdminEvents />)}}


  render(){
    return(
      <div id="admin_container">
        <h3>hello there, admin</h3>
        <br></br>
        <div id="admin_button_wrapper">
          <button
            className={this.state.placeButton}
            type="button"
            onMouseOver={this.handlePlaceClick.bind(this)}>
          manage places</button>
          <button
            className={this.state.userButton}
            type="button"
            onMouseOver={this.handleUserClick.bind(this)}>
          manage users</button>
          <button
            className={this.state.eventButton}
            type="button"
            onMouseOver={this.handleEventClick.bind(this)}>
            manage events</button>
        </div>
        <br></br><br></br><br></br>
          {this.pageAdmin()}
      </div>
      );
    }
  }
export default AdminPage;
