import React, {Component} from 'react';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import userStore from '../stores/UserStore';
import {editUser, logout} from '../actions/UserActions';
// import MyUploader from '../components/PhotoUpload'
import Header from '../components/Header';
import Input from '../components/Input';
import AdminKey from '../components/Admin/AdminKey';

class UserProfile extends Component {
  constructor(props){
    super(props)
    this.state={
      user: this.props.user,
      editIcon: '../Images/edit.png',
      readOnly: true,
      title: 'edit',
      header: 'Edit Profile'
    }
  }

  editIcon(){
    return(
      <img  id="edit_icon"
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

  handleSave(){
    editUser(this.state.user);
  }

  handleDeactivate(e){
    let target = e.target
    let user = this.state.user
    user[target.id] = false
    this.setState({
      user: user
    })
    editUser(this.state.user);
    //TODO: CONFIRM PROMPT TO DEACTIVATE ACCOUNT
    logout()
  }

  render(){

    let isAdmin = (this.state.user.admin && this.state.user.email !== "breakfastclub.sd@gmail.com")

    return (
          <div className='wrapper'>{/* //this is the flex container */}
            <SideBar />{/* //this is a flex item  with a nested flex container */}
            <div className='profile-page'>{/* //this is a flex item */}
              <div className='nested'>{/* //this is a nested flex container */}
                <Header />
                <SideBarMini />
            <div className='welcome-user'>
              Welcome, {this.state.user.firstName}
            </div>
            <div className='edit-wrapper'>
            <div className="edit">
              <Input
                size='10'
                disabled='true'
                value={this.state.header}
              />
            </div>
            <div className="edit-icon">
              {this.editIcon()}
            </div>
            </div>
          <table className='profile-table'>
            <tbody>
              <tr>
                <td className='field'>First Name:</td>
                <td>
                  <input
                    className={this.state.className}
                    name='firstName'
                    type='text'
                    disabled={this.state.readOnly}
                    value={this.state.user.firstName}
                    onChange={this.handleEdit.bind(this)} />
                </td>
              </tr>
              <tr>
                <td className='field'>Last Name:</td>
                <td>
                  <input
                    className={this.state.className}
                    name='lastName'
                    type='text'
                    disabled={this.state.readOnly}
                    value={this.state.user.lastName}
                    onChange={this.handleEdit.bind(this)} />
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
                    disabled={this.state.readOnly}
                    value={this.state.user.email}
                    onChange={this.handleEdit.bind(this)} />
                </td>
              </tr>
              <tr>
                <td className='field'>Neighborhood:</td>
                <td>
                  <input
                    type='text'
                    className={this.state.className}
                    name='neighborhood'
                    disabled={this.state.readOnly}
                    value={this.state.user.neighborhood}
                    onChange={this.handleEdit.bind(this)} />
                </td>
              </tr>
            </tbody>
          </table>
          <p className='delete' onClick={this.handleDeactivate.bind(this)} id='active'>deactivate my account</p>
        </div>
        </div>
      <img className='fruit-border' src='../Images/fruit-border.jpg' alt='fruit'></img>
      {isAdmin && <AdminKey />}
    </div>
      );
    }
}
export default UserProfile;
