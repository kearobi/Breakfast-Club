//AdminUsers gets props from AdminPage and passes props to AdminTable, SearchBar, AdminModal

import React, {Component} from 'react';
import SearchBar from './AdminSearchBar';
import AdminModal from './AdminModal';
import AdminTable from './AdminTable';
import adminStore from '../../stores/AdminStore';
//only the most parent component should be responsible for fetching data. Does that mean I should be fetching the data in AdminPage?

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

class AdminUsers extends Component {
  constructor(props){
    super(props)
    this.state = {users: this.props.users}
  }

  adminReturnUsers(){
    this.setState({users: this.props.users})}

  componentWillMount(){
    adminStore.on('change',
    this.adminReturnUsers.bind(this)) }
//work on this
  displayModal(){
    return (<div> <AdminModal userForm={true} startingState={this.userParams()} /> </div>)}

  userParams(){
    return(
      { user: {
            firstName: "",
            lastName: "",
            email: "",
            neighborhood: "",
            password: "",
            verifyPassword: ""}})}

  render(){
    return(
      <div id="admin_container">
        <h3 className='center'>Users</h3>
        <div id="search_bar_wrapper">
          <button className="add_button" type="button"
            onClick={this.displayModal.bind(this)}>
            + user </button>
          <SearchBar users={this.props.users} userSearchBar={true}/>
        </div>
          <br></br><br></br>
          <AdminTable userList={true} />
      </div>
      );
    }
  }
export default AdminUsers;
