import React, { Component } from 'react';
import Header from './components/Header'
import UserSignUp from './routes/UserSignUp';
import Home from './routes/Home';
import UserLogin from './routes/UserLogin';
import UserProfile from './routes/UserProfile';
// import CreateEvent from './routes/CreateEvent';
import SplashPage from './routes/SplashPage';
import AdminPage from './routes/AdminPage';
import {updatePlaces} from './actions'
import {checkLogin} from './actions'
import PlaceIndex from './components/PlaceIndex'
import UserIndex from './components/UserIndex'

// import placeStore from './stores/PlaceStore'
import './style/app.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import userStore from './stores/UserStore';

// import userStore from './stores/UserStore';
// import { addUser } from './actions';

//only the most parent component should be responsible for fetching data, aka here


class App extends Component {
  constructor(props){
    super(props)
    checkLogin()
    // updatePlaces()
    this.state = {}
}

  render() {
    return (
      <div className='wrapper'>
        <Router>
          <div>
            <Header />
            <Route exact path='/' component={SplashPage}/>
            <Route path='/signup' component={UserSignUp} />
            <Route path='/login' component={UserLogin} />
            <Route path='/places' component={PlaceIndex} />
            <Route path='/admin' component={AdminPage} />
            <Route path='/home' component={Home} />
            <Route path='/profile' component={UserProfile} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
