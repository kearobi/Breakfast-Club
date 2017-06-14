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

//need to get starting state and update the state accordingly

class AdminTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: this.props.user,
      place: this.props.place,
      event: this.props.event,
      deleteIcon: '../Images/delete.png',
      editIcon: '../Images/edit.png',
      readOnly: true,
      title: 'edit',
      className: 'read-only'
    }
  }

  handleMouseEnter(e){
    if (e.target.id === 'delete_icon' && this.state.deleteIcon === '../Images/delete.png')
    {this.setState({deleteIcon: '../Images/hover-delete.png'})}
    else if (e.target.id === "edit_icon" && this.state.editIcon === '../Images/edit.png')
    {this.setState({editIcon: '../Images/hover-edit.png'})}    }

  handleMouseLeave(e){
    if (e.target.id === 'delete_icon' && this.state.deleteIcon === '../Images/hover-delete.png')
    {this.setState({deleteIcon: '../Images/delete.png'})}
    else if (e.target.id === "edit_icon" && this.state.editIcon === '../Images/hover-edit.png')
    {this.setState({editIcon: '../Images/edit.png'})}    }

  handleClick(){
    if(this.state.editIcon === '../Images/hover-edit.png'){
        this.setState({editIcon: '../Images/save.png', readOnly: false, title: 'save', className: 'editable'})
        this.handleEdit.bind(this)}
    else if(this.state.editIcon === '../Images/save.png'){
        this.setState({editIcon: '../Images/edit.png', readOnly: true, title: 'edit', className: 'read-only'})
        this.handleSave()}
    else if(this.state.deleteIcon === '../Images/hover-delete.png'){
      if(this.props.userTable){adminDeleteUser(this.props.user.id)}
      else if(this.props.placeTable){adminDeletePlace(this.props.place.id)}
      else if(this.props.eventTable){adminDeleteEvent(this.props.event.id)}}  }

  handleEdit(e){
    console.log("state: ", this.state)
    console.log("value: ", e.nativeEvent.target.value)
    debugger
      // this.setState({user: {user: {firstName: e.nativeEvent.target.value}}})
      // this.setState({...this.state, user: {
      //     ...this.state.user,
      //     user: {...this.state.user.user, firstName: e.nativeEvent.target.value}}})
      console.log("new user state: ", this.state.user)
    }


  handleSave(){
    if(this.props.userTable){
      adminEditUser(this.props.user)}
    else if(this.props.placeTable){
      adminEditPlace(this.props.place)}
    else if(this.props.eventTable){
      adminEditEvent(this.props.event)}  }

  // let response = confirm("Wait really?")
  //could also pass this.props.user, but we added id so we're only handing it the data it needs to get the job done
// }

  deleteIcon(){
    return(
      <img id="delete_icon"
          src={this.state.deleteIcon}
          alt="delete"
          title="delete"
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
          onClick={this.handleClick.bind(this)} />   )}

  editIcon(){
    return(
      <img id="edit_icon"
          src={this.state.editIcon}
          alt="edit"
          title={this.state.title}
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
          onClick={this.handleClick.bind(this)} />    )}

  render(){
    if(this.props.userTable){
      return (
        <tr className={this.state.className}>
            <td>
              <input  value={this.state.user.firstName}
                      onChange={this.handleEdit.bind(this)}
                      disabled={this.state.readOnly}
                      size='9'/>
            </td>
            <td>
              <input  value={this.state.user.lastName}
                      onChange={this.handleEdit.bind(this)}
                      disabled={this.state.readOnly}
                      size='11'/>
            </td>
            <td>
              <input  value={this.state.user.email}
                      onChange={this.handleEdit.bind(this)}
                      disabled={this.state.readOnly}
                      size='15'/>
            </td>
            <td>
              <input  value={this.state.user.neighborhood}
                      onChange={this.handleEdit.bind(this)}
                      disabled={this.state.readOnly}
                      size='8' />
            </td>
            <td>
              <input  value={this.state.user.encryptedPassword}
                      onChange={this.handleEdit.bind(this)}
                      disabled={this.state.readOnly}
                      size='7'/>
            </td>
            <td className="icon_td">{this.deleteIcon()}</td>
            <td className="icon_td">{this.editIcon()}</td>
        </tr>
    )}else if(this.props.placeTable){
      return (
        <tr className={this.state.className}>
          <td>
            <input
              value={this.state.place.name}
              size='20'
              onChange={this.handleEdit.bind(this)}
              disabled={this.state.readOnly}/>
          </td>
          <td>
            <input
              value={this.state.place.yelp_rating}
              size='3'
              onChange={this.handleEdit.bind(this)}
              disabled={this.state.readOnly} />
          </td>
          <td>
            <input
              value={this.state.place.categories}
              onChange={this.handleEdit.bind(this)}
              disabled={this.state.readOnly} />
          </td>
          <td>
            <input
              value={this.state.place.price}
              size='3'
              onChange={this.handleEdit.bind(this)}
              disabled={this.state.readOnly} />
          </td>
          <td>
            <input
              value={this.state.place.address_street}
              onChange={this.handleEdit.bind(this)}
              disabled={this.state.readOnly} />
          </td>
          <td>
            <input
              value={this.state.place.phone}
              size='15'
              onChange={this.handleEdit.bind(this)}
              disabled={this.state.readOnly} />
          </td>
          <td className="icon_td">{this.deleteIcon()}</td>
          <td className="icon_td">{this.editIcon()}</td>
        </tr>
    )}else if(this.props.eventTable){
      <tr className={this.state.className}>
        <td>
          <input
          value={this.props.event.date}
          onChange={this.handleEdit.bind(this)}
          disabled={this.state.readOnly} /></td>
        <td>
          <input
          value={this.props.event.place}
          onChange={this.handleEdit.bind(this)}
          disabled={this.state.readOnly} /></td>
        <td>neighborhood</td>
        <td>guest speaker</td>
        <td>rsvp</td>
        <td className="icon_td">{this.deleteIcon()}</td>
        <td className="icon_td">{this.editIcon()}</td>
      </tr>
    }}
}

export default AdminTable;
