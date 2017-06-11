import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SideBar from '../components/SideBar';
import {updateUser} from '../actions';
import userStore from '../stores/UserStore';

class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state={
      user: userStore.getUser(),
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
          <SideBar />
          <div className='profile-container'>
            Welcome, {/* {this.user.firstName} */}!
          <form className='form' onSubmit={this.handleSubmit.bind(this)}>
            First Name:
              {/* {this.user.firstName} */}
            <div className='formGroup'>
              <input
                // placeholder={this.user.email}
                type='text'
                name='firstName'
                id='firstName'
                // value={this.state.editedUser.firstName}
                onChange={this.handleChange.bind(this)}>
              </input>
            </div>
            Last Name:
            {/* {this.user.lastName} */}
            <div className='formGroup'>
              <input
                // placeholder={this.user.lastName}
                type='text'
                name='lastName'
                id='lastName'
                // value={this.state.editedUser.lastName}
                onChange={this.handleChange.bind(this)}>
              </input>
            </div>
            Email:
              {/* {this.user.email} */}
            <div className='formGroup'>
              <input
                // placeholder={this.user.email}
                type='email'
                name='email'
                id='email'
                // value={this.state.editedUser.email}
                onChange={this.handleChange.bind(this)}>
              </input>
            </div>
            Neighborhood:
              {/* {this.user.neighborhood} */}
            <div className='formGroup'>
              <input
                // placeholder={this.user.neighborhood}
                type='text'
                name='neighborhood'
                id='neighborhood'
                // value={this.state.editedUser.neighborhood}
                onChange={this.handleChange.bind(this)}>
              </input>
            </div>
            <div className='formGroup'>
              <input
                type='submit'
                value='Save'
              />
            </div>
          </form>
        </div>
        </div>
      );
    }
}
export default UserProfile;
