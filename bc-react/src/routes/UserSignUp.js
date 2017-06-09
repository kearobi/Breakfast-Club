import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {addUser} from '../actions';
import SignUpInput from '../components/SignUpInput'
import Header from '../components/Header';
import signUpStore from '../stores/SignUpStore'
import userStore from '../stores/UserStore'

class UserSignUp extends Component {
  constructor(props){
    super(props)
    this.state={
      user: signUpStore.getFields(),
      errors: {},
      message: ''
    }
  }

  componentWillMount(){
    userStore.on('User Created', this.redirectToHome.bind(this))
  userStore.on('user create fail', this.loginFailed.bind(this))
  }

  redirectToHome(){
    console.log('test')
    this.props.history.push("/Home");
  }

  loginFailed(){
    this.setState({
      message: 'Registration failed, credentials invalid'
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

  validate(){
  signUpStore.validate()
  this.setState({errors: signUpStore.getErrors()})
  }


  handleSubmit(e){
    e.preventDefault();
    this.validate()
    if(Object.keys(signUpStore.getErrors()).length < 1 ){
      addUser(this.state.user)
    }
  }


render(){
  return (
    <div>
        <div id="sign_up">
          Sign Up
        </div>
        {this.state.message}
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
              <SignUpInput
                name='firstName'
                type={this.state.type}
                placeholder='first name'
                value={this.state.user.firstName}
                onChange={this.handleChange.bind(this)}
                errors={this.state.errors.firstName}/>
            <SignUpInput
              placeholder='last name'
              type={this.state.type}
              name='lastName'
              value={this.state.user.lastName}
              onChange={this.handleChange.bind(this)}
              errors={this.state.errors.lastName}
            />
            <SignUpInput
              placeholder='email address'
              type={this.state.type}
              name='email'
              value={this.state.user.email}
              onChange={this.handleChange.bind(this)}
              errors={this.state.errors.email}
            />
            <SignUpInput
              placeholder='neighborhood'
              type={this.state.type}
              name='neighborhood'
              value={this.state.user.neighborhood}
              onChange={this.handleChange.bind(this)}
              errors={this.state.errors.neighborhood}
            />
            <SignUpInput
              placeholder='password'
              type='password'
              name='password'
              value={this.state.user.password}
              onChange={this.handleChange.bind(this)}
              errors={this.state.errors.password}
            />
            <SignUpInput
              placeholder='reenter password'
              type='password'
              name='verifyPassword'
              value={this.state.user.verifyPassword}
              onChange={this.handleChange.bind(this)}
              errors={this.state.errors.verifyPassword}
            />
            <input type='submit' value='Let Me In!!'></input>
        </form>
        <div className='center align-button'>
          <Link to="/">
          <div className="align-button">
            <input
              className='take-me-back'
              type='button'
              value='Take Me Back!!'>
            </input>
          </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default UserSignUp;
