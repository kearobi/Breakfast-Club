//AdminTable gets props from AdminList
//AdminTable does not pass props

import React, { Component } from 'react';
import {adminDeleteUser} from '../../actions';
import {adminDeletePlace} from '../../actions';
import {adminDeleteEvent} from '../../actions';
import {adminEditUser} from '../../actions';
import {adminEditPlace} from '../../actions';
import {adminEditEvent} from '../../actions';
import adminStore from '../../stores/AdminStore';

class AdminTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      editUser: '',
      deleteIcon: '../Images/delete-black.png',
      editIcon: '../Images/edit-black.png',
      contentEditable: false,
      highlight: 'no-highlight'
    }
  }

  // componentWillMount(){
  //   adminStore.on('change', this.handleSave.bind(this))}

  handleSave(){ if(this.props.userTable){
                  this.setState({editUser: adminEditUser(this.props.user.id)})}
                if(this.props.placeTable){
                  this.setState({editPlace: adminEditPlace(this.props.user.id)})}
                // if(this.props.eventTable){adminEditEvent(this.props.event.id)}
              }
  //
  // handleHover(e){
  //   if (e.target.id === 'delete_icon' && this.state.deleteIcon === '../Images/delete-black.png')
  //   {this.setState({deleteIcon: '../Images/delete-pink.png'})}
  //   else if (e.target.id === "edit_icon" && this.state.editIcon === '../Images/edit-black.png')
  //   {this.setState({editIcon: '../Images/edit-pink.png'})}
  // }

  handleClick(){
    if(this.props.userTable && this.state.editIcon === '../Images/edit-pink.png'){
      this.setState({editIcon: '../Images/save-pink.png', contentEditable: true, highlight: 'highlight'})}
    else if(this.props.userTable && this.state.editIcon === '../Images/save-pink.png'){
      this.setState({editIcon: '../Images/edit-black.png', contentEditable: false, highlight: 'no-highlight'})
      this.handleSave()}
    else if (this.props.userTable
      // && this.state.deleteIcon === '../Images/delete-pink.png'
    ){adminDeleteUser(this.props.user.id)}
    else if (this.props.placeTable && this.state.deleteIcon === '../Images/delete-pink.png'){
      adminDeletePlace(this.props.place.id)}
    else if (this.props.eventTable && this.state.deleteIcon === '../Images/delete-pink.png'){
      adminDeleteEvent(this.props.event.id)}    }
  // let response = confirm("Wait really?")
  //could also pass this.props.user, but we added id so we're only handing it the data it needs to get the job done
// }

  deleteIcon(){
    return(
      <img id="delete_icon"
          src={this.state.deleteIcon}
          alt="delete"
          title="delete"
          // onMouseOver={this.handleHover.bind(this)}
          onClick={this.handleClick.bind(this)} />
    )
  }

  editIcon(){
    return(
      <img id="edit_icon"
          src={this.state.editIcon}
          alt="edit"
          title="edit"
          // onMouseOver={this.handleHover.bind(this)}
          onClick={this.handleClick.bind(this)}
        />
    )
  }

  render(){
    if(this.props.userTable){
      return (
        <tr contentEditable={this.state.contentEditable} className={this.state.highlight}>
            <td className="admin-td"><span className={this.state.highlight}>{this.props.user.firstName}</span></td>
            <td className="admin-td"><span className={this.state.highlight}>{this.props.user.lastName}</span></td>
            <td className="admin-td"><span className={this.state.highlight}>{this.props.user.email}</span></td>
            <td className="admin-td"><span className={this.state.highlight}>{this.props.user.neighborhood}</span></td>
            <td className="admin-td"><span className={this.state.highlight}>{this.props.user.encryptedPassword}</span></td>
            <td className="icon_td">{this.deleteIcon()}</td>
            <td className="icon_td">{this.editIcon()}</td>
        </tr>
      )
    } else if(this.props.placeTable){
      return (
        <tr contentEditable={this.state.contentEditable} className={this.state.highlight}>
          <td className="admin-td"><span className={this.state.highlight}>{this.props.place.name}</span></td>
          <td className="admin-td"><span className={this.state.highlight}>{this.props.place.yelp_rating}</span></td>
          <td className="admin-td"><span className={this.state.highlight}>{this.props.place.categories}</span></td>
          <td className="admin-td"><span className={this.state.highlight}>{this.props.place.price}</span></td>
          <td className="admin-td"><span className={this.state.highlight}>{this.props.place.address_street}</span></td>
          <td className="admin-td"><span className={this.state.highlight}>{this.props.place.phone}</span></td>
          <td className="icon_td">{this.deleteIcon()}</td>
          <td className="icon_td">{this.editIcon()}</td>
        </tr>
      )}
      else if(this.props.eventTable){
      <tr contentEditable={this.state.contentEditable} className={this.state.highlight}>
        <td className="admin-td"><span className={this.state.highlight}>{this.props.event.date}</span></td>
        <td className="admin-td"><span className={this.state.highlight}>{this.props.event.place}</span></td>
        <td className="admin-td"><span className={this.state.highlight}>neighborhood</span></td>
        <td className="admin-td"><span className={this.state.highlight}>guest speaker</span></td>
        <td className="admin-td"><span className={this.state.highlight}>rsvp</span></td>
        <td className="icon_td">{this.deleteIcon()}</td>
        <td className="icon_td">{this.editIcon()}</td>
      </tr>
      }
  }
}

export default AdminTable;

//this.props.user because tha'ts where the user's hanging out -- in the props
