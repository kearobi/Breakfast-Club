import React, { Component } from 'react';
import './App.css';
import UserSignUp from './components/UserSignUp';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {updatePlaces} from './actions'
import PlaceIndex from './components/PlaceIndex'
// import placeStore from './stores/PlaceStore'


// import userStore from './stores/UserStore';
// import { addUser } from './actions';


class App extends Component {
  constructor(props){
    super(props)
    updatePlaces()
    this.state = {}
}
  render() {
    return (
      <Router>
        <div className="container App">
          <div>
            <div>
              <Link to='/signup'>Sign Up</Link>
              <Link to='/place'>place</Link>
            </div>
            <div>
              <Route exact path='/place' component={PlaceIndex} />
              <Route exact path='/signup' component={UserSignUp}></Route>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
