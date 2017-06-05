import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import logo from './logo.svg';

import './App.css';
import UserSignUp from './components/UserSignUp';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import userStore from './stores/UserStore';
// import { addUser } from './actions';


class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Router>
          <Header />
          <div>
            <div>
              <Link to='/signup'>Sign Up</Link>
            </div>
            <Route exact path='/signup' component={UserSignUp}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
