import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import MessageBoard from '../components/MessageBoard';
import userStore from '../stores/UserStore';
import {fetchMessages} from '../actions';
// import {fetchEvents} from '../actions';

class Home extends Component {
  constructor(props){
    super(props);
    fetchMessages();
    // fetchEvents();
  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
              <h1>Welcome</h1>
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
