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
    this.state = {users: this.props.users,
                  className: "closeModal"}
  }

    adminReturnUsers(){
      this.setState({users: this.props.users})}

    componentWillMount(){
      adminStore.on('change',
      this.adminReturnUsers.bind(this)) }

    openModal(){
      this.setState({className: "openModal"})}

    closeModal(){
      this.setState({className: "closeModal"})}

    closeModalOnSubmit(modal){
      this.setState(modal)}

    userParams(){
      return(
        { user: {
              id: "",
              firstName: "",
              lastName: "",
              email: "",
              neighborhood: "",
              password: "",
              verifyPassword: ""}})}

  render(){
    return(
      <div className='admin-page'>
        <p>Users</p>
        <div className="search_bar_wrapper">
          <button className="add_button" type="button"
            onClick={this.openModal.bind(this)}>
            + user </button>
          <SearchBar users={this.props.users} userSearchBar={true}/>
        </div>
          <br></br><br></br>
          <AdminTable userList={true} />
          <div className={this.state.className}>
            <span id='x' onClick={this.closeModal.bind(this)}>&times;</span>
              <AdminModal userForm={true} startingState={this.userParams()}  closeModal={this.closeModalOnSubmit.bind(this)}/>
          </div>
      </div>
      );
    }
  }
export default AdminUsers;
