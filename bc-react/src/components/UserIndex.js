import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserListing from './UserListing';

class UserIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [
        // two test users
        {
          firstName: "Gabe",
          lastName: "Giestas",
          email: "brazilgabe@gmail.com",
          neighborhood: "Mission Valley",
          password: "confuzao",
        },
        {
          firstName: "Neaton",
          lastName: "Nobinson",
          email: "neanobie@gmail.com",
          neighborhood: "Nescondido",
          password: "nellonorld",
        }
      ]
    }
  }
  componentWillMount(){
    let userIndexState = this;
    const params = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }
    fetch("http://localhost:4000/admin", params).then(function(response){
      if(response.status === 200){
        response.json().then(function(body){
          userIndexState.setState({
            users: body.users
          })
        })
      }
    }).catch(function(error){
      userIndexState.setState({
        message: `there was an error: ${error.message}`
      })
    })
  }
  renderUsers(){
    let userRender = []
    for(var i=0; i<this.state.users.length; i++){
      let userKey = `user${i}`
      userRender.push(<tr>
        <UserListing key={userKey}
        user={this.state.users[i]}></UserListing>
      </tr>
      )
    }
    return userRender

  }

    render(){
      return(
        <tr>
          {this.renderUsers()}
        </tr>
      );
    }
}

export default UserIndex;
