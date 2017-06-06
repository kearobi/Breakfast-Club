import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserSignUp from './routes/UserSignUp';
import UserLogin from './routes/UserLogin';
import SplashPage from './routes/SplashPage';
import AdminPage from './routes/AdminPage';
import './style/app.css';

//only the most parent component should be responsible for fetching data, aka here

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Router>
            <div>
              <Route exact path='/' component={SplashPage}/>
              <Route path='/signup' component={UserSignUp} />
              <Route path='/login' component={UserLogin} />
              <Route path='/admin' component={AdminPage} />
            </div>
        </Router>
      </div>
    )
  }
}

export default App;
