import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {addUser} from '../actions';

class UserSignUp extends Component {
  constructor(props){
    super(props)
    this.state={
      user: {
        firstName: "first name",
        lastName: "last name",
        email: "email address",
        neighborhood: "neighborhood",
        password: "choose a password",
        verifyPassword: "reenter password"
      }
    }
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
    addUser(this.state)
  }

render(){
  return (
    <div>
        <div className="App-header">
          <h2>Sign Up</h2>
        </div>

        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='formGroup'>
            <input type='text' name='firstName' id='firstName' value={this.state.user.firstName} onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className='formGroup'>
          <input type='text' name='lastName' id='lastName' value={this.state.user.lastName} onChange={this.handleChange.bind(this)}></input>
          </div>

          <div className='formGroup'>
          <input type='text' name='email' id='email' value={this.state.user.email} onChange={this.handleChange.bind(this)}></input>
          </div>

          <div className='formGroup'>
          <input type='text' name='neighborhood' id='neighborhood' value={this.state.user.neighborhood} onChange={this.handleChange.bind(this)}></input>
          </div>

          <div className='formGroup'>
          <input type='text' name='password' id='password' value={this.state.user.password} onChange={this.handleChange.bind(this)}></input>
          </div>

          <div className='formGroup'>
          <input type='text' name='verifyPassword' id='verifyPassword' value={this.state.user.verifyPassword} onChange={this.handleChange.bind(this)}></input>
          </div>

          <div className='formGroup'>
            <input type='submit' value='Let Me In!!' className='btn btn-primary'></input>
          </div>
        </form>
        <div>
          <Link to="/">Take Me Back!!</Link>
        </div>
      </div>
    );
  }
}
export default UserSignUp;
