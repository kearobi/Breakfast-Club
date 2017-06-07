import React, { Component } from 'react';
import UserListing from './UserListing'
import AdminStore from '../stores/AdminStore'
import { updateUsers } from '../actions.js';

class UserIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: AdminStore.getUsers()
    }
//we're telling it to go to the db and get the users; i'm going to render for now, and once you're done, reload all the users for me. UserIndex is asking the action store to update with all the users
//when user index shoes up, it says hey i need a fresh batch of users here
    updateUsers()
  }

  handleUpdateUsers(){
    this.setState({
      users: AdminStore.getUsers()
    })}

  componentWillMount(){
    AdminStore.on('change', this.handleUpdateUsers.bind(this))}

  renderUsers(){
    let userRender = []
    for(var i=0; i<this.state.users.length; i++){
      let userId = "user-" + i
      userRender.push(
        <UserListing key={userId} user={this.state.users[i]} />
      )
    }
    return userRender
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}
export default UserIndex;
