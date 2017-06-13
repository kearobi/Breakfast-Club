import React, { Component } from 'react';
import Header from './components/Header'
import UserSignUp from './routes/UserSignUp';
import Home from './routes/Home';
import UserLogin from './routes/UserLogin';
import UserProfile from './routes/UserProfile';
import TestEvent from './routes/TestEvent';
import SplashPage from './routes/SplashPage';
import AdminPage from './routes/AdminPage';
import {updatePlaces} from './actions'
import {checkLogin} from './actions'
import PlaceIndex from './components/PlaceIndex'
import CurrentEvent from './routes/CurrentEvent'

// import placeStore from './stores/PlaceStore'
// import './style/App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import userStore from './stores/UserStore';

// import userStore from './stores/UserStore';
// import { addUser } from './actions';

//only the most parent component should be responsible for fetching data, aka here


class App extends Component {
  constructor(props){
    super(props)
    checkLogin()
    updatePlaces()
    this.state = {}
  }

  handleHome(){
    return (
      <Home initial="true"/>
    )
  }

  render() {
    return (
      <div className='wrapper'>
        <Router>
          <div>
            <Header className='header-component' />
            <Route exact path='/' component={SplashPage}/>
            <Route exact path='/signup' component={UserSignUp} />
            <Route exact path='/login' component={UserLogin} />
            <Route exact path='/places' component={PlaceIndex} />
            <Route exact path='/admin' component={AdminPage} />
            <Route exact path='/home-initial' render={this.handleHome} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/profile' component={UserProfile} />
            <Route exact path='/test-event' component={TestEvent} />
            <Route path='/current-event' component={CurrentEvent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
