import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';

class SplashPage extends Component {
  render(){
    return (
      <div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 FontAmatic">
              <Link
                className="FontAmatic"
                to="/login">
                Log In
              </Link>
              <Link
                className="FontAmatic"
                to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      );
    }
}
export default SplashPage;
