import React, { Component } from 'react';
import Header from './components/Header'
import UserSignUp from './routes/UserSignUp';
import Home from './routes/Home';
import UserLogin from './routes/UserLogin';
import SplashPage from './routes/SplashPage';
import AdminPage from './routes/AdminPage';
import {updatePlaces} from './actions'
import PlaceIndex from './components/PlaceIndex'
// import placeStore from './stores/PlaceStore'
import './style/App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import userStore from './stores/UserStore';

// import userStore from './stores/UserStore';
// import { addUser } from './actions';


// import userStore from './stores/UserStore';
// import { addUser } from './actions';

//only the most parent component should be responsible for fetching data, aka here

class App extends Component {
  constructor(props){
    super(props)
    updatePlaces()
    this.state = {}
}
  render() {
    return (
      <div className='wrapper'>
        <Router>
          <div>
            <Header />
            <Route exact path='/' component={SplashPage}/>
            <Route exact path='/signup' component={UserSignUp} />
            <Route exact path='/login' component={UserLogin} />
            <Route exact path='/places' component={PlaceIndex} />
            <Route exact path='/admin' component={AdminPage} />
            <Route exact path='/home' component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
