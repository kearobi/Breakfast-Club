import React, {Component} from 'react';
import UserIndex from '../components/UserIndex';
import SearchBar from '../components/SearchBar';
import AdminStore from '../stores/AdminStore';
//const api
//only the most parent component should be responsible for fetching data

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

class AdminPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: AdminStore.getUsers()
    }
  }

  updateUsers(){
    this.setState({
      users: AdminStore.getUsers()
    })
  }

  componentWillMount(){
    AdminStore.on('change', this.updateUsers.bind(this))
  }

  showUserList(){
    value: this.state.value ;
  }

  render(){
    return(
      <div id="admin_container">
        <h3>hello there, admin</h3>
        <br></br>
        <div id="admin_button_wrapper">
          <button className="admin_button" type="button">manage places</button>
          <button className="admin_button" type="button">manage users</button>
          <button className="admin_button" type="button">manage events</button>
        </div>
        <br></br>
          <br></br><br></br><br></br>
          <h3 className='center'>User List</h3>
        <div id="search_bar_wrapper">
          {/* now SearchBar has access to users */}
          <SearchBar users={this.state.users}/>
        </div>
          <button className="add_button" type="button">+ add</button>
          <br></br><br></br>
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Neighborhood</th>
              <th>Password</th>
            </tr>
              <UserIndex />
          </table>
      </div>
      );
    }
  }
export default AdminPage;
