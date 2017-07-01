import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';

class SplashPage extends Component {
  render(){
    return (
      <div className='splash-page'>
        <div className='wrapper'>
          <div className='header-wrapper'>
          <Header />
          </div>
          <div className='button-container'>
            <div className='login'>
              <Link className='FontAmatic' to='/login'>Log In</Link>
            </div>
            <div className='signup'>
              <Link className='FontAmatic' to='/signup'>Sign Up</Link>
            </div>
            <img className='fruit-border' src='../Images/fruit-border.jpg' alt='fruit'></img>
        </div>
        </div>
      </div>
    );
  }
}
export default SplashPage;
