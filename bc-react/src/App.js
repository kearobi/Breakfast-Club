import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Router>
          <Header />
        </Router>

      </div>
    );
  }
}

export default App;
