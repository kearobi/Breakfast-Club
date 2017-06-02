import React, { Component } from 'react';
import './App.css';
import UserSignUp from './components/UserSignUp';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import userStore from './stores/UserStore';
// import { addUser } from './actions';


class App extends Component {
  render() {
    return (
      <div className="container App">
        <Router>
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
