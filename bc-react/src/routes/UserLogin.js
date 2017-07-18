import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {updateLogin, submitLogin} from '../actions/UserActions';
import loginStore from '../stores/LoginStore';
import Header from '../components/Header';
import Input from '../components/Input';

class UserLogin extends Component {
  constructor(props){
    super(props)
    this.state={
      login: loginStore.getFields(),
      errors: {}
    }
    this.updateLogin = this.updateLogin.bind(this)
  }

  componentWillMount(){
    loginStore.on('change', this.updateLogin)
  }

  componentWillUnmount(){
    loginStore.removeListener('change', this.updateLogin)
  }

  updateLogin(){
    this.setState({
      login: loginStore.getFields(),
      errors: loginStore.getErrors()
    })
  }

  handleChange(e){
    let target = e.target
    updateLogin(target.name, target.value)
  }

  handleSubmit(e){
    e.preventDefault();
    submitLogin()
  }

render(){
  return (
    <div className="login-page">
      <div className="wrapper">
        <div className='header-wrapper'><Header /></div>
          <div className="entry-header">Log In</div>
          <form className='form' onSubmit={this.handleSubmit.bind(this)}>
            <Input
              placeholder='email address'
              name='email'
              value={this.state.login.email}
              onChange={this.handleChange.bind(this)}
              errors={this.state.errors.email}
             />
            <Input
              placeholder='password'
              type='password'
              name='password'
              value={this.state.login.password}
              onChange={this.handleChange.bind(this)}
              errors={this.state.errors.password}  />
            <div className='let-me-in'>
                <input className="entry-button wobble" type='submit' value='Let Me In!!'></input>
            </div>
            <Link className="take-me-back" to="/">
              <button className='entry-button wobble'>Take Me Back!!</button>
            </Link>
            </form>
            <div className='validate'>{this.state.errors.general || this.state.errors.inactive}</div>
            <img className='fruit-border' src='../Images/fruit-border.jpg' alt='fruit'></img>
        </div>
      </div>
    );
  }
}
export default UserLogin;
