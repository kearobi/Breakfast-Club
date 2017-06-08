import React, { Component } from 'react';
import {addUser} from '../actions';

class AdminModal extends Component {
  constructor(props){
    super(props)
    this.state={
      user: {
        firstName: "",
        lastName: "",
        email: "",
        neighborhood: "",
        password: "",
        verifyPassword: ""
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
    <div id='modal' class='modal'>
      <div class="modal-content">
        <span class="close">&times;</span>
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='formGroup'>
            <input
              placeholder='first name'
              type='text'
              name='firstName'
              id='firstName'
              value={this.state.user.firstName}
              onChange={this.handleChange.bind(this)}>
            </input>
          </div>
          <div className='formGroup'>
            <input
              placeholder='last name'
              type='text'
              name='lastName'
              id='lastName'
              value={this.state.user.lastName}
              onChange={this.handleChange.bind(this)}>
            </input>
          </div>
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
            placeholder='neighborhood'
            type='text'
            name='neighborhood'
            id='neighborhood'
            value={this.state.user.neighborhood}
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
          <div className='formGroup'>
          <input
            placeholder='reenter password'
            type='password'
            name='verifyPassword'
            id='verifyPassword'
            value={this.state.user.verifyPassword}
            onChange={this.handleChange.bind(this)}>
          </input>
          <div className='formGroup align-button'>
            <input type='submit' value='submission'></input>
          </div>
          </div>
          <br />
        </form>
      </div>
    </div>
    )
  }
}
export default AdminModal;
