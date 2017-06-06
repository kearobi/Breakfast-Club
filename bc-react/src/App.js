import React, { Component } from 'react';
import Header from './components/Header'
import './style/App.css';
import UserSignUp from './routes/UserSignUp';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import userStore from './stores/UserStore';
// import { addUser } from './actions';


class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Router>
          <div>
            <Header />
          <div>
          <div>
            <Link to='/signup'>Sign Up</Link>
          </div>
            <Route exact path='/signup' component={UserSignUp}></Route>
          </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
