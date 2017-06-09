import React, { Component } from 'react';
import AdminUserListing from './AdminUserListing';

class AdminUserSearchBar extends Component {
  constructor(props){
    super(props)
    this.state = { searchTerm: '' }
  }

  updateSearch(event){
    this.setState({searchTerm: event.target.value})
  }

//the filter is a loop that takes a function (we're just using the fat arrow syntax). The parameter(user) gets filled in with each individual item in the array. If it returns true, then that user gets put in the output set, if it returns false, it gets skipped
  render() {
    let filteredUsers = this.props.users.filter(
      (user) => {
        return (
          (user.firstName.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
          (user.lastName.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
          (user.email.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1) ||
          (user.neighborhood.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1)
        )
      })

    return (
      <div>
        <input
          size='70'
          type='search'
          placeholder='Search'
          value={this.state.searchTerm}
          onChange={this.updateSearch.bind(this)}
        />
        <br></br><br></br>
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Neighborhood</th>
              <th>Password</th>
              <th className="invisible">..........</th>
            </tr>
          {filteredUsers.map((user)=>{
              return <AdminUserListing user={user} key={user.id} />})}
          </tbody>
        </table>
      </div>
    )}}

export default AdminUserSearchBar;
