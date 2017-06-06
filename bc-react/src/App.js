import React, { Component } from 'react';
import Header from './components/Header'
import Home from './routes/Home';
import UserLogin from './routes/UserLogin';
import SplashPage from './routes/SplashPage';
import AdminPage from './routes/AdminPage';
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
              <Link to='/signup'>Sign Up</Link>
            </div>
            <Route exact path='/' component={SplashPage}/>
            <Route path='/signup' component={UserSignUp} />
            <Route path='/login' component={UserLogin} />
            <Route path='/admin' component={AdminPage} />
            <Route path='/home' component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
