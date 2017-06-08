import React, {Component} from 'react';
import AdminUserIndex from './AdminUserIndex';
import AdminUserSearchBar from './Admin/AdminUserSearchBar';
import AdminStore from '../stores/AdminStore';
import AdminUserModal from './AdminUserModal';
//const api
//only the most parent component should be responsible for fetching data

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

class AdminUsers extends Component {
  constructor(props){
    super(props)
    this.state = {users: AdminStore.getUsers(),
                  displayModal: false}
  }
  updateUsers(){
    this.setState({
      users: AdminStore.getUsers() })}

  componentWillMount(){
    AdminStore.on('change', this.updateUsers.bind(this)) }

  showUserList(){
    value: this.state.value }

  displayModal(){
    this.setState({displayModal: true})}

  modalAdmin(){
    if(this.state.displayModal === true){
    return (<AdminUserModal />)
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
          <AdminUserSearchBar users={this.state.users}/>
        </div>
          <br></br><br></br>
          <AdminUserIndex />
          {this.modalAdmin()}
      </div>
      );
    }
  }
export default AdminUsers;
