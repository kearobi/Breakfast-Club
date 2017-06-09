import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import MessageBoard from '../components/MessageBoard';
import userStore from '../stores/UserStore';
import {fetchMessages} from '../actions';
import {checkLoginRedir} from '../actions'
// import {fetchEvents} from '../actions';

class Home extends Component {
  constructor(props){
  super(props)
  this.state = {
    user: userStore.getUser(),
    }
    fetchMessages();
    // fetchEvents();
  }

  componentWillMount(){
    userStore.on('logged-in',this.handleLogin.bind(this))
    checkLoginRedir(this.props)
  }

  handleLogin(){
  this.setState({
    user: userStore.getUser()
  })
}


  // componentWillUpdate(){
  //   checkLoginRedir(this.props)
  // }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
            </div>

            <div className="col-sm-4">
              <h1>Welcome, {userStore.getUser().firstName} </h1>
            </div>
            <div className="col-sm-4">
              <MessageBoard />
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default Home;
