import React, { Component } from 'react';
import UserSignUp from './routes/UserSignUp';
import Home from './routes/Home';
import UserLogin from './routes/UserLogin';
import UserProfile from './routes/UserProfile';
import TestEvent from './routes/TestEvent';
import SplashPage from './routes/SplashPage';
import AdminPage from './routes/AdminPage';
import AdminTest from './components/Admin_Dry/AdminPage';
import {updatePlaces} from './actions'
import Places from './routes/Places'
import Messages from './components/Messages'
import CurrentEvent from './routes/CurrentEvent'
import Photos from './routes/Photos'
import VotePage from './routes/VotePage'
import FlexPractice from './components/FlexPractice'
import PageNotFound from './routes/PageNotFound'
import './style/App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import userStore from './stores/UserStore'
//only the most parent component should be responsible for fetching data, aka here?

class App extends Component {
  constructor(props){
    super(props)
    // updatePlaces()
    this.state = {}
    this.updateLoginStatus = this.updateLoginStatus.bind(this)
  }

  componentWillMount(){
    userStore.on('change', this.updateLoginStatus)
  }

  componentWillUnmount(){
    userStore.removeListener('change', this.updateLoginStatus)
  }

  updateLoginStatus(){
    this.setState({isLoggedIn: userStore.checkLogin()})
  }
  // handleInitialHome(){
  //   return (
  //     <Home initial="true"/>
  //   )
  // }
  //
  // handleDefaultHome(){
  //   return (
  //     <Home initial="false"/>
  //   )
  // }

  render() {
    return (
      //can refactor to pass props to Sidebar component here and only display if user is logged in
      //TODO: make sidebar dumb component by passing props down from here
      //https://www.learnacademy.org/days/566 - Current User video
      <Router>
        <div>
          <Switch>
            <Route  exact path='/'
                    render={()=>(
                    // this.state.isLoggedIn ? (<Redirect to='/home' />) : (
                      <SplashPage />
                    // )
                    )} />
            <Route  exact path='/signup'
                    render={()=>(
                    // this.state.isLoggedIn ? (<Redirect to='/home' />) : (
                      <UserSignUp />
                    // )
                  )} />
            <Route  exact path='/login'
                    render={()=>(
                    this.state.isLoggedIn ? (<Redirect to='/home' />) : (<UserLogin />)  )} />
            <Route  exact path='/places'
                    render={()=>(
                    // this.state.isLoggedIn ? (
                      <Places />
                    // ) : (<Redirect to='/' />)
                  )} />
            {/* <Route exact path='/home-initial' render={this.handleInitialHome} /> */}
            {/* <Route exact path='/home' render={this.handleDefaultHome} /> */}
            <Route  exact path='/home'
                    render={()=>(
                    // this.state.isLoggedIn ? (
                      <Home />
                    // ) : (<Redirect to='/' />)
                    )} />
            <Route  exact path='/profile'
                    render={()=>(
                    // this.state.isLoggedIn ? (
                      <UserProfile />
                    // ) : (<Redirect to='/' />)
                  )} />
            <Route  exact path='/current-event'
                    render={()=>(
                    // this.state.isLoggedIn ? (
                      <CurrentEvent />
                    // ) : (<Redirect to='/' />)
                  )} />
            <Route  exact path='/photos'
                    render={()=>(
                    // this.state.isLoggedIn ? (
                      <Photos />
                    // ) : (<Redirect to='/' />)
                   )} />
            {/* //TODO: add admin check to profile page */}
            <Route exact path='/admin' component={AdminPage} />
            <Route exact path='/test-event' component={TestEvent} />
            <Route exact path='/vote' component={VotePage} />
            <Route exact path='/flex' component={FlexPractice} />
            <Route exact path='/messages' component={Messages} />
            <Route exact path='/adminTest' component={AdminTest} />
            <Route exact path='/404' component={PageNotFound} />
            <Redirect to='/404'/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
