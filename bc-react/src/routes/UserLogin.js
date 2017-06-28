import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import {loginUser, checkLoginRedir, createNewEvent} from '../actions';
import userStore from '../stores/UserStore';
import ('../style/UserLogin.css');

class UserLogin extends Component {
  constructor(props){
    super(props)
    this.state={
      user: {
        email: "",
        password: ""
      },
      message: '../Images/white.PNG'
    }
  }

  componentWillMount(){
    userStore.on('login-success', this.redirectToHome.bind(this));
    userStore.on('login-fail', this.loginFailed.bind(this));
    checkLoginRedir(this.props)
  }

  redirectToHome(){
    this.props.history.push("/home-initial");
  }

  loginFailed(){
    this.setState({
      message: '../Images/InvalidCred.PNG'
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
        message: '../Images/Email-password-verification.PNG'
      })
    }
    else {
      loginUser(this.state.user)
    }
  }

render(){
  return (
    <div className="login-page">
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <div className="entry-header">
            Log In
          </div>
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
                <div className="button-container">
                  <Link className="take-me-back entry-button" to="/">
                    <button className='entry-button wobble'>Take Me Back!!</button>
                  </Link>
                <div className='formGroup let-me-in'>
                    <input className="entry-button wobble" type='submit' value='Let Me In!!'></input>
                </div>
              </div>
            </form>
          </div>
        <div className='col-md-4'>
          <img src={this.state.message}></img>
        </div>
      </div>
    </div>
  );
  }
}
export default UserLogin;
