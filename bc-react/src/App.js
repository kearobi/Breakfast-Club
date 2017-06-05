import React, { Component } from 'react';
import './App.css';
import UserSignUp from './components/UserSignUp';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AdminView from './components/admin_view';
// import userStore from './stores/UserStore';
// import { addUser } from './actions';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Router>
          <div>
            <Route exact path='/signup' component={UserSignUp}></Route>
            <Route exact path='/admin' component={AdminView}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
