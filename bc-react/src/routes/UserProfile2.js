import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import SideBar from '../components/SideBar';
import {updateUser} from '../actions';
import userStore from '../stores/UserStore';
// import MyUploader from '../components/PhotoUpload'

class UserProfile2 extends Component {
  constructor(props){
    super(props)
    this.state={
      user: userStore.getUser(),
      // editedUser: {
      //   firstName: '',
      //   lastName: '',
      //   neighborhood: '',
      //   email: ''
      // },
      editIcon: '../Images/edit.png',
      readOnly: true,
      title: 'edit',
      header: 'Edit Profile'
    }
  }

  editIcon(){
    return(
      <img id="edit_icon"
          src={this.state.editIcon}
          alt="edit"
          title={this.state.title}
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
          onClick={this.handleClick.bind(this)}
        />
        )}

  handleMouseEnter(e){
    if (e.target.id === "edit_icon" && this.state.editIcon === '../Images/edit.png')
      {this.setState({editIcon: '../Images/hover-edit.png'})}
    else {return ""}}

  handleMouseLeave(e){
    if (e.target.id === "edit_icon" && this.state.editIcon === '../Images/hover-edit.png')
      {this.setState({editIcon: '../Images/edit.png'})}
    else {return ""}}

  handleClick(){
    if(this.state.editIcon === '../Images/hover-edit.png'){
      this.setState({editIcon: '../Images/save.png', readOnly: false, title: 'save', className: 'editable', header: 'Save Profile'})
      this.handleEdit.bind(this)
    }else if(this.state.editIcon === '../Images/save.png'){
      this.setState({editIcon: '../Images/edit.png', readOnly: true, title: 'edit', className: 'read-only', header: 'Edit Profile'})
      this.handleSave()
    }else {return ""}}

  handleEdit(e){
    let target = e.target
    let user = this.state.user
    user[target.name] = target.value
    this.setState({
      user: user
    })
    }

  handleSave(e){
    e.preventDefault();
    updateUser(this.state.user);
  }

  // handleChange(e){
  //   let target = e.target
  //   let editedUser = this.state.editedUser
  //   editedUser[target.name] = target.value
  //   this.setState({
  //     editedUser: editedUser
  //   })
  // }

  // handleSubmit(e){
  //   e.preventDefault();
  //   updateUser(this.state.editedUser);
  // }

  render(){

    return (
        <div>
          <SideBar />
          <div className='profile-page'>
            <div className='welcome-user'>
              Welcome, {this.state.user.firstName}
            </div>
            <div className="edit">
              <input
                size='10'
                disabled='true'
                type='text'
                value={this.state.header}
              />
              {this.editIcon()}
            </div>
          <table>
            <tbody>
              <tr>
                <td className='field'>First Name:</td>
                <td>
                  <input
                    className={this.state.className}
                    type='text'
                    name='firstName'
                    id='firstName'
                    disabled={this.state.readOnly}
                    value={this.state.user.firstName}
                    onChange={this.handleEdit.bind(this)}>
                  </input>
                </td>
              </tr>
              <tr>
                <td className='field'>Last Name:</td>
                <td>
                  <input
                    className={this.state.className}
                    type='text'
                    name='lastName'
                    id='lastName'
                    disabled={this.state.readOnly}
                    value={this.state.user.lastName}
                    onChange={this.handleEdit.bind(this)}>
                  </input>
                </td>
              </tr>
              <tr>
                <td className='field'>Email Address:</td>
                <td>
                  <input
                    className={this.state.className}
                    size='30'
                    type='email'
                    name='email'
                    id='email'
                    disabled={this.state.readOnly}
                    value={this.state.user.email}
                    onChange={this.handleEdit.bind(this)}>
                  </input>
                </td>
              </tr>
              <tr>
                <td className='field'>Neighborhood:</td>
                <td>
                  <input
                    className={this.state.className}
                    type='text'
                    name='neighborhood'
                    id='neighborhood'
                    disabled={this.state.readOnly}
                    value={this.state.user.neighborhood}
                    onChange={this.handleEdit.bind(this)}>
                  </input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      <img className='fruit-border' src='../Images/fruit-border.jpg' alt='fruit'></img>
    </div>
      );
    }
}
export default UserProfile2;
