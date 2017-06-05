import React from 'react';
import SearchBar from './search_bar';
import Header from './header';
import UserTable from './user_table';
const AdminView = function(){
  return(
    <div>
      <Header />
      <h3>hello there, admin</h3>
      <br></br>
      <div id="admin_button_wrapper">
        <button className="admin_button" type="button">manage places</button>
        <button className="admin_button" type="button">manage users</button>
        <button className="admin_button" type="button">manage events</button>
      </div>
        <br></br>
      <div id="search_bar_wrapper">
      <SearchBar />
      <div id="add_button_wrapper">
        <button className="add_button" type="button">add</button>
      </div>
      </div>
        <br></br><br></br>
      <UserTable />
    </div>
    );
  }

export default AdminView;
