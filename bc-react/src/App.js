import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserSignUp from './routes/UserSignUp';
import UserLogin from './routes/UserLogin';
import SplashPage from './routes/SplashPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={SplashPage} />
          <Route path='/signup' component={UserSignUp} />
          <Route path='/login' component={UserLogin} />
        </div>
      </Router>
    );
  }
}

export default App;
