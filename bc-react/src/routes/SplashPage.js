import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SplashPage extends Component {
  render(){
    return (
      <div className='splash-page'>
        <div className='button-container'>
          <div className='login'>
            <Link className='FontAmatic' to='/login'>
              Log In
            </Link>
          </div>
          <div className='signup'>
            <Link className='FontAmatic' to='/signup'>
              Sign Up
            </Link>
          </div>
        </div>
        <img className='fruit-border' src='../Images/fruit-border.jpg' alt='fruit'></img>
      </div>
      );
    }
}
export default SplashPage;
