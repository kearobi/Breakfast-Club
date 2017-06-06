import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';

class SplashPage extends Component {
  render(){
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
              <Link to="/signup"><h3>Sign Up</h3></Link><br/>
              <Link to="/login"><h3>Login</h3></Link>
            </div>
            <div className="col-sm-4">
            </div>
          </div>
        </div>
      </div>
      );
    }
}
export default SplashPage;
