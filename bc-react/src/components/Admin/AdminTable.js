import React, { Component } from 'react';
import {adminDeleteUser} from '../../actions';
import {adminDeletePlace} from '../../actions';

class AdminTable extends Component {
  constructor(props){
    super(props)
  }

  handleDelete(){
      if(this.props.userTable){
    // let response = confirm("Wait really?")
    //could also pass this.props.user, but we added id so we're only handing it the data it needs to get the job done
        adminDeleteUser(this.props.user.id)}
      else if(this.props.placeTable){
        adminDeletePlace(this.props.place.id)}
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
            <td>{this.props.user.firstName}</td>
            <td>{this.props.user.lastName}</td>
            <td>{this.props.user.email}</td>
            <td>{this.props.user.neighborhood}</td>
            <td>{this.props.user.encryptedPassword}</td>
            <td className="icon_td">{this.deleteIcon()}</td>
            <td className="icon_td">{this.editIcon()}</td>
        </tr>
      )
    } else if(this.props.placeTable){
      return (
        <tr>
          <td>{this.props.place.name}</td>
          <td>{this.props.place.yelp_rating}</td>
          <td>{this.props.place.categories}</td>
          <td>{this.props.place.price}</td>
          <td>{this.props.place.address_street}</td>
          <td>{this.props.place.phone}</td>
          <td className="icon_td">{this.deleteIcon()}</td>
          <td className="icon_td">{this.editIcon()}</td>
        </tr>
      )
    }
  }
}

export default AdminTable;

//this.props.user because tha'ts where the user's hanging out -- in the props
