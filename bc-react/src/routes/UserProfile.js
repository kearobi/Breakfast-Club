import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import {updateUser} from '../actions';
import UserStore from '../stores/UserStore';

class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state={
      user: UserStore.getUser(),
      editedUser: {
        firstName: '',
        lastName: '',
        neighborhood: '',
        email: ''
      }
    }
  }

  handleChange(e){
    let target = e.target
    let editedUser = this.state.editedUser
    editedUser[target.name] = target.value
    this.setState({
      editedUser: editedUser
    })
  }

  handleSubmit(e){
    e.preventDefault();
    updateUser(this.state.editedUser);
  }

  render(){
    return (
        <div>
          <form className='form' onSubmit={this.handleSubmit.bind(this)}>
            <p>First Name: {this.user.firstName}</p>
            <div className='formGroup'>
              <input
                placeholder={this.user.email}
                type='text'
                name='firstName'
                id='firstName'
                value={this.state.editedUser.firstName}
                onChange={this.handleChange.bind(this)}>
              </input>
            </div>
            <p>last Name: {this.user.lastName}</p>
            <div className='formGroup'>
              <input
                placeholder={this.user.lastName}
                type='text'
                name='lastName'
                id='lastName'
                value={this.state.editedUser.lastName}
                onChange={this.handleChange.bind(this)}>
              </input>
            </div>
            <p>Email: {this.user.email}</p>
            <div className='formGroup'>
              <input
                placeholder={this.user.email}
                type='email'
                name='email'
                id='email'
                value={this.state.editedUser.email}
                onChange={this.handleChange.bind(this)}>
              </input>
            </div>
            <p>Neighborhood: {this.user.neighborhood}</p>
            <div className='formGroup'>
              <input
                placeholder={this.user.neighborhood}
                type='text'
                name='neighborhood'
                id='neighborhood'
                value={this.state.editedUser.neighborhood}
                onChange={this.handleChange.bind(this)}>
              </input>
            </div>
          </form>
        </div>
      );
    }
}
export default UserProfile;
