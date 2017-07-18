import React, { Component } from 'react';
import UserSignUp from './routes/UserSignUp';
import Home from './routes/Home';
import UserLogin from './routes/UserLogin';
import UserProfile from './routes/UserProfile';
import TestEvent from './routes/TestEvent';
import SplashPage from './routes/SplashPage';
import AdminPage from './routes/AdminPage';
import MessageBoardToggle from './components/MessageBoardToggle';
import AdminTest from './components/Admin_Dry/AdminPage';
import {setUserFromLocal} from './actions/UserActions'
import Places from './routes/Places'
import CurrentEvent from './routes/CurrentEvent'
import Photos from './routes/Photos'
import VotePage from './routes/VotePageMockUp'
import PageNotFound from './routes/PageNotFound'
import './style/App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import userStore from './stores/UserStore'
import {fetchEvents, checkIfVotingOver, fetchCurrentEvent, checkEventOver} from './actions/EventActions';
import {fetchMessages} from './actions/MessageActions';

//only the most parent component should be responsible for fetching data, aka here?

class App extends Component {
  constructor(props){
    super(props)
    setUserFromLocal()
    this.state = {
      user: userStore.getUser()
    }
    this.updateUser = this.updateUser.bind(this)
  }

  componentWillMount(){
    userStore.on('change', this.updateUser)
  }

  componentWillUnmount(){
    userStore.removeListener('change', this.updateUser)
  }

  updateUser(){
    this.setState({
      user: userStore.getUser()
    })
  }

  render() {

    let loggedIn = this.state.user.authToken
    let isAdmin = this.state.user.admin

    return (
      //can refactor to pass props to Sidebar component here and only display if user is logged in
      //TODO: make sidebar dumb component by passing props down from here
      //https://www.learnacademy.org/days/566 - Current User video
      <Router>
        <div>
          {loggedIn && <MessageBoardToggle />}
          <Switch>
            <Route  exact path='/'
                    render={()=>(loggedIn ? (<Redirect to='/home' />) : (<SplashPage />)
                    )} />
            <Route  exact path='/signup'
                    render={()=>(loggedIn ? (<Redirect to='/home' />) : (<UserSignUp />)
                    )} />
            <Route  exact path='/login'
                    render={()=>(
                    loggedIn ? (<Redirect to='/home' />) : (<UserLogin />)  )} />
            <Route  exact path='/places'
                    render={()=>(loggedIn ? (<Places />) : (<Redirect to='/' />)
                    )} />
            <Route  exact path='/home'
                    render=
                    {()=>(loggedIn ? (<Home user={this.state.user} />) : (<Redirect to='/' />)
                    )} />
            <Route  exact path='/profile'
                    render={()=>(
                    loggedIn ? (<UserProfile user={this.state.user}/>) : (<Redirect to='/' />)
                    )} />
            <Route  exact path='/current-event'
                    render={()=>(
                    loggedIn ? (<CurrentEvent />) : (<Redirect to='/' />)
                    )} />
            <Route  exact path='/photos'
                    render={()=>(
                    loggedIn ? (<Photos />) : (<Redirect to='/' />)
                    )} />
            {/* //TODO: add admin check to profile page */}
            <Route  exact path='/admin'
                    render={()=>(
                    isAdmin && loggedIn ? (<AdminPage />) : (<Redirect to='/' />)
                    )} />
            {/* <Route exact path='/admin' component={AdminPage} /> */}
            <Route exact path='/test-event' component={TestEvent} />
            <Route exact path='/vote' component={VotePage} />
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
