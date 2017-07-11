import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {updateLogin, submitLogin} from '../actions';
import userStore from '../stores/UserStore';
import loginStore from '../stores/UserStore';
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
    // userStore.on('admin-login', this.redirectToAdmin.bind(this));
    // userStore.on('login-success', this.redirectToHome.bind(this));
    // userStore.on('login-fail', this.loginFailed.bind(this));
    // //where does UserLogin receive props from?
    // checkLoginRedir(this.props, userStore.getUser());
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

  // redirectToHome(){
  //   this.props.history.push("/home-initial");
  // }
  //
  // redirectToAdmin(){
  //   this.props.history.push("/admin");
  // }
  //
  // loginFailed(){
  //   this.setState({
  //     message: '../Images/InvalidCred.PNG'
  //   })
  // }

  handleChange(e){
    let target = e.target
    // let user = this.state.user
    // user[target.name] = target.value
    // this.setState({
    //   user: user
    // })
    updateLogin(target.name, target.value)
  }

  handleSubmit(e){
    e.preventDefault();
    // if (this.state.user.email === "" || this.state.user.password === ""){
    //   this.setState({
    //     message: 'email address and password required'
    //   })
    // }
    // else if (!this.state.user.active) {
    //   this.setState({
    //     message: 'this account is no longer active'
    //   })
    // }
    // else {
    //   loginUser(this.state.user)
    // }
    submitLogin()
  }

  isValid(){
    return Object.keys(this.state.errors).length === 0
  }

render(){
  return (
    <div className="login-page">
      <div className="wrapper">
        <div className='header-wrapper'><Header /></div>
          <div className="entry-header">Log In</div>
          { !this.isValid() &&
            <div>Please verify that all fields are filled in below.</div>
          }
          <form className='form' onSubmit={this.handleSubmit.bind(this)}>
            <Input
              placeholder='email address'
              type='email'
              name='email'
              value={this.state.user.email}
              onChange={this.handleChange.bind(this)}
              errors={this.state.errors.email}
             />
            <Input
              placeholder='password'
              type='password'
              name='password'
              value={this.state.user.password}
              onChange={this.handleChange.bind(this)}
              errors={this.state.errors.password}  />
            <div className='let-me-in'>
                <input className="entry-button wobble" type='submit' value='Let Me In!!'></input>
            </div>
            <Link className="take-me-back" to="/">
              <button className='entry-button wobble'>Take Me Back!!</button>
            </Link>
            </form>
            <div className='validate'>{this.state.message}</div>
            <img className='fruit-border' src='../Images/fruit-border.jpg' alt='fruit'></img>
        </div>
      </div>
    );
  }
}
export default UserLogin;
