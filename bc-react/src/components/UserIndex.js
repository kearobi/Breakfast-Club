import React, { Component } from 'react';
import UserListing from './UserListing'
import AdminStore from '../stores/AdminStore'

class UserIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: AdminStore.getUsers()
    }
  }

  updateUsers(){
    this.setState({
      users: AdminStore.getUsers()
    })
  }

  componentWillMount(){
    AdminStore.on('change', this.updateUsers.bind(this))
  }

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
          <div className="place-list row">
          {this.renderUsers()}
        </div>
      </div>
    )
  }
}
export default UserIndex;
