import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import UserSignUp from './routes/UserSignUp';
import UserLogin from './routes/UserLogin';
import SplashPage from './routes/SplashPage';
import AdminPage from './routes/AdminPage';
import {updatePlaces} from './actions'
import PlaceIndex from './components/PlaceIndex'
// import placeStore from './stores/PlaceStore'
import './style/App.css';


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
              <Route exact path='/' component={SplashPage}/>
              <Route path='/signup' component={UserSignUp} />
              <Route path='/places' component={PlaceIndex} />
              <Route path='/login' component={UserLogin} />
              <Route path='/admin' component={AdminPage} />
            </div>
        </Router>
      </div>
    )
  }
}

export default App;
