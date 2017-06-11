import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import {loginUser, checkLoginRedir} from '../actions';
import userStore from '../stores/UserStore';

class UserLogin extends Component {
  constructor(props){
    super(props)
    this.state={
      user: {
        email: "",
        password: ""
      },
      message: ''
    }
  }

  componentWillMount(){
    userStore.on('login-success', this.redirectToHome.bind(this));
    userStore.on('login-fail', this.loginFailed.bind(this));
    checkLoginRedir(this.props)
  }

  redirectToHome(){
    this.props.history.push("/home");
  }

  loginFailed(){
    this.setState({
      message: 'Login failed, credentials invalid'
    })
  }

  handleChange(e){
    let target = e.target
    let user = this.state.user
    user[target.name] = target.value
    this.setState({
      user: user
    })
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.user.email === "" || this.state.user.password === ""){
      this.setState({
        message: "Email and password required"
      })
    }
    else {
      loginUser(this.state.user)
    }
  }

render(){
  return (
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4 FontAmatic">
              Log In
            </div>
            <div className="col-sm-4">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
            </div>
            <div className="col-sm-6">
              <form className='form' onSubmit={this.handleSubmit.bind(this)}>
                <div className='formGroup'>
                  <input
                    placeholder='email address'
                    type='email'
                    name='email'
                    id='email'
                    value={this.state.user.email}
                    onChange={this.handleChange.bind(this)}>
                  </input>
                </div>
                <div className='formGroup'>
                  <input
                    placeholder='password'
                    type='password'
                    name='password'
                    id='password'
                    value={this.state.user.password}
                    onChange={this.handleChange.bind(this)}>
                  </input>
                </div>
                <div className='formGroup align-button'>
                  <input className='let-me-in' type='submit' value='Let Me In!!'></input>
                </div>
              </form>
            </div>
            <div className="col-sm-3">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4 center">
              <Link to="/">
              <div className="align-button">
                <input
                  className='take-me-back'
                  type='button'
                  value='Take Me Back!!'>
                </input>
              </div>
              </Link>
              <div className="alert alert-warning"><strong>{this.state.message}</strong></div>
            </div>
            <div className="col-sm-4">
            </div>
          </div>
        </div>
    );
  }
}
export default UserLogin;
