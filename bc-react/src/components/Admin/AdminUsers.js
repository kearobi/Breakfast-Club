import React, {Component} from 'react';
import AdminList from './AdminList';
import SearchBar from './AdminSearchBar';
import adminStore from '../../stores/AdminStore';
import AdminModal from './AdminModal';
//const api
//only the most parent component should be responsible for fetching data

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

class AdminUsers extends Component {
  constructor(props){
    super(props)
    this.state = {users: adminStore.getUsers(),
                  displayModal: false}
  }
  updateUsers(){
    this.setState({
      users: adminStore.getUsers() })}

  componentWillMount(){
    adminStore.on('change', this.updateUsers.bind(this)) }

  showUserList(){
    value: this.state.value }

  displayModal(){
    this.setState({displayModal: true})}

  userParams(){
    return(
      { user: {
            firstName: "",
            lastName: "",
            email: "",
            neighborhood: "",
            password: "",
            verifyPassword: ""
    }})
  }

  userListParams(){
    return({users: adminStore.getUsers()})
  }

  modalAdmin(){
    if(this.state.displayModal === true){
    return (<AdminModal userForm={true} startingState={this.userParams()} />)
    } else { return ("") }}

  render(){
    return(
      <div id="admin_container">
        <h3 className='center'>Users</h3>
        <div id="search_bar_wrapper">
          <button className="add_button" type="button"
            onClick={this.displayModal.bind(this)}>
            + user </button>
          {/* now SearchBar has access to users */}
          <SearchBar users={this.state.users} userSearchBar={true}/>
        </div>
          <br></br><br></br>
          <AdminList userList={true} startingState={this.userListParams()}/>
          {this.modalAdmin()}
      </div>
      );
    }
  }
export default AdminUsers;
