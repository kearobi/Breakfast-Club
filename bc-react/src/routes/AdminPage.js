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
      places: adminStore.adminGetPlaces(),
      users: adminStore.adminGetUsers(),
      displayUsers: false,
      displayPlaces: false,
      displayEvents: false
    }
  }
  //the admin store deletes a user, it yells 'ive changed!' to everyone who's listening, and when it does that it calls updateUsers. (we told componentwillmount to issue this whenever there's a change)
  adminUpdate(){
    this.setState({
      users: adminStore.adminGetUsers(),
      places: adminStore.adminGetPlaces()
    })
  }

  componentWillMount(){
    adminStore.on('change', this.adminUpdate.bind(this))
  }

  showUserList(){ value: this.state.value }
  showPlaceList(){ value: this.state.value }

  displayUsers(){
    this.setState({displayUsers: true})
    this.setState({displayEvents: false})
    this.setState({displayPlaces: false})
  }
  displayEvents(){
    this.setState({displayUsers: false})
    this.setState({displayEvents: true})
    this.setState({displayPlaces: false})
  }
  displayPlaces(){
    this.setState({displayUsers: false})
    this.setState({displayEvents: false})
    this.setState({displayPlaces: true})
  }

  pageAdmin(){
    if(this.state.displayUsers){
      return (<AdminUsers />)
    }else if (this.state.displayPlaces){
      return (<AdminPlaces />)
    }else if (this.state.displayEvents){
      return (<AdminEvents />)}}


  render(){
    return(
      <div id="admin_container">
        <h3>hello there, admin</h3>
        <br></br>
        <div id="admin_button_wrapper">
          <button
            className="admin_button"
            type="button"
            onClick={this.displayPlaces.bind(this)}>
          manage places</button>
          <button
            className="admin_button"
            type="button"
            onClick={this.displayUsers.bind(this)}>
          manage users</button>
          <button
            className="admin_button"
            type="button"
            onClick={this.displayEvents.bind(this)}>
            manage events</button>
        </div>
        <br></br><br></br><br></br>
          {this.pageAdmin()}
      </div>
      );
    }
  }
export default AdminPage;
