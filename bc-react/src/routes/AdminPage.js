import React, {Component} from 'react';
import UserIndex from '../components/UserIndex';
import SearchBar from '../components/SearchBar';
import AdminStore from '../stores/AdminStore';
import AdminUsers from '../components/AdminUsers';
//const api
//only the most parent component should be responsible for fetching data

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

class AdminPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: AdminStore.getUsers(),
      displayUsers: false,
      displayPlaces: false,
      displayEvents: false    }
  }
  updateUsers(){
    this.setState({ users: AdminStore.getUsers() })}

  componentWillMount(){
    AdminStore.on('change', this.updateUsers.bind(this)) }

  showUserList(){ value: this.state.value }

  displayUsers(){
    this.setState({displayUsers: true})}
  displayEvents(){
    this.setState({displayEvents: true})}
  displayPlaces(){
    this.setState({displayPlaces: true})}

    userAdmin(){
      if(this.state.displayUsers === true){
        this.state.displayEvents = false;
        this.state.displayPlaces = false;
        //change color to green
        return (<AdminUsers />)
      }else{ return ("") }}
    // placeAdmin(){
    //   if(this.state.displayPlaces === true){
    //     this.state.displayUsers = false;
    //     this.state.displayEvents = false;
    //     return (< />)
    //   }else{ return ("") }}
    // eventAdmin(){
    //   if(this.state.displayEvents === true){
    //     this.state.displayUsers = false;
    //     this.state.displayPlaces = false;
    //     return (< />)
    //   }else{ return ("") }}

  render(){
    return(
      <div id="admin_container">
        <h3>hello there, admin</h3>
        <br></br>
        <div id="admin_button_wrapper">
          <button className="admin_button" type="button">manage places</button>
          <button className="admin_button" type="button"
          onClick={this.displayUsers.bind(this)}>
          manage users</button>
          <button className="admin_button" type="button">manage events</button>
        </div>
        <br></br><br></br><br></br>
          {this.userAdmin()}
      </div>
      );
    }
  }
export default AdminPage;
