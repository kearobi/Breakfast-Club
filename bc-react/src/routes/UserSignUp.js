//UserSignUp passes props to Input component

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Input from '../components/Input'
import signUpStore from '../stores/SignUpStore'
import Header from '../components/Header';
import {updateRegistration, submitRegistration} from '../actions/UserActions'

class UserSignUp extends Component {
  constructor(props){
    super(props)
    this.state={
      registration: signUpStore.getFields(),
      errors: {},
    }
    this.updateRegistration= this.updateRegistration.bind(this)
  }

  componentWillMount(){
    // userStore.on('User Created', this.redirectToHome.bind(this))
    // userStore.on('user create fail', this.loginFailed.bind(this))
    signUpStore.on('change', this.updateRegistration)
  }

  // redirectToHome(){
  //   this.props.history.push("/Home");
  // }
  componentWillUnmount(){
    signUpStore.removeListener('change', this.updateRegistration)
  }

  updateRegistration(){
    this.setState({
      registration: signUpStore.getFields(),
      errors: signUpStore.getErrors()
    })
  }

  // loginFailed(){
  //   this.setState({
  //     message: 'registration failed, credentials invalid'
  //   })
  // }

  handleChange(e){
    let target = e.target
    // let user = this.state.user
    // user[target.name] = target.value
    // this.setState({
    //   user: user
    // })
    updateRegistration(target.name, target.value)
  }

  // validate(){
  //   signUpStore.validate()
  //   this.setState({errors: signUpStore.getErrors()})
  // }


  handleSubmit(e){
    e.preventDefault();
    submitRegistration()
  }

render(){
  return (
    <div className='signup-page'>
        <div className="wrapper">
        <div className="header-wrapper"> <Header /></div>
      <div className="entry-header">
        Sign Up
      </div>
        {this.state.message}
        <form className='form'
              onSubmit={this.handleSubmit.bind(this)}>
          <Input
            name='firstName'
            placeholder='first name'
            value={this.state.registration.firstName}
            onChange={this.handleChange.bind(this)}
            errors={this.state.errors.firstName}
          />
          <Input
            placeholder='last name'
            name='lastName'
            value={this.state.registration.lastName}
            onChange={this.handleChange.bind(this)}
            errors={this.state.errors.lastName}
            />
          <Input
            placeholder='email address'
            name='email'
            value={this.state.registration.email}
            onChange={this.handleChange.bind(this)}
            errors={this.state.errors.email}
            />
          <Input
            placeholder='neighborhood'
            name='neighborhood'
            value={this.state.registration.neighborhood}
            onChange={this.handleChange.bind(this)}
            errors={this.state.errors.neighborhood}
            />
          <Input
            placeholder='password'
            type='password'
            name='password'
            value={this.state.registration.password}
            onChange={this.handleChange.bind(this)}
            errors={this.state.errors.password}
            />
          <Input
            placeholder='reenter password'
            type='password'
            name='verifyPassword'
            value={this.state.registration.verifyPassword}
            onChange={this.handleChange.bind(this)}
            errors={this.state.errors.verifyPassword}
            />
              <div className='let-me-in'>
                <input className="entry-button wobble" type='submit' value='Let Me In!!'></input>
              </div>
              <Link className="take-me-back" to="/">
                <button className='entry-button wobble'>Take Me Back!!</button>
              </Link>
        </form>
      </div>
    <img className='fruit-border' src='../Images/fruit-border.jpg' alt='fruit'></img>
  </div>
    );
  }
}
export default UserSignUp;
