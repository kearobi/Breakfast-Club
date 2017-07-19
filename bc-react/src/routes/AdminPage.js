//AdminPage fetches the data and passes props to AdminUsers, AdminPlaces, AdminEvents

import React, {Component} from 'react';
import AdminUsers from '../components/Admin/AdminUsers';
import AdminPlaces from '../components/Admin/AdminPlaces';
import AdminEvents from '../components/Admin/AdminEvents';
import SideBar from '../components/SideBar';
import SideBarMini from '../components/SideBarMini';
import adminStore from '../stores/AdminStore';
import Header from '../components/Header';

class AdminPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      places: [],
      events: [],
      userButton: "admin_button",
      placeButton: "admin_button",
      eventButton: "admin_button"
    }
    this.onAdminUpdate = this.adminUpdate.bind(this)
  }
  //the admin store deletes a user, it yells 'ive changed!' to everyone who's listening, and when it does that it calls updateUsers. (we told componentwillmount to issue this whenever there's a change)

  adminUpdate(){
    if(this.state.userButton === "admin_button_clicked"){
      this.setState({users: adminStore.adminReturnUsers()})}
    else if (this.state.placeButton === "admin_button_clicked"){
      this.setState({places: adminStore.adminReturnPlaces()})}
    else if (this.state.eventButton === "admin_button_clicked"){
      this.setState({events: adminStore.adminReturnEvents()})}
    else {return ("")}}

  componentWillMount(){
    adminStore.on('change', this.onAdminUpdate)
  }

  componentWillUnmount(){
    adminStore.removeListener('change', this.onAdminUpdate)
  }

  handleUserHover(){
    this.setState({
      userButton: "admin_button_clicked",
      eventButton: "admin_button",
      placeButton: "admin_button"
    })}
  handleEventHover(){
    this.setState({
      eventButton: "admin_button_clicked",
      userButton: "admin_button",
      placeButton: "admin_button"
    })}
  handlePlaceHover(){
    this.setState({
      placeButton: "admin_button_clicked",
      userButton: "admin_button",
      eventButton: "admin_button"
    })}

  pageAdmin(){
    if(this.state.userButton === "admin_button_clicked"){
      return (<AdminUsers users={this.state.users} />)
    }else if (this.state.placeButton === "admin_button_clicked"){
      return (<AdminPlaces places={this.state.places} />)
    }else if (this.state.eventButton === "admin_button_clicked"){
      return (<AdminEvents events={this.state.events}/>)}
    else {return ""}}

  render(){
    return(
      <div className="wrapper">{/* //this is the flex container */}
        <SideBar/>
        <div className='admin-page'>{/* //this is a flex item */}
          <div className='nested'>{/* //this is a nested flex container */}
            <SideBarMini/>
            <Header />
            <h3>hello there, admin</h3>
              <div id="admin_button_wrapper">
                <button
                  className={this.state.placeButton}
                  type="button"
                  onMouseOver={this.handlePlaceHover.bind(this)}>manage places</button>
                <button
                  className={this.state.userButton}
                  type="button"
                  onMouseOver={this.handleUserHover.bind(this)}>manage users</button>
                <button
                  className={this.state.eventButton}
                  type="button"
                  onMouseOver={this.handleEventHover.bind(this)}>manage events</button>
              </div>
            <br></br><br></br><br></br>
            {this.pageAdmin()}
          </div>
        </div>
      </div>
    );
  }
}
export default AdminPage;
