import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import UserIndex from '../components/UserIndex';

//const api
//only the most parent component should be responsible for fetching data

class AdminPage extends Component {
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
          <button className="admin_button" type="button" onClick={this.showUserList}>manage users</button>
          <button className="admin_button" type="button">manage events</button>
        </div>
        <br></br>
          <br></br><br></br><br></br>
        <div id="search_bar_wrapper">
        <SearchBar />
        </div>
          <button className="add_button" type="button">+ add</button>
          <br></br><br></br>
          <table className="center">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Neighborhood</th>
              <th>Password</th>
              <th className="table_icons"></th>
            </tr>
            <UserIndex />
        </table>
      </div>
      );
    }
  }
export default AdminPage;
