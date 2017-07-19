//AdminTable gets props from AdminUsers, AdminPlaces, AdminEvents
//AdminTable does not pass props

import React, { Component } from 'react';
import {adminDeleteUser} from './actions';
import {adminDeletePlace} from './actions';
import {adminDeleteEvent} from './actions';
import {adminEditUser, adminLoadUsers} from './actions';
import {adminEditPlace, adminLoadPlaces} from './actions';
import {adminEditEvent, adminLoadEvents} from './actions';

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
    adminLoadUsers()
    adminLoadPlaces()
    adminLoadEvents()
  }

  handleMouseEnter(e){
    if (e.target.id === 'delete_icon' && this.state.deleteIcon === '../Images/delete.png')
    {this.setState({deleteIcon: '../Images/hover-delete.png'})}
    else if (e.target.id === "edit_icon" && this.state.editIcon === '../Images/edit.png')
    {this.setState({editIcon: '../Images/hover-edit.png'})}
    else {return ""}}

  handleMouseLeave(e){
    if (e.target.id === 'delete_icon' && this.state.deleteIcon === '../Images/hover-delete.png')
    {this.setState({deleteIcon: '../Images/delete.png'})}
    else if (e.target.id === "edit_icon" && this.state.editIcon === '../Images/hover-edit.png')
    {this.setState({editIcon: '../Images/edit.png'})}
    else {return ""}}

  handleClick(){
    if(this.state.editIcon === '../Images/hover-edit.png'){
        this.setState({editIcon: '../Images/save.png', readOnly: false, title: 'save', className: 'editable'})
        this.handleEdit.bind(this)}
    else if(this.state.editIcon === '../Images/save.png'){
        this.setState({editIcon: '../Images/edit.png', readOnly: true, title: 'edit', className: 'read-only'})
        this.handleSave()}
    else if(this.state.deleteIcon === '../Images/hover-delete.png'){
      if(this.props.userTable){adminDeleteUser(this.state.user.id)}
      else if(this.props.placeTable){adminDeletePlace(this.state.place.id)}
      else if(this.props.eventTable){adminDeleteEvent(this.state.event.id)}}
      else {return ""}}

      // let response = confirm("Wait really?")
      //could also pass this.props.user, but we added id so we're only handing it the data it needs to get the job done
    // }

      //there are two ways to read/set property of the object. 1. dot notation (user.firstName) 2. square bracket notation (user["firstName"]). if you're looking for a variable substitution, best to use the square bracket

  handleEdit(e){
    let target = e.nativeEvent.target
    let user = this.state.user
    let place = this.state.place
    let event = this.state.event
      if(this.props.userTable){
        user[target.name] = target.value
        this.setState({user: user})  }
      else if(this.props.placeTable){
        place[target.name] = target.value
        this.setState({place: place})  }
      else if(this.props.eventTable){
        event[target.name] = target.value
        this.setState({event: event})  }
    }

  handleSave(){
    if(this.props.userTable){
      adminEditUser(this.state.user)}
    else if(this.props.placeTable){
      adminEditPlace(this.state.place)}
    else if(this.props.eventTable){
      adminEditEvent(this.state.event)}  }

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
              <input  name='firstName'
                      value={this.state.user.firstName}
                      onChange={this.handleEdit.bind(this)}
                      disabled={this.state.readOnly}
                      size='9'/>
            </td>
            <td>
              <input  name='lastName'
                      value={this.state.user.lastName}
                      onChange={this.handleEdit.bind(this)}
                      disabled={this.state.readOnly}
                      size='11'/>
            </td>
            <td>
              <input  name='email'
                      value={this.state.user.email}
                      onChange={this.handleEdit.bind(this)}
                      disabled={this.state.readOnly}
                      size='20'/>
            </td>
            <td>
              <input  name='neighborhood'
                      value={this.state.user.neighborhood}
                      onChange={this.handleEdit.bind(this)}
                      disabled={this.state.readOnly}
                      size='15' />
            </td>
            <td>
              <input  name='encryptedPassword'
                      value={this.state.user.encryptedPassword}
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
              name='name'
              value={this.state.place.name}
              size='20'
              onChange={this.handleEdit.bind(this)}
              disabled={this.state.readOnly}/>
          </td>
          <td>
            <input
              name='yelp_rating'
              value={this.state.place.yelp_rating}
              size='3'
              onChange={this.handleEdit.bind(this)}
              disabled={this.state.readOnly} />
          </td>
          <td>
            <input
              name='categories'
              value={this.state.place.categories}
              onChange={this.handleEdit.bind(this)}
              disabled={this.state.readOnly} />
          </td>
          <td>
            <input
              name='price'
              value={this.state.place.price}
              size='3'
              onChange={this.handleEdit.bind(this)}
              disabled={this.state.readOnly} />
          </td>
          <td>
            <input
              name='address_street'
              value={this.state.place.address_street}
              onChange={this.handleEdit.bind(this)}
              disabled={this.state.readOnly} />
          </td>
          <td>
            <input
              name='phone'
              value={this.state.place.phone}
              size='15'
              onChange={this.handleEdit.bind(this)}
              disabled={this.state.readOnly} />
          </td>
          <td className="icon_td">{this.deleteIcon()}</td>
          <td className="icon_td">{this.editIcon()}</td>
        </tr>
    )}else if(this.props.eventTable){
      return(
      <tr className={this.state.className}>
        <td>
          <input
            name='date'
            value={this.state.event.date}
            onChange={this.handleEdit.bind(this)}
            disabled={this.state.readOnly} /></td>
        <td>
          <input
            // name='place'
            // value={this.state.event.place}
            // onChange={this.handleEdit.bind(this)}
            // disabled={this.state.readOnly}
          /></td>
        <td>neighborhood</td>
        <td>guest speaker</td>
        <td>rsvp</td>
        <td className="icon_td">{this.deleteIcon()}</td>
        <td className="icon_td">{this.editIcon()}</td>
      </tr>
    )}else{
      return(<div></div>)}
  }
}

export default AdminTable;
