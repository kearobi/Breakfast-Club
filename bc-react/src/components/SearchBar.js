import React, { Component } from 'react';
import UserListing from './UserListing';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = { searchTerm: '' }
  }

  updateSearch(event){
    this.setState({searchTerm: event.target.value})
  }

  render() {
    let filteredUsers = this.props.users.filter(
      (user) => {
        return user.firstName.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1;
      }
    )

    return (
      <div>
        <input
          size='63'
          type='search'
          placeholder='Search'
          value={this.state.searchTerm}
          onChange={this.updateSearch.bind(this)}
        />
        <ul>
          {filteredUsers.map((user)=>{
              return <UserListing user={user} key={user.id} />})}
        </ul>
      </div>
    )}}

export default SearchBar;
