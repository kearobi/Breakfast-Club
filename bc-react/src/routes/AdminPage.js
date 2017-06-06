import React from 'react';
import SearchBar from '../components/search_bar';
import Header from '../components/Header';
import UserListing from '../components/user_listing';

//const api
//only the most parent component should be responsible for fetching data

const AdminPage = function(){
  return(
    <div id="admin_container">
      <Header />
      <h3>hello there, admin</h3>
      <br></br>
      <div id="admin_button_wrapper">
        <button className="admin_button" type="button">manage places</button>
        <button className="admin_button" type="button">manage users</button>
        <button className="admin_button" type="button">manage events</button>
      </div>
      <br></br>
        <br></br><br></br><br></br>
      <div id="search_bar_wrapper">
      <SearchBar />
      </div>
        <button className="add_button" type="button">+ add</button>
        <br></br><br></br>
      <UserListing />
    </div>
    );
  }

export default AdminPage;
