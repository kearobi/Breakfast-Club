//AdminTable gets props from AdminList
//AdminTable does not pass props

import React, { Component } from 'react';
import {adminDeleteUser} from '../../actions';
import {adminDeletePlace} from '../../actions';
import {adminDeleteEvent} from '../../actions';

class AdminTable extends Component {
  constructor(props){
    super(props)
    //add state to the table so it's aware and it can do handleChange
  }

  handleDelete(){
      if(this.props.userTable){
    // let response = confirm("Wait really?")
    //could also pass this.props.user, but we added id so we're only handing it the data it needs to get the job done
        adminDeleteUser(this.props.user.id)}
      else if(this.props.placeTable){
        adminDeletePlace(this.props.place.id)}
      else if(this.props.eventTable){
        adminDeleteEvent(this.props.event.id)}
      }

  deleteIcon(){
    return(
      <img id="delete_icon"
          src="https://www.iconfinder.com/data/icons/google-material-design-icons/48/ic_delete_48px-128.png"
          alt="delete"
          onClick={this.handleDelete.bind(this)} />
    )
  }

  editIcon(){
    return(
      <img id="edit_icon"
          src="http://megaicons.net/static/img/icons_sizes/8/178/512/editing-edit-icon.png"
          alt="edit"
          // onClick={this.handleClick.bind(this)}
        />
    )
  }

  render(){
    if(this.props.userTable){
      return (
        <tr>
            <td contentEditable={false}>{this.props.user.firstName}</td>
            <td contentEditable={false}>{this.props.user.lastName}</td>
            <td contentEditable={false}>{this.props.user.email}</td>
            <td contentEditable={false}>{this.props.user.neighborhood}</td>
            <td contentEditable={false}>{this.props.user.encryptedPassword}</td>
            <td className="icon_td">{this.deleteIcon()}</td>
            <td className="icon_td">{this.editIcon()}</td>
        </tr>
      )
    } else if(this.props.placeTable){
      return (
        <tr>
          <td contentEditable={false}>{this.props.place.name}</td>
          <td contentEditable={false}>{this.props.place.yelp_rating}</td>
          <td contentEditable={false}>{this.props.place.categories}</td>
          <td contentEditable={false}>{this.props.place.price}</td>
          <td contentEditable={false}>{this.props.place.address_street}</td>
          <td contentEditable={false}>{this.props.place.phone}</td>
          <td className="icon_td">{this.deleteIcon()}</td>
          <td className="icon_td">{this.editIcon()}</td>
        </tr>
      )}
      else if(this.props.eventTable){
      <tr>
        <td contentEditable={false}>{this.props.event.date}</td>
        <td contentEditable={false}>{this.props.event.place}</td>
        <td contentEditable={false}>neighborhood</td>
        <td contentEditable={false}>guest speaker</td>
        <td contentEditable={false}>rsvp</td>
      </tr>
      }
  }
}

export default AdminTable;

//this.props.user because tha'ts where the user's hanging out -- in the props
