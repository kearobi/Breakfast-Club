import React, {Component} from 'react';

//const api
//only the most parent component should be responsible for fetching data

//now in our Admin page we have users, and we want to put that into our Search Bar so it can use those props

class AdminEvents extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div id="admin_container">
        <h3 className='center'>Events</h3>
      </div>
      );
    }
  }
export default AdminEvents;
